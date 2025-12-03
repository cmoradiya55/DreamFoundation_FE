'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Baby, User, Calendar, Ruler, Scale } from 'lucide-react';

import { MobileInput, TextInput, DateInput, RadioInput } from '@/components/FormComponents';
import AcknowledgmentCheckbox from '@/components/FormComponents/AcknowledgmentCheckbox';
import AgeCategoryComponent from '@/app/healthyBabyCompitition/AgeCategoryComponent';
import { GraphQLClientError } from '@/lib/graphqlClient';
import {
    HealthyBabyCompetitionInput,
    CreateHealthyBabyCompetitionMutation,
} from './HealthyBabyCompititionGraphQL';

type HealthyBabyCompetitionForm = {
    fullName: string;
    gender: string;
    dateOfBirth: string;
    ageYears: string;
    ageMonths: string;
    ageCategory: string;
    heightInCm: string;
    weightInKg: string;
    fatherName: string;
    fatherMobile: string;
    fatherMobileCountryCode: string;
    motherName: string;
    motherMobile: string;
    motherMobileCountryCode: string;
    emergencyContactName: string;
    emergencyContactRelation: string;
    emergencyMobile: string;
    emergencyMobileCountryCode: string;
    consentFormAccepted: boolean;
};

const defaultValues: HealthyBabyCompetitionForm = {
    fullName: '',
    gender: '',
    dateOfBirth: '',
    ageYears: '',
    ageMonths: '',
    ageCategory: '',
    heightInCm: '',
    weightInKg: '',
    fatherName: '',
    fatherMobile: '',
    fatherMobileCountryCode: '+91',
    motherName: '',
    motherMobile: '',
    motherMobileCountryCode: '+91',
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyMobile: '',
    emergencyMobileCountryCode: '+91',
    consentFormAccepted: false,
};

const parseFloatField = (value: string | number, label: string) => {
    const normalized = typeof value === 'string' ? value.trim() : `${value}`;
    if (!normalized) {
        throw new Error(`${label} is required.`);
    }
    const parsed = Number(normalized);
    if (!Number.isFinite(parsed)) {
        throw new Error(`${label} must be a valid number.`);
    }
    if (parsed < 0) {
        throw new Error(`${label} cannot be negative.`);
    }
    return parsed;
};

const parseIntegerField = (value: string | number, label: string) => {
    const normalized = typeof value === 'string' ? value.trim() : `${value}`;
    if (!normalized) {
        throw new Error(`${label} is required.`);
    }
    const parsed = Number(normalized);
    if (!Number.isFinite(parsed)) {
        throw new Error(`${label} must be a valid number.`);
    }
    if (parsed < 0) {
        throw new Error(`${label} cannot be negative.`);
    }
    return Math.trunc(parsed);
};

const sanitizeDigits = (value?: string) => value?.replace(/\D/g, '') ?? '';

const buildHealthyBabyCompetitionInput = (formData: HealthyBabyCompetitionForm): HealthyBabyCompetitionInput => {
    const fatherCountryCodeDigits = sanitizeDigits(formData.fatherMobileCountryCode) || '91';
    const fatherMobileDigits = sanitizeDigits(formData.fatherMobile);
    const motherCountryCodeDigits = sanitizeDigits(formData.motherMobileCountryCode) || '91';
    const motherMobileDigits = sanitizeDigits(formData.motherMobile);
    const emergencyCountryCodeDigits = sanitizeDigits(formData.emergencyMobileCountryCode) || '91';
    const emergencyMobileDigits = sanitizeDigits(formData.emergencyMobile);

    if (fatherMobileDigits.length !== 10) {
        throw new Error('Father mobile number must be a valid 10-digit number.');
    }

    if (motherMobileDigits.length !== 10) {
        throw new Error('Mother mobile number must be a valid 10-digit number.');
    }

    if (emergencyMobileDigits.length !== 10) {
        throw new Error('Emergency mobile number must be a valid 10-digit number.');
    }

    // Validate date of birth - must be on or after December 1, 2022
    const dateOfBirth = formData.dateOfBirth.trim();
    const minDate = new Date('2022-12-01');
    const birthDate = new Date(dateOfBirth);

    if (birthDate < minDate) {
        throw new Error('Only babies born after December 1, 2022 can participate in this competition.');
    }

    return {
        fullName: formData.fullName.trim(),
        gender: formData.gender === 'MALE' || formData.gender === 'FEMALE' ? formData.gender : (() => { throw new Error('Gender must be either "MALE" or "FEMALE".'); })(),
        dateOfBirth: dateOfBirth,
        heightInCm: parseFloatField(formData.heightInCm, 'Height'),
        weightInKg: parseFloatField(formData.weightInKg, 'Weight'),
        fatherName: formData.fatherName.trim(),
        fatherMobileCountryCode: parseIntegerField(fatherCountryCodeDigits, 'Father country code'),
        fatherMobile: parseIntegerField(fatherMobileDigits, 'Father mobile number'),
        motherName: formData.motherName.trim(),
        motherMobileCountryCode: parseIntegerField(motherCountryCodeDigits, 'Mother country code'),
        motherMobile: parseIntegerField(motherMobileDigits, 'Mother mobile number'),
        emergencyContactName: formData.emergencyContactName.trim(),
        emergencyContactRelation: formData.emergencyContactRelation.trim(),
        emergencyMobileCountryCode: parseIntegerField(emergencyCountryCodeDigits, 'Emergency country code'),
        emergencyMobile: parseIntegerField(emergencyMobileDigits, 'Emergency mobile number'),
        consentFormAccepted: formData.consentFormAccepted,
    };
};


const HealthyBabyCompitition = () => {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
    const {
        control,
        handleSubmit,
        reset,
        setError,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<HealthyBabyCompetitionForm>({
        defaultValues,
    });

    // Calculate age in years and months based on date of birth
    const calculateAge = (dateOfBirth: string): { years: number; months: number } => {
        if (!dateOfBirth) return { years: 0, months: 0 };

        const birthDate = new Date(dateOfBirth);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        if (today.getDate() < birthDate.getDate()) {
            months--;
            if (months < 0) {
                years--;
                months += 12;
            }
        }

        return { years, months };
    };

    // Watch date of birth changes and update age automatically
    const watchedDateOfBirth = watch('dateOfBirth');
    const watchedAgeYears = watch('ageYears');
    const watchedAgeMonths = watch('ageMonths');

    useEffect(() => {
        if (watchedDateOfBirth) {
            const { years, months } = calculateAge(watchedDateOfBirth);
            setValue('ageYears', years.toString());
            setValue('ageMonths', months.toString());
        } else {
            // Clear age if date of birth is cleared
            setValue('ageYears', '');
            setValue('ageMonths', '');
        }
    }, [watchedDateOfBirth, setValue]);

    const onSubmit = async (data: HealthyBabyCompetitionForm) => {
        setStatus('idle');
        setFeedbackMessage(null);

        try {
            const input = buildHealthyBabyCompetitionInput(data);
            const result = await CreateHealthyBabyCompetitionMutation(input);

            setStatus('success');
            setFeedbackMessage(
                result
                    ? 'Thank you! Your registration has been submitted successfully. Our team will contact you shortly.'
                    : 'Thank you! Our team will contact you shortly.',
            );
            reset(defaultValues);
        } catch (error: unknown) {
            const message =
                error instanceof GraphQLClientError
                    ? error.details?.map((detail) => detail.message).join('\n') || error.message
                    : error instanceof Error
                        ? error.message
                        : 'Something went wrong. Please try again.';

            if (message.toLowerCase().includes('father mobile')) {
                setError('fatherMobile', { type: 'manual', message });
            } else if (message.toLowerCase().includes('mother mobile')) {
                setError('motherMobile', { type: 'manual', message });
            } else if (message.toLowerCase().includes('emergency mobile')) {
                setError('emergencyMobile', { type: 'manual', message });
            } else if (message.toLowerCase().includes('height')) {
                setError('heightInCm', { type: 'manual', message });
            } else if (message.toLowerCase().includes('weight')) {
                setError('weightInKg', { type: 'manual', message });
            }

            setStatus('error');
            setFeedbackMessage(message);
        }
    };

    // Calculate max date (today)
    const today = new Date().toISOString().split('T')[0];
    // Minimum date: December 1, 2022 (only babies born on or after this date can participate)
    const minDate = '2022-12-01';

    return (
        <section className="w-full max-w-4xl mx-auto bg-gradient-to-b from-white via-teal-50 to-white rounded-3xl border border-teal-100 shadow-[0_18px_60px_rgba(15,118,110,0.12)]">
            <div className="p-3 sm:p-7 lg:p-10 space-y-6 sm:space-y-8">
                <header className="space-y-3 text-center sm:text-left">
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 shadow-sm border border-teal-100 mx-auto sm:mx-0">
                        <Baby className="w-3.5 h-3.5" />
                        Healthy Baby Competition
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-950 leading-tight">
                        Register your baby for the competition
                    </h1>
                    <p className="text-sm sm:text-base text-teal-700 max-w-3xl mx-auto sm:mx-0">
                        Please provide the following details to register your baby for the Healthy Baby Competition. Our team will contact you with further information.
                    </p>
                </header>

                <form
                    className="bg-white rounded-2xl border border-teal-100 shadow-inner shadow-teal-100/50 p-3 sm:p-7 space-y-5 sm:space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Baby Information Section */}
                    <div className="space-y-5">
                        <h2 className="text-lg font-bold text-teal-700 border-b border-teal-200 pb-2">Baby Information</h2>

                        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                            <TextInput
                                name="fullName"
                                control={control}
                                label="Full Name"
                                placeholder="Enter baby's full name"
                                required
                                icon={<User className="w-4 h-4 text-teal-600" />}
                                error={errors.fullName}
                                rules={{ required: "Baby's name is required" }}
                            />

                            <RadioInput
                                name="gender"
                                control={control}
                                label="Gender"
                                options={[
                                    { value: 'MALE', label: 'Male' },
                                    { value: 'FEMALE', label: 'Female' },
                                ]}
                                required
                                icon={<Baby className="w-4 h-4 text-teal-600" />}
                                error={errors.gender}
                            />
                        </div>
                        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                            <div>
                                <DateInput
                                    name="dateOfBirth"
                                    control={control}
                                    label="Date of Birth"
                                    required
                                    min={minDate}
                                    max={today}
                                    icon={<Calendar className="w-4 h-4 text-teal-600" />}
                                    error={errors.dateOfBirth}
                                    rules={{
                                        required: 'Date of birth is required',
                                        validate: (value) => {
                                            if (!value) return true; // required rule handles empty
                                            const selectedDate = new Date(value);
                                            const minAllowedDate = new Date('2022-12-01');
                                            if (selectedDate < minAllowedDate) {
                                                return 'Only babies born on or after December 1, 2022 can participate';
                                            }
                                            return true;
                                        },
                                    }}
                                />
                                <p className="text-xs text-teal-600 mt-1 ml-5">
                                    Only babies born after December 1, 2022 can participate
                                </p>
                            </div>

                            {/* Age - Auto-calculated from date of birth */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-sm font-semibold text-teal-700">
                                    <Baby className="w-4 h-4 text-teal-600" />
                                    Age
                                </label>
                                <div className="grid gap-4 md:gap-5 md:grid-cols-2">
                                    <div className="relative">
                                        <div className="absolute -top-2 left-3 px-2 bg-white text-xs font-medium text-teal-600">
                                            Years
                                        </div>
                                        <div className="w-full px-4 py-2.5 pt-2 border-2 rounded-xl bg-teal-50 border-teal-200 text-teal-800 font-normal text-base text-center">
                                            {watchedAgeYears || '0'}
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -top-2 left-3 px-2 bg-white text-xs font-medium text-teal-600">
                                            Months
                                        </div>
                                        <div className="w-full px-4 py-2.5 pt-2 border-2 rounded-xl bg-teal-50 border-teal-200 text-teal-800 font-normal text-base text-center">
                                            {watchedAgeMonths || '0'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Age Category Component */}
                        <AgeCategoryComponent
                            control={control}
                            errors={errors}
                            ageYears={parseInt(watchedAgeYears) || 0}
                            ageMonths={parseInt(watchedAgeMonths) || 0}
                            dateOfBirth={watchedDateOfBirth}
                        />

                        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                            <TextInput
                                name="heightInCm"
                                control={control}
                                label="Height (cm)"
                                placeholder="e.g. 75.5"
                                type="number"
                                required
                                icon={<Ruler className="w-4 h-4 text-teal-600" />}
                                error={errors.heightInCm}
                                rules={{
                                    required: 'Height is required',
                                    min: { value: 0, message: 'Height cannot be negative' },
                                }}
                            />

                            <TextInput
                                name="weightInKg"
                                control={control}
                                label="Weight (kg)"
                                placeholder="e.g. 10.2"
                                type="number"
                                required
                                icon={<Scale className="w-4 h-4 text-teal-600" />}
                                error={errors.weightInKg}
                                rules={{
                                    required: 'Weight is required',
                                    min: { value: 0, message: 'Weight cannot be negative' },
                                }}
                            />
                        </div>
                    </div>

                    {/* Father Information Section */}
                    <div className="space-y-5">
                        <h2 className="text-lg font-bold text-teal-700 border-b border-teal-200 pb-2">Father Information</h2>

                        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                            <TextInput
                                name="fatherName"
                                control={control}
                                label="Father's Name"
                                placeholder="Enter father's full name"
                                required
                                icon={<User className="w-4 h-4 text-teal-600" />}
                                error={errors.fatherName}
                                rules={{ required: "Father's name is required" }}
                            />

                            <MobileInput
                                name="fatherMobile"
                                control={control}
                                label="Father's Mobile Number"
                                required
                                error={errors.fatherMobile}
                                className="sm:col-span-1"
                            />
                        </div>
                    </div>

                    {/* Mother Information Section */}
                    <div className="space-y-5">
                        <h2 className="text-lg font-bold text-teal-700 border-b border-teal-200 pb-2">Mother Information</h2>

                        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                            <TextInput
                                name="motherName"
                                control={control}
                                label="Mother's Name"
                                placeholder="Enter mother's full name"
                                required
                                icon={<User className="w-4 h-4 text-teal-600" />}
                                error={errors.motherName}
                                rules={{ required: "Mother's name is required" }}
                            />

                            <MobileInput
                                name="motherMobile"
                                control={control}
                                label="Mother's Mobile Number"
                                required
                                error={errors.motherMobile}
                                className="sm:col-span-1"
                            />
                        </div>
                    </div>

                    {/* Emergency Contact Section */}
                    <div className="space-y-5">
                        <h2 className="text-lg font-bold text-teal-700 border-b border-teal-200 pb-2">Emergency Contact</h2>

                        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                            <TextInput
                                name="emergencyContactName"
                                control={control}
                                label="Emergency Contact Name"
                                placeholder="Enter emergency contact name"
                                required
                                icon={<User className="w-4 h-4 text-teal-600" />}
                                error={errors.emergencyContactName}
                                rules={{ required: 'Emergency contact name is required' }}
                            />

                            <TextInput
                                name="emergencyContactRelation"
                                control={control}
                                label="Relation"
                                placeholder="Enter relation (e.g. Uncle, Aunt, etc.)"
                                required
                                icon={<User className="w-4 h-4 text-teal-600" />}
                                error={errors.emergencyContactRelation}
                                rules={{ required: 'Relation is required' }}
                            />
                        </div>

                        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
                            <MobileInput
                                name="emergencyMobile"
                                control={control}
                                label="Emergency Contact Mobile Number"
                                required
                                error={errors.emergencyMobile}
                            />
                        </div>
                    </div>

                    {/* Consent Form */}
                    <AcknowledgmentCheckbox
                        title="Consent & Acknowledgment"
                        name="consentFormAccepted"
                        control={control}
                        error={errors.consentFormAccepted}
                        labelText="I acknowledge that I have read and understood all the terms and conditions of the Healthy Baby Competition. I consent to the use of the provided information for the purpose of registration and communication related to this event."
                        requiredMessage="You must accept the consent form to proceed"
                    />

                    {/* Submit Button Section */}
                    <div className="space-y-4 text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-auto rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-500 px-5 py-4 text-sm sm:text-base font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                        </button>
                        {feedbackMessage && (
                            <p
                                role="status"
                                className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${status === 'success'
                                    ? 'bg-teal-50 border-teal-100 text-teal-800'
                                    : 'bg-red-50 border-red-100 text-red-700'
                                    }`}
                            >
                                {feedbackMessage}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default HealthyBabyCompitition;

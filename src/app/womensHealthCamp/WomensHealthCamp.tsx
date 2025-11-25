'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HeartHandshake, Mail, User } from 'lucide-react';

import { MobileInput, TextInput } from '@/components/FormComponents';
import { GraphQLClientError } from '@/lib/graphqlClient';
import {
    CreateWomensHealthCampRegistrationDto,
    CreateWomensHealthCampRegistrationMutation,
} from '@/app/womensHealthCamp/WomensHealthCampGraphQL';

type WomensHealthCampForm = {
    fullName: string;
    spouseName: string;
    mobile: string;
    mobileCountryCode: string;
    email: string;
    donationAmount?: string;
};

const defaultValues: WomensHealthCampForm = {
    fullName: '',
    spouseName: '',
    mobile: '',
    mobileCountryCode: '+91',
    email: '',
    donationAmount: '',
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

const buildWomensHealthCampInput = (formData: WomensHealthCampForm): CreateWomensHealthCampRegistrationDto => {
    const mobileCountryCodeDigits = sanitizeDigits(formData.mobileCountryCode) || '91';
    const mobileDigits = sanitizeDigits(formData.mobile);

    if (mobileDigits.length !== 10) {
        throw new Error('Mobile number must be a valid 10-digit number.');
    }

    const donationAmount = formData.donationAmount?.trim()
        ? parseIntegerField(formData.donationAmount, 'Donation amount')
        : null;

    return {
        fullName: formData.fullName.trim(),
        spouseName: formData.spouseName.trim(),
        mobileCountryCode: parseIntegerField(mobileCountryCodeDigits, 'Mobile country code'),
        mobile: parseIntegerField(mobileDigits, 'Mobile number'),
        email: formData.email.trim(),
        donationAmount,
    };
};

const WomensHealthCamp = () => {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
    const {
        control,
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<WomensHealthCampForm>({
        defaultValues,
    });

    const onSubmit = async (data: WomensHealthCampForm) => {
        setStatus('idle');
        setFeedbackMessage(null);

        try {
            const input = buildWomensHealthCampInput(data);
            const result = await CreateWomensHealthCampRegistrationMutation(input);

            setStatus('success');
            setFeedbackMessage(
                result.registrationNumber
                    ? `Thank you! Your registration number is ${result.registrationNumber}.`
                    : 'Thank you! Our team will confirm your camp slot shortly.',
            );
            reset(defaultValues);
        } catch (error: unknown) {
            const message =
                error instanceof GraphQLClientError
                    ? error.details?.map((detail) => detail.message).join('\n') || error.message
                    : error instanceof Error
                      ? error.message
                      : 'Something went wrong. Please try again.';

            if (message.toLowerCase().includes('mobile')) {
                setError('mobile', { type: 'manual', message });
            } else if (message.toLowerCase().includes('donation')) {
                setError('donationAmount', { type: 'manual', message });
            }

            setStatus('error');
            setFeedbackMessage(message);
        }
        console.log('data', data);
    };

    return (
        <section className="w-full max-w-4xl mx-auto bg-gradient-to-b from-white via-teal-50 to-white rounded-3xl border border-teal-100 shadow-[0_18px_60px_rgba(15,118,110,0.12)]">
            <div className="p-3 sm:p-7 lg:p-10 space-y-6 sm:space-y-8">
                <header className="space-y-3 text-center sm:text-left">
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 shadow-sm border border-teal-100 mx-auto sm:mx-0">
                        <HeartHandshake className="w-3.5 h-3.5" />
                        Women&apos;s Health Camp
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-950 leading-tight">
                        Join our wellness & screening drive
                    </h1>
                    <p className="text-sm sm:text-base text-teal-700 max-w-3xl mx-auto sm:mx-0">
                        Tell us a few details to confirm your slot. Our coordinators will reach out with camp timings, documentation reminders, and prep tips.
                        Donation is optional and supports medicines for the next camp.
                    </p>
                </header>

                <form
                    className="bg-white rounded-2xl border border-teal-100 shadow-inner shadow-teal-100/50 p-3 sm:p-7 space-y-5 sm:space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="grid gap-5 md:gap-6 md:grid-cols-2">

                        {/* Name Section */}
                        <TextInput
                            name="fullName"
                            control={control}
                            label="Name"
                            placeholder="Enter your full name"
                            required
                            icon={<User className="w-4 h-4 text-teal-600" />}
                            error={errors.fullName}
                            rules={{ required: 'Name is required' }}
                        />
                        
                        {/* Spouse Name Section */}
                        <TextInput
                            name="spouseName"
                            control={control}
                            label="Spouse Name"
                            placeholder="Enter spouse name"
                            required
                            icon={<User className="w-4 h-4 text-teal-600" />}
                            error={errors.spouseName}
                            rules={{ required: 'Spouse name is required' }}
                        />
                    </div>

                    <div className="grid gap-5 md:gap-6 md:grid-cols-2">

                        {/* Mobile Number Section */}
                        <MobileInput
                            name="mobile"
                            control={control}
                            label="Mobile Number"
                            required
                            error={errors.mobile}
                            className="sm:col-span-1"
                        />

                        {/* Email ID Section */}
                        <TextInput
                            name="email"
                            control={control}
                            type="email"
                            label="Email ID"
                            placeholder="name@example.com"
                            required
                            icon={<Mail className="w-4 h-4 text-teal-600" />}
                            error={errors.email}
                        />
                    </div>

                    {/* Donation Amount Section */}
                    <TextInput
                        name="donationAmount"
                        control={control}
                        label="Donation Amount (optional)"
                        placeholder="e.g. 500"
                        type="number"
                        icon={<HeartHandshake className="w-4 h-4 text-teal-600" />}
                        error={errors.donationAmount}
                        rules={{
                            min: {
                                value: 0,
                                message: 'Donation cannot be negative',
                            },
                        }}
                        inputClassName="px-4 py-3 appearance-none"
                    />

                    {/* Submit Button Section */}
                    <div className="space-y-4 text-center">
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-auto rounded-2xl bg-gradient-to-r from-teal-900 to-emerald-500 px-5 py-4 text-sm sm:text-base font-semibold uppercase tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                        {/* Feedback Message Section */}
                        {feedbackMessage && (
                            <p
                                role="status"
                                className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
                                    status === 'success'
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

export default WomensHealthCamp;


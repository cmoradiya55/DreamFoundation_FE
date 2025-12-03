'use client';

import React, { useEffect } from 'react';
import { Control, FieldErrors, useController } from 'react-hook-form';
import { Baby } from 'lucide-react';

interface AgeCategoryComponentProps {
  control: Control<any>;
  errors: FieldErrors<any>;
  ageYears: number;
  ageMonths: number;
  dateOfBirth?: string;
}

const AgeCategoryComponent: React.FC<AgeCategoryComponentProps> = ({
  control,
  errors,
  ageYears,
  ageMonths,
  dateOfBirth,
}) => {
  const ageCategories = [
    {
      value: '0-6months',
      label: '0–6 Months',
      minMonths: 0,
      maxMonths: 6,
      emoji: '👶',
    },
    {
      value: '6-12months',
      label: '6–12 Months',
      minMonths: 6,
      maxMonths: 12,
      emoji: '🍼',
    },
    {
      value: '1-2years',
      label: '1–2 Years',
      minMonths: 12,
      maxMonths: 24,
      emoji: '🚶',
    },
    {
      value: '2-3years',
      label: '2–3 Years',
      minMonths: 24,
      maxMonths: 36,
      emoji: '🏃',
    },
  ];

  // Hook up to the form control once, at the top level
  const {
    field: { value, onChange },
  } = useController({
    name: 'ageCategory',
    control,
    defaultValue: '',
  });

  // Auto-select category based on age (only if date of birth is provided)
  const getCategoryForAge = (): string => {
    // Calculate total months from years and months
    const totalMonths = ageYears * 12 + ageMonths;

    // Check if date of birth is provided
    const hasDateOfBirth = !!dateOfBirth && dateOfBirth.trim() !== '';

    // If no date of birth, return empty to deselect all
    if (!hasDateOfBirth || totalMonths === 0) return '';

    for (const category of ageCategories) {
      if (totalMonths >= category.minMonths && totalMonths < category.maxMonths) {
        return category.value;
      }
    }

    // If age is 3 years or more, return empty (no category)
    return '';
  };

  // Auto-select / clear when DOB or age changes
  useEffect(() => {
    const autoSelectedCategory = getCategoryForAge();

    if (autoSelectedCategory && value !== autoSelectedCategory) {
      onChange(autoSelectedCategory);
    } else if (!autoSelectedCategory && value) {
      // Clear selection when there is no matching category
      onChange('');
    }
  }, [ageYears, ageMonths, dateOfBirth, value, onChange]);

  return (
    <div className="space-y-3 w-full">
      <label
        htmlFor="ageCategory"
        className="flex items-center gap-2 text-sm font-semibold text-teal-700"
      >
        <Baby className="w-4 h-4 text-teal-600" />
        Age Category
      </label>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
        {ageCategories.map((category) => {
          const totalMonths = ageYears * 12 + ageMonths;
          const isSelected = value === category.value;
          const isInRange = totalMonths >= category.minMonths && totalMonths < category.maxMonths;

          return (
            <button
              type="button"
              key={category.value}
              onClick={() => onChange(category.value)}
              className={`
                relative p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer w-full text-left
                ${isSelected
                  ? 'border-teal-600 bg-gradient-to-br from-teal-50 to-emerald-50 shadow-md scale-105'
                  : isInRange
                    ? 'border-teal-300 bg-teal-50/50 hover:border-teal-400 hover:shadow-sm'
                    : 'border-gray-200 bg-white hover:border-teal-200 hover:bg-gray-50'
                }
              `}
            >
              {/* Selected Indicator */}
              {isSelected && (
                <span className="absolute top-1.5 right-1.5 w-5 h-5 bg-teal-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}

              {/* Emoji Icon */}
              <div className="text-2xl mb-2 text-center">{category.emoji}</div>

              {/* Category Label */}
              <h3
                className={`
                  text-sm font-semibold text-center
                  ${isSelected ? 'text-teal-700' : 'text-gray-700'}
                `}
              >
                {category.label}
              </h3>
            </button>
          );
        })}
      </div>

      {errors.ageCategory && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1" role="alert">
          {errors.ageCategory.message as string}
        </p>
      )}
    </div>
  );
};

export default AgeCategoryComponent;


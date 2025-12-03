'use client';

import React, { useEffect, useState } from 'react';
import { Control, FieldError, useWatch, Controller } from 'react-hook-form';
import { FileText, Image as ImageIcon, X, FileTextIcon } from 'lucide-react';
import { upoadFile } from '@/lib/presignedUrl';

interface DocumentOption {
  value: string;
  label: string;
}

interface FileUploadFieldProps {
  name: string;
  control: Control<any>;
  docType: string;
  uploadModule: string;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({ name, control, docType, uploadModule }) => {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isRequestingPresign, setIsRequestingPresign] = useState(false);
  const [presignError, setPresignError] = useState<string | null>(null);
  const watchedValue = useWatch({ control, name });

  // Detect mobile/tablet devices
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isTablet = /ipad|android(?!.*mobile)|tablet/i.test(userAgent.toLowerCase());
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobileDevice(isMobile || isTablet || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update file URL when file changes
  useEffect(() => {
    const fileData = watchedValue as File | { file: File; url: string } | null;
    const file = fileData instanceof File ? fileData : fileData?.file || null;
    const storedUrl = fileData && !(fileData instanceof File) ? fileData.url : null;
    
    if (storedUrl) {
      setFileUrl(storedUrl);
    } else if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setFileUrl(null);
    }
  }, [watchedValue]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        // Handle both File object (legacy) and { file, url } object (new)
        const fileData = value as File | { file: File; url: string } | null;
        const file = fileData instanceof File ? fileData : fileData?.file || null;
        const fileUrlFromValue = fileData && !(fileData instanceof File) ? fileData.url : null;
        const displayUrl = fileUrl || fileUrlFromValue;
        const isImageFile = Boolean(file?.type?.startsWith('image/'));
        const shouldShowImagePreview = Boolean(displayUrl && (isImageFile || !file?.type));

        const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
          const selectedFile = e.target.files?.[0];
          if (selectedFile) {
            setIsDragging(false);
            setPresignError(null);

            try {
              setIsRequestingPresign(true);
              const fileUrl = await upoadFile(selectedFile, uploadModule, (percent) => {
                console.log(`Upload progress: ${percent}%`);
              });

              // Store both file and URL as an object
              onChange({ file: selectedFile, url: fileUrl });
            } catch (error) {
              console.error('Failed to obtain presigned URL', error);
              setPresignError('Unable to prepare upload. Please try again.');
            } finally {
              setIsRequestingPresign(false);
            }
          }
          // Reset input value to allow selecting the same file again
          e.target.value = '';
        };

        const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
          if (!isMobileDevice) {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(true);
          }
        };

        const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
          if (!isMobileDevice) {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);
          }
        };

        const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
          if (!isMobileDevice) {
            e.preventDefault();
            e.stopPropagation();
            setIsDragging(false);

            const droppedFile = e.dataTransfer.files?.[0];
            if (droppedFile) {
              const isImageFile = droppedFile.type.startsWith('image/');
              const allowedDocumentTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'text/plain',
              ];
              const isDocumentFile = allowedDocumentTypes.includes(droppedFile.type);
              if (isImageFile || isDocumentFile) {
                // For drag and drop, we'll upload the file
                setIsRequestingPresign(true);
                setPresignError(null);
                upoadFile(droppedFile, uploadModule, (percent) => {
                  console.log(`Upload progress: ${percent}%`);
                }).then((url) => {
                  onChange({ file: droppedFile, url });
                  setIsRequestingPresign(false);
                }).catch((error) => {
                  console.error('Failed to upload dropped file', error);
                  setPresignError('Unable to upload file. Please try again.');
                  setIsRequestingPresign(false);
                });
              }
            }
          }
        };

        const handleRemove = () => {
          if (fileUrl) {
            URL.revokeObjectURL(fileUrl);
            setFileUrl(null);
          }
          onChange(null);
        };

        return (
          <div className="space-y-3">
            {presignError && (
              <p className="text-sm text-red-600" role="alert">
                {presignError}
              </p>
            )}
            {!file ? (
              <div className="flex flex-col lg:flex-row gap-3">
                {/* Single Upload Button with Drag and Drop - accepts both Image and Document */}
                <label className="flex-1">
                  <input
                    type="file"
                    accept="image/*,.pdf,.doc,.docx,.txt"
                    onChange={handleFileChange}
                    className="hidden"
                    id={`file-${docType}`}
                    disabled={isRequestingPresign}
                  />
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`flex lg:flex-col items-center justify-center gap-2 w-full px-4 py-6 bg-teal-50 border-2 border-dashed rounded-lg cursor-pointer transition-all ${
                      isDragging && !isMobileDevice
                        ? 'bg-teal-100 border-teal-500 border-solid scale-105'
                        : 'border-teal-300 hover:bg-teal-100 hover:border-teal-400'
                    } ${isRequestingPresign ? 'opacity-70 cursor-wait' : ''}`}
                  >
                    <div className="flex items-center gap-2">
                      {/* <ImageIcon className="w-6 h-6 text-teal-700" /> */}
                      <FileTextIcon className="w-6 h-6 text-teal-700" />
                    </div>
                    <span className="text-sm font-medium text-teal-700">
                      {isRequestingPresign
                        ? 'Preparing secure upload...'
                        : isDragging && !isMobileDevice
                          ? 'Drop file here'
                          : 'Upload Image or Document'}
                    </span>
                    {!isMobileDevice && (
                      <span className="text-xs text-teal-600 -mt-1">
                        or You can also Drag and Drop the file here or Photo hear.
                      </span>
                    )}
                  </div>
                </label>

                {/* Camera Button for Mobile/Tablet */}
                {isMobileDevice && (
                  <label className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      onChange={handleFileChange}
                      className="hidden"
                      id={`camera-${docType}`}
                    />
                    {/* {isMobileDevice ? (
                      <div className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-50 border-2 border-dashed border-green-300 rounded-lg cursor-pointer hover:bg-green-100 hover:border-green-400 transition-colors">
                        <Camera className="w-5 h-5 text-green-700" />
                        <span className="text-sm font-medium text-green-700">
                          Take Photo
                        </span>
                      </div>
                    ) : null} */}
                  </label>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                {shouldShowImagePreview ? (
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <img
                      src={displayUrl ?? (file ? URL.createObjectURL(file) : '')}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-teal-100 rounded-lg">
                    {isImageFile ? (
                      <ImageIcon className="w-8 h-8 text-teal-700" />
                    ) : (
                      <FileText className="w-8 h-8 text-teal-700" />
                    )}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleRemove}
                  className="flex-shrink-0 p-2 text-teal-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Remove file"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        );
      }}
    />
  );
};

interface DocumentsRequiredComponentProps {
  control: Control<any>;
  errors: any;
  options: DocumentOption[];
  title?: string;
  name?: string;
  uploadModule?: string;
}

const DocumentsRequiredComponent: React.FC<DocumentsRequiredComponentProps> = ({
  control,
  errors,
  options,
  title = 'Documents Required',
  name = 'documents',
  uploadModule = 'students',
}) => {
  return (
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
        • {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <Controller
          name={name}
          control={control}
          rules={{ required: 'Please select at least one document' }}
          render={({ field }) => {
            const selectedValues = field.value || [];

            const handleCheckboxChange = (optionValue: string, isChecked: boolean) => {
              if (isChecked) {
                const newValue = [...selectedValues, optionValue];
                field.onChange(newValue);
              } else {
                const newValue = selectedValues.filter((value: string) => value !== optionValue);
                field.onChange(newValue);
              }
            };

            return (
              <div className="space-y-2">
                {options.map((option) => {
                  const isChecked = selectedValues.includes(option.value);
                  const uploadFieldName = `documentFiles.${option.value}`;

                  return (
                    <div key={option.value} className="space-y-2">
                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={isChecked}
                          onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
                          className="w-4 h-4 cursor-pointer border-2 border-teal-700 rounded transition-all accent-teal-600 lg:focus:ring-2 lg:focus:ring-teal-200"
                        />
                        <span className={`ml-3 text-sm font-medium transition-colors ${
                          isChecked
                            ? 'text-teal-700 font-semibold'
                            : 'text-gray-700 group-hover:text-teal-600'
                        }`}>
                          {option.label}
                        </span>
                      </label>
                      
                      {/* Upload section appears directly below the selected option */}
                      {isChecked && (
                        <div className="ml-7 mt-2 mb-4 bg-white rounded-xl border-2 border-teal-100 p-4 sm:p-5 shadow-sm">
                          {/* For Aadhar cards, show two upload fields: front and back */}
                          {(option.value === 'childAadharCard' || option.value === 'parentAadharCard' || option.value === 'teacherAadharCard') ? (
                            <div className="space-y-4 flex lg:gap-4 gap-2 lg:flex-row flex-col">
                              <div className="lg:w-1/2 w-full">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Front Side
                                </label>
                                <FileUploadField
                                  name={`${uploadFieldName}.front`}
                                  control={control}
                                  docType={`${option.value}_front`}
                                  uploadModule={uploadModule}
                                />
                              </div>
                              <div className="lg:w-1/2 w-full">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Back Side
                                </label>
                                <FileUploadField
                                  name={`${uploadFieldName}.back`}
                                  control={control}
                                  docType={`${option.value}_back`}
                                  uploadModule={uploadModule}
                                />
                              </div>
                            </div>
                          ) : (
                            <FileUploadField
                              name={uploadFieldName}
                              control={control}
                              docType={option.value}
                              uploadModule={uploadModule}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          }}
        />
      </div>
      {errors && (
        <p className="text-red-500 text-sm mt-1" role="alert">
          {Array.isArray(errors) ? errors[0]?.message : (errors as FieldError)?.message}
        </p>
      )}
    </div>
  );
};

export default DocumentsRequiredComponent;


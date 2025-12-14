'use client';

import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    altPrefix?: string;
}

export default function ImageLightbox({
    isOpen,
    images,
    currentIndex,
    onClose,
    onNext,
    onPrev,
    altPrefix = 'Image'
}: ImageLightboxProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
        >
            <button
                className="fixed top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-white/20 z-[10000]"
                onClick={onClose}
                aria-label="Close lightbox"
            >
                <X size={28} />
            </button>
            <button
                className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md items-center justify-center hover:scale-105 transition z-[10000]"
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                }}
                aria-label="Previous image"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md items-center justify-center hover:scale-105 transition z-[10000]"
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                aria-label="Next image"
            >
                <ChevronRight size={32} />
            </button>
            <div
                className="relative w-full max-w-5xl aspect-video"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={images[currentIndex]}
                    alt={`${altPrefix} ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                />
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
}


'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const TinyYatraPage = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const tinyYatraImages = [
        '/images/canva_2.webp',
        '/images/canva_1.webp',
        '/images/canva_4.webp',
        '/images/canva_5.webp',
        '/images/canva_6.webp',
    ];

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setLightboxIndex((prev) => (prev + 1) % tinyYatraImages.length);
    };

    const prevImage = () => {
        setLightboxIndex((prev) => (prev - 1 + tinyYatraImages.length) % tinyYatraImages.length);
    };

    return (
        <>
            <main className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center mb-16 space-y-6">
                        <div className="inline-block px-4 py-2 bg-white rounded-full shadow-md">
                            <span className="text-teal-700 font-semibold text-sm uppercase tracking-wider">Event Gallery</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#134e4a]">
                            Tiny Yatra
                        </h1>
                        <p className="text-lg sm:text-xl text-[#0f766e] max-w-3xl mx-auto leading-relaxed">
                            A fun-filled educational journey for young minds. Explore the wonderful moments captured during our educational trips and activities.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {tinyYatraImages.map((image, index) => (
                            <div
                                key={image}
                                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                onClick={() => openLightbox(index)}
                            >
                                <Image
                                    src={image}
                                    alt={`Tiny Yatra image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-semibold text-lg">View Image</p>
                                        <p className="text-white/80 text-sm">Click to enlarge</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-100">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#134e4a] mb-4">
                            Interested in Learning More?
                        </h2>
                        <p className="text-[#0f766e] mb-6 leading-relaxed">
                            Join us on our next educational adventure and create unforgettable memories.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#042f2e] to-[#55a976] px-8 py-4 text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>

            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 sm:p-6"
                    onClick={closeLightbox}
                >
                    <button
                        className="fixed top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-white/20 z-[10000]"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        <X size={28} />
                    </button>
                    <button
                        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md items-center justify-center hover:scale-105 transition z-[10000]"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md items-center justify-center hover:scale-105 transition z-[10000]"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
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
                            src={tinyYatraImages[lightboxIndex]}
                            alt={`Tiny Yatra image ${lightboxIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                        {lightboxIndex + 1} / {tinyYatraImages.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default TinyYatraPage;

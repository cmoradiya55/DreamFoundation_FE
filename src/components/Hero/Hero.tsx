'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Calendar, Users, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const [activeGallery, setActiveGallery] = useState<number>(4);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const router = useRouter();

    const tinyYatraImages = [
        '/images/canva_2.webp',
        '/images/canva_1.webp',
        '/images/canva_4.webp',
        '/images/canva_5.webp',
        '/images/canva_6.webp',
    ];

    let currentGalleryImages: string[] = [];
    if (activeGallery === 3) {
        currentGalleryImages = tinyYatraImages;
    } 

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        setLightboxIndex((prev) => (prev + 1) % currentGalleryImages.length);
    };

    const prevImage = () => {
        setLightboxIndex((prev) => (prev - 1 + currentGalleryImages.length) % currentGalleryImages.length);
    };

    const events = [
        {
            id: 4,
            title: "Women's Health Camp",
            description: "Comprehensive health screening and wellness program for women",
            image: "/images/WomenHealthCamp/WomenHealthCamp.webp",
            route: "/womensHealthCamp",
            icon: Heart,
            gradient: "from-rose-500 to-pink-500"
        },
        {
            id: 5,
            title: "Healthy Baby Competition",
            description: "Celebrating healthy growth and development milestones",
            image: "/images/HealthyBabyCompitition.webp",
            route: "/healthyBabyCompitition",
            icon: Users,
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            id: 3,
            title: "Tiny Yatra",
            description: "Fun-filled educational journey for young minds",
            image: "/images/canva_2.webp",
            route: null,
            icon: Calendar,
            gradient: "from-emerald-500 to-teal-500"
        }
    ];

    return (
        <>
            <main className="min-h-screen flex flex-col">
                <section className="relative bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNywgOTQsIDg5LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 animate-fade-in">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#134e4a] mb-6 leading-tight">
                                Empowering Dreams,<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#042f2e] to-[#55a976]">
                                    Shaping Futures
                                </span>
                            </h1>
                            <p className="text-lg sm:text-xl text-[#0f766e] max-w-3xl mx-auto leading-relaxed">
                                Join our community initiatives and educational programs designed to create lasting positive impact
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {events.map((event) => {
                                const IconComponent = event.icon;
                                const isActive = activeGallery === event.id;

                                return (
                                    <div
                                        key={event.id}
                                        onClick={() => setActiveGallery(event.id)}
                                        className={`group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                                            isActive
                                                ? 'shadow-2xl scale-105 ring-4 ring-teal-500/50'
                                                : 'shadow-lg hover:shadow-xl hover:-translate-y-2'
                                        }`}
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                className={`object-cover transition-transform duration-700 ${
                                                    isActive ? 'scale-110' : 'group-hover:scale-110'
                                                }`}
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${event.gradient} opacity-60 transition-opacity duration-300 ${
                                                isActive ? 'opacity-70' : 'group-hover:opacity-70'
                                            }`}></div>
                                            <div className="absolute top-4 right-4">
                                                <div className={`p-3 rounded-full bg-white/90 backdrop-blur-sm transition-transform duration-300 ${
                                                    isActive ? 'scale-110' : 'group-hover:scale-110'
                                                }`}>
                                                    <IconComponent className="w-6 h-6 text-teal-700" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-[#134e4a] mb-2 group-hover:text-teal-600 transition-colors">
                                                {event.title}
                                            </h3>
                                            <p className="text-[#0f766e] text-sm leading-relaxed mb-4">
                                                {event.description}
                                            </p>
                                            {isActive && event.route && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        router.push(event.route);
                                                    }}
                                                    className="w-full mt-2 bg-gradient-to-r from-[#042f2e] to-[#55a976] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                                                >
                                                    Register Now
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {activeGallery === 3 && (
                            <div className="mt-12 animate-fade-in">
                                <h3 className="text-2xl font-bold text-[#134e4a] mb-6 text-center">Gallery</h3>
                                <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                                    {currentGalleryImages.map((image, index) => (
                                        <div
                                            key={image}
                                            className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                                            onClick={() => openLightbox(index)}
                                        >
                                            <Image
                                                src={image}
                                                alt={`Tiny Yatra image ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-2 bg-teal-100 rounded-full mb-4">
                                <span className="text-teal-700 font-semibold text-sm uppercase tracking-wider">About Us</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#134e4a] mb-6">Dream Foundation</h2>
                            <p className="text-lg text-[#0f766e] max-w-3xl mx-auto leading-relaxed">
                                Dedicated to providing quality education and opportunities to help individuals achieve their dreams through comprehensive programs and community initiatives.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                            <div className="group relative bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl border border-teal-200/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#042f2e] to-[#55a976] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#115e59] mb-3">Quality Education</h3>
                                <p className="text-[#0f766e] leading-relaxed">
                                    Comprehensive educational programs designed to meet diverse learning needs and foster excellence.
                                </p>
                            </div>

                            <div className="group relative bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#042f2e] to-[#55a976] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-[#115e59] mb-3">Community Events</h3>
                                <p className="text-[#0f766e] leading-relaxed">
                                    Regular events and workshops designed to engage, inspire, and empower our vibrant community.
                                </p>
                            </div>

                            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#042f2e] to-[#55a976] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#115e59] mb-3">Career Development</h3>
                                <p className="text-[#0f766e] leading-relaxed">
                                    Professional development opportunities to help individuals advance and excel in their careers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                            <div className="space-y-6">
                                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                                    <span className="text-white font-semibold text-sm uppercase tracking-wider">Our Vision</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Preparing for Tomorrow&apos;s World</h2>
                                <p className="text-teal-50 text-lg leading-relaxed">
                                    Today&apos;s students are going to face the challenges of life after 15–20 years. After 15–20 years our world is going to be very different with different values, different technology. We need to shape our kids for upcoming world and its challenges. Don&apos;t limit a child to your own learning, for he was born in another time. According to Vedic traditions the purpose of human life is Dharma, Artha, Kama and Moksha.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                                    <span className="text-white font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Building Global Citizens</h2>
                                <p className="text-teal-50 text-lg leading-relaxed">
                                    The illiterate of the future will not be the one who cannot read. It will be the person who does not know how to learn. The foundation of every country is the education of its youth. Our vision is to prepare true global citizens for the next generation who can cope with both the challenges of outside world and evolution of consciousness in themselves.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#134e4a] mb-6">Ready to Start Your Journey?</h2>
                        <p className="text-lg text-[#0f766e] mb-10 leading-relaxed">
                            Join thousands of students and professionals who have transformed their lives with Dream Foundation.
                        </p>
                        <Link
                            href="/studentRegistration"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#042f2e] to-[#55a976] px-10 py-4 text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
                        >
                            Apply for Admission
                        </Link>
                    </div>
                </section>
            </main>
            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 sm:p-6"
                    onClick={closeLightbox}
                >
                    <button
                        className="fixed top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:bg-white/20"
                        onClick={closeLightbox}
                    >
                        <X size={28} />
                    </button>
                    <button
                        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md items-center justify-center hover:scale-105 transition"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md items-center justify-center hover:scale-105 transition"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                    >
                        <ChevronRight size={32} />
                    </button>
                    <div
                        className="relative w-full max-w-5xl aspect-video"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={currentGalleryImages[lightboxIndex]}
                            alt={`${activeGallery === 2 ? 'Helix Academy' : 'Tiny Yatra'} image ${lightboxIndex + 1}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Hero;

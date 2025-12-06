'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const [activeGallery, setActiveGallery] = useState<number>(4);
    const router = useRouter();

    const events = [
        {
            id: 4,
            title: "Women's Health Camp",
            description: "Comprehensive health screening and wellness program for women",
            route: "/womensHealthCamp",
            gradient: "from-rose-500 to-pink-500",
            iconType: "health"
        },
        {
            id: 5,
            title: "Healthy Baby Competition",
            description: "Celebrating healthy growth and development milestones",
            route: "/healthyBabyCompitition",
            gradient: "from-blue-500 to-cyan-500",
            iconType: "baby"
        },
        {
            id: 3,
            title: "Tiny Yatra",
            description: "Fun-filled educational journey for young minds",
            route: "/tinyYatra",
            gradient: "from-emerald-500 to-teal-500",
            iconType: "journey"
        }
    ];

    const renderEventIcon = (iconType: string, isActive: boolean) => {
        const iconClasses = `w-full h-full transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`;

        if (iconType === "health") {
            return (
                <svg className={iconClasses} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="url(#healthGradient)" opacity="0.1"/>
                    <path d="M100 60C85 60 75 68 75 80C75 92 85 104 100 120C115 104 125 92 125 80C125 68 115 60 100 60Z" fill="url(#healthGradient)"/>
                    <circle cx="70" cy="110" r="15" fill="url(#healthGradient)" opacity="0.6"/>
                    <circle cx="130" cy="110" r="15" fill="url(#healthGradient)" opacity="0.6"/>
                    <circle cx="100" cy="130" r="18" fill="white"/>
                    <path d="M100 120V140M90 130H110" stroke="url(#healthGradient)" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M60 70C60 70 55 60 50 60M140 70C140 70 145 60 150 60" stroke="url(#healthGradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                        <linearGradient id="healthGradient" x1="50" y1="60" x2="150" y2="140">
                            <stop stopColor="#f43f5e"/>
                            <stop offset="1" stopColor="#ec4899"/>
                        </linearGradient>
                    </defs>
                </svg>
            );
        } else if (iconType === "baby") {
            return (
                <svg className={iconClasses} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="70" r="35" fill="url(#babyGradient)"/>
                    <ellipse cx="88" cy="65" rx="6" ry="8" fill="white"/>
                    <ellipse cx="112" cy="65" rx="6" ry="8" fill="white"/>
                    <path d="M88 76C88 76 92 82 100 82C108 82 112 76 112 76" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                    <path d="M70 55C70 55 60 45 50 45M130 55C130 55 140 45 150 45" stroke="url(#babyGradient)" strokeWidth="4" strokeLinecap="round"/>
                    <ellipse cx="100" cy="130" rx="50" ry="40" fill="url(#babyGradient)" opacity="0.2"/>
                    <path d="M70 120L80 125L70 130M130 120L120 125L130 130" stroke="url(#babyGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="100" cy="135" r="8" fill="url(#babyGradient)"/>
                    <path d="M60 100C65 95 75 92 85 95M140 100C135 95 125 92 115 95" stroke="url(#babyGradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                        <linearGradient id="babyGradient" x1="50" y1="45" x2="150" y2="145">
                            <stop stopColor="#3b82f6"/>
                            <stop offset="1" stopColor="#06b6d4"/>
                        </linearGradient>
                    </defs>
                </svg>
            );
        } else {
            return (
                <svg className={iconClasses} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 90C60 75 65 60 75 55L100 40L125 55C135 60 140 75 140 90V130C140 145 135 160 125 165L100 180L75 165C65 160 60 145 60 130V90Z" fill="url(#journeyGradient)" opacity="0.15"/>
                    <circle cx="100" cy="100" r="40" fill="url(#journeyGradient)"/>
                    <path d="M100 75V100L118 118" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M65 50L75 60M135 50L125 60M100 30V45" stroke="url(#journeyGradient)" strokeWidth="4" strokeLinecap="round"/>
                    <circle cx="65" cy="150" r="8" fill="url(#journeyGradient)"/>
                    <circle cx="135" cy="150" r="8" fill="url(#journeyGradient)"/>
                    <circle cx="100" cy="160" r="6" fill="url(#journeyGradient)" opacity="0.6"/>
                    <path d="M50 120C50 120 60 130 70 130M150 120C150 120 140 130 130 130" stroke="url(#journeyGradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                        <linearGradient id="journeyGradient" x1="60" y1="30" x2="140" y2="180">
                            <stop stopColor="#10b981"/>
                            <stop offset="1" stopColor="#14b8a6"/>
                        </linearGradient>
                    </defs>
                </svg>
            );
        }
    };

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
                                        <div className={`relative h-64 flex items-center justify-center bg-gradient-to-br ${event.gradient} bg-opacity-10 p-8`}>
                                            <div className="w-48 h-48">
                                                {renderEventIcon(event.iconType, isActive)}
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
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
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
        </>
    );
};

export default Hero;

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Hero = () => {
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

    const renderEventIcon = (iconType: string) => {
        const iconClasses = 'w-full h-full transition-transform duration-300 group-hover:scale-110';

        if (iconType === "health") {
            return (
                <svg className={iconClasses} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="85" fill="url(#healthGradient)" opacity="0.08"/>
                    <path d="M100 50C90 50 85 55 85 65C85 70 87 75 95 85C95 85 100 90 100 95C100 90 105 85 105 85C113 75 115 70 115 65C115 55 110 50 100 50Z" fill="url(#healthGradient)"/>
                    <ellipse cx="100" cy="115" rx="35" ry="45" fill="url(#healthGradient)" opacity="0.15"/>
                    <path d="M75 105C75 105 80 110 85 110C90 110 95 105 95 105M105 105C105 105 110 110 115 110C120 110 125 105 125 105" stroke="url(#healthGradient)" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="100" cy="125" r="22" fill="white" stroke="url(#healthGradient)" strokeWidth="3"/>
                    <path d="M100 112V138M87 125H113" stroke="url(#healthGradient)" strokeWidth="5" strokeLinecap="round"/>
                    <circle cx="70" cy="85" r="6" fill="url(#healthGradient)" opacity="0.4"/>
                    <circle cx="130" cy="85" r="6" fill="url(#healthGradient)" opacity="0.4"/>
                    <path d="M65 70C62 68 58 65 55 62M135 70C138 68 142 65 145 62" stroke="url(#healthGradient)" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M50 145C55 155 65 162 75 165M150 145C145 155 135 162 125 165" stroke="url(#healthGradient)" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
                    <defs>
                        <linearGradient id="healthGradient" x1="55" y1="50" x2="145" y2="165">
                            <stop stopColor="#f43f5e"/>
                            <stop offset="1" stopColor="#ec4899"/>
                        </linearGradient>
                    </defs>
                </svg>
            );
        } else if (iconType === "baby") {
            return (
                <svg className={iconClasses} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="90" r="40" fill="url(#babyGradient)"/>
                    <ellipse cx="85" cy="85" rx="7" ry="10" fill="white"/>
                    <ellipse cx="115" cy="85" rx="7" ry="10" fill="white"/>
                    <circle cx="85" cy="87" r="4" fill="url(#babyGradient)"/>
                    <circle cx="115" cy="87" r="4" fill="url(#babyGradient)"/>
                    <path d="M85 100C85 100 90 108 100 108C110 108 115 100 115 100" stroke="white" strokeWidth="5" strokeLinecap="round"/>
                    <circle cx="75" cy="95" r="5" fill="#fca5a5" opacity="0.6"/>
                    <circle cx="125" cy="95" r="5" fill="#fca5a5" opacity="0.6"/>
                    <path d="M65 70C65 70 55 58 48 58M135 70C135 70 145 58 152 58" stroke="url(#babyGradient)" strokeWidth="5" strokeLinecap="round"/>
                    <ellipse cx="100" cy="150" rx="55" ry="30" fill="url(#babyGradient)" opacity="0.15"/>
                    <path d="M60 140L75 147L62 154M140 140L125 147L138 154" stroke="url(#babyGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M85 130L95 140L90 150M115 130L105 140L110 150" stroke="url(#babyGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                    <path d="M70 42L75 35L72 48M130 42L125 35L128 48" fill="url(#babyGradient)"/>
                    <path d="M55 100C60 95 70 92 80 95M145 100C140 95 130 92 120 95" stroke="url(#babyGradient)" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="100" cy="45" r="8" fill="#fbbf24" opacity="0.8"/>
                    <path d="M92 40L96 36L94 42M108 40L104 36L106 42M100 37L98 32L102 32Z" fill="#fbbf24"/>
                    <defs>
                        <linearGradient id="babyGradient" x1="48" y1="35" x2="152" y2="154">
                            <stop stopColor="#3b82f6"/>
                            <stop offset="1" stopColor="#06b6d4"/>
                        </linearGradient>
                    </defs>
                </svg>
            );
        } else {
            return (
                <svg className={iconClasses} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="40" y="80" width="120" height="70" rx="12" fill="url(#journeyGradient)"/>
                    <rect x="40" y="65" width="120" height="15" rx="8" fill="url(#journeyGradient)" opacity="0.7"/>
                    <circle cx="65" cy="150" r="12" fill="#1f2937" stroke="url(#journeyGradient)" strokeWidth="3"/>
                    <circle cx="135" cy="150" r="12" fill="#1f2937" stroke="url(#journeyGradient)" strokeWidth="3"/>
                    <circle cx="65" cy="150" r="5" fill="white" opacity="0.4"/>
                    <circle cx="135" cy="150" r="5" fill="white" opacity="0.4"/>
                    <rect x="55" y="90" width="25" height="30" rx="4" fill="white" opacity="0.3"/>
                    <rect x="90" y="90" width="25" height="30" rx="4" fill="white" opacity="0.3"/>
                    <rect x="125" y="90" width="25" height="30" rx="4" fill="white" opacity="0.3"/>
                    <path d="M60 95L62 100L58 100Z" fill="url(#journeyGradient)" opacity="0.6"/>
                    <circle cx="67" cy="100" r="3" fill="url(#journeyGradient)"/>
                    <path d="M95 95L97 100L93 100Z" fill="url(#journeyGradient)" opacity="0.6"/>
                    <circle cx="102" cy="100" r="3" fill="url(#journeyGradient)"/>
                    <path d="M130 95L132 100L128 100Z" fill="url(#journeyGradient)" opacity="0.6"/>
                    <circle cx="137" cy="100" r="3" fill="url(#journeyGradient)"/>
                    <rect x="50" y="125" width="100" height="20" rx="4" fill="url(#journeyGradient)" opacity="0.2"/>
                    <path d="M55 135H75M80 135H100M105 135H145" stroke="url(#journeyGradient)" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M25 75C25 75 35 65 40 65M175 75C175 75 165 65 160 65" stroke="url(#journeyGradient)" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="28" cy="78" r="6" fill="#fbbf24"/>
                    <circle cx="172" cy="78" r="6" fill="#ef4444"/>
                    <path d="M85 55L95 45L105 45L115 55L105 50L95 50Z" fill="url(#journeyGradient)" opacity="0.5"/>
                    <circle cx="100" cy="48" r="8" fill="white" opacity="0.8"/>
                    <path d="M95 48L100 43L105 48L100 52Z" fill="url(#journeyGradient)"/>
                    <defs>
                        <linearGradient id="journeyGradient" x1="40" y1="43" x2="160" y2="150">
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
                                return (
                                    <div
                                        key={event.id}
                                        className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2"
                                    >
                                        <div className={`relative h-64 flex items-center justify-center bg-gradient-to-br ${event.gradient} bg-opacity-10 p-8`}>
                                            <div className="w-48 h-48">
                                                {renderEventIcon(event.iconType)}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-[#134e4a] mb-2 group-hover:text-teal-600 transition-colors">
                                                {event.title}
                                            </h3>
                                            <p className="text-[#0f766e] text-sm leading-relaxed mb-4">
                                                {event.description}
                                            </p>
                                            {event.route && (
                                                <button
                                                    onClick={() => router.push(event.route)}
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

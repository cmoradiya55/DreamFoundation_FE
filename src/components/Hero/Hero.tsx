'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();

    const events = [
        {
            id: 3,
            title: "Tiny Yatra",
            description: "A fun-filled, experiential journey that nurtures curiosity and early learning for young minds",
            route: "/tiny-yatra",
            gradient: "from-emerald-100 to-teal-100",
            iconType: "journey",
            logoSrc: "/logos/tinyYatra_logo.png",
            logoWidth: 220,
            logoHeight: 220
        },
        {
            id: 6,
            title: "Helix Academy",
            description: "Focused coaching and personalized support for JEE Main & JEE Advanced",
            route: "/helix-academy",
            gradient: "from-teal-100 to-emerald-200",
            iconType: "journey",
            logoSrc: "/logos/helixAcadamy_logo.png",
            logoWidth: 220,
            logoHeight: 220
        },
        {
            id: 7,
            title: "Grow Like Gujarati",
            description: "Stock market education and financial literacy programs",
            route: "/grow-like-gujarati",
            gradient: "from-teal-100 to-emerald-200",
            iconType: "journey",
            logoSrc: "/logos/gorwLikeGujarati_logo.png",
            logoWidth: 320,
            logoHeight: 320
        }
    ];


    return (
        <>
            <main className="min-h-screen flex flex-col">
                <section className="relative bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 pt-4 pb-24 md:pt-8 md:pb-32 overflow-hidden">
                    {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNywgOTQsIDg5LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div> */}
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 animate-fade-in">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#134e4a] mb-6 leading-tight">
                                Empowering Dreams,<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#042f2e] to-[#55a976]">
                                    Shaping Futures
                                </span>
                            </h1>
                            {/* <p className="text-lg sm:text-xl text-[#0f766e] max-w-3xl mx-auto leading-relaxed">
                                Join our community initiatives and educational programs designed to create lasting positive impact
                            </p> */}
                        </div>
                        <div className="flex justify-center mb-12">
                            <div className="relative flex flex-col items-center">
                                {/* Parent node */}
                                <div className="relative flex flex-col items-center">
                                    <div className="relative w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] rounded-full bg-[#032F2F] shadow-lg shadow-emerald-900/10 border-2 border-emerald-600/30 overflow-hidden">
                                        <Image
                                            src="/logos/dreamFoundation_logo.png"
                                            alt="Dream Foundation Logo"
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                    {/* Connector down */}
                                    <div className="absolute left-1/2 top-full h-8 w-[3px] -translate-x-1/2 bg-emerald-600/30"></div>
                                </div>

                                <div className="relative mt-12 flex items-start justify-center gap-6 sm:gap-10">
                                    <div className="absolute left-0 right-0 -top-[17px] h-[3px] bg-emerald-600/30"></div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                        {events.map((event) => {
                                            return (
                                                <div key={event.id} className="relative">
                                                    <div className="absolute -top-12 left-1/2 h-[50px] w-[3px] -translate-x-1/2 bg-emerald-600/30"></div>
                                                    <div
                                                        key={event.id}
                                                        role="button"
                                                        tabIndex={0}
                                                        onClick={() => event.route && router.push(event.route)}
                                                        onKeyDown={(e) => {
                                                            if ((e.key === 'Enter' || e.key === ' ') && event.route) {
                                                                e.preventDefault();
                                                                router.push(event.route);
                                                            }
                                                        }}
                                                        className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                                    >
                                                         <div className={`relative h-64 flex items-center justify-center bg-gradient-to-br ${event.gradient} bg-opacity-10 p-8`}>
                                                             <div
                                                                 className="relative flex items-center justify-center"
                                                                 style={{
                                                                     width: `${event.logoWidth ?? 120}px`,
                                                                     height: `${event.logoHeight ?? event.logoWidth ?? 120}px`,
                                                                 }}
                                                             >
                                                                 {event.logoSrc && (
                                                                     <Image
                                                                         src={event.logoSrc}
                                                                         alt={`${event.title} Logo`}
                                                                         fill
                                                                         className="object-contain p-4"
                                                                     />
                                                                 )}
                                                             </div>
                                                         </div>
                                                        <div className="p-6">
                                                            <h3 className="text-xl font-bold text-[#134e4a] mb-2 group-hover:text-teal-600 transition-colors">
                                                                {event.title}
                                                            </h3>
                                                            <p className="text-[#0f766e] text-sm leading-relaxed mb-2">
                                                                {event.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                </div>
                            </div>
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

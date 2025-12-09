import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HelixAcademyComponent = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-emerald-100">
                <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider">
                  Academic Programs
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-[120px] h-[120px] rounded-full bg-white shadow-lg border border-emerald-200 overflow-hidden">
                  <Image
                    src="/logos/helixAcadamy_logo.png"
                    alt="Helix Academy Logo"
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#0f4f4a]">Helix Academy</h1>
                <p className="text-lg text-[#0f766e] max-w-2xl">
                  Focused coaching for JEE Main &amp; Advanced, NEET, and other competitive exams,
                  blending strong fundamentals with smart test strategies.
                </p>
              </div>
            </div>
    
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-md border border-emerald-100 p-8 space-y-4">
                <h2 className="text-2xl font-semibold text-[#134e4a]">What We Offer</h2>
                <ul className="space-y-3 text-[#0f766e]">
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                    Structured courses for JEE (Main &amp; Advanced) and NEET.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                    Weekly mock tests with detailed analytics and personalized feedback.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                    Concept mastery sessions, doubt-solving, and revision bootcamps.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                    Mentorship on exam mindset, time management, and exam temperament.
                  </li>
                </ul>
              </div>
    
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Why Helix Academy?</h2>
                  <p className="text-white/90 leading-relaxed">
                    We keep batches small for maximum attention, provide crystal-clear notes, and
                    simulate the real exam environment frequently so you&apos;re fully prepared for test day.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-lg bg-white/10 p-3">
                      <p className="font-semibold">Focused Batches</p>
                      <p className="text-white/80">Small groups for deeper learning</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-3">
                      <p className="font-semibold">Mock Drills</p>
                      <p className="text-white/80">Exam-like practice every week</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-3">
                      <p className="font-semibold">Mentorship</p>
                      <p className="text-white/80">Coaching on mindset and pace</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-3">
                      <p className="font-semibold">Analytics</p>
                      <p className="text-white/80">Pinpoint strengths &amp; gaps</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/studentRegistration"
                    className="inline-flex items-center justify-center rounded-full bg-white text-emerald-700 font-semibold px-6 py-3 hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      );
}

export default HelixAcademyComponent
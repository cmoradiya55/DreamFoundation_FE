import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function GrowLikeGujaratiComponent() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-emerald-50 to-teal-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-emerald-100">
                <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider">
                  Financial Education
                </span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-b from-emerald-100 to-teal-100 shadow-lg border border-emerald-200 overflow-hidden">
                  <Image
                    src="/logos/gorwLikeGujarati_logo.png"
                    alt="Grow Like Gujarati Logo"
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <h1 className="text-lg text-[#0f766e] max-w-2xl">
                  Stock market education and financial literacy programs designed to build confident,
                  long-term investors.
                </h1>
              </div>
            </div>
    
            <section className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-md border border-emerald-100 p-8 space-y-4">
                <h2 className="text-2xl font-semibold text-[#134e4a]">Program Highlights</h2>
                <ul className="space-y-3 text-[#0f766e]">
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                    Foundations of equity, mutual funds, and ETFs in plain language.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                    Risk management, portfolio sizing, and diversification essentials.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                    Practical screeners, research checklists, and case studies.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                    Weekend workshops and live Q&amp;A with market practitioners.
                  </li>
                </ul>
              </div>
    
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Why Learn With Us?</h2>
                  <p className="text-white/90 leading-relaxed">
                    We emphasize discipline and long-term thinking over quick gains, giving you a clear
                    roadmap to grow steadily and responsibly.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-lg bg-white/10 p-3">
                      <p className="font-semibold">Beginner Friendly</p>
                      <p className="text-white/80">No prior market experience needed</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-3">
                      <p className="font-semibold">Hands-on Tools</p>
                      <p className="text-white/80">Screeners, checklists, and templates</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-3">
                      <p className="font-semibold">Live Q&amp;A</p>
                      <p className="text-white/80">Clarify doubts with mentors</p>
                    </div>
                    <div className="rounded-lg bg-white/10 p-3">
                      <p className="font-semibold">Action Plans</p>
                      <p className="text-white/80">Step-by-step investing roadmap</p>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-6">
                  <Link
                    href="/studentRegistration"
                    className="inline-flex items-center justify-center rounded-full bg-white text-emerald-700 font-semibold px-6 py-3 hover:-translate-y-0.5 hover:shadow-lg transition-all"
                  >
                    Join a session
                  </Link>
                </div> */}
              </div>
            </section>

            <div className="mt-16 text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#134e4a] mb-4">
                Ready to Build Your Financial Future?
              </h2>
              <p className="text-[#0f766e] mb-6 leading-relaxed">
                Join Grow Like Gujarati and learn stock market investing with confidence. Start your journey towards financial literacy and wealth creation today.
              </p>
              <Link
                href="https://growlikegujarati.co.in/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
              >
                Join us today
              </Link>
            </div>
          </div>
        </main>
      );
}

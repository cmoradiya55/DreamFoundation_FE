'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImageLightbox from '../../components/ImageLightbox/ImageLightbox';

const HelixAcademyComponent = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const helixAcademyImages = [
    '/images/helix_banner_01.jpeg',
    '/images/helix_banner_02.jpeg',
    '/images/helix_banner_03.jpeg',
    '/images/helix_banner_04.jpeg',
    '/images/helix_banner_05.jpeg',
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % helixAcademyImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + helixAcademyImages.length) % helixAcademyImages.length);
  };

  const whatWeOffer = [
    {
      number: 1,
      title: 'One-to-One Mentorship',
      items: [
        'Personalized Guidance',
        'Weekly Progress Check',
        'Study-Plan Creation & Goal Setting',
      ],
    },
    {
      number: 2,
      title: 'Counselling Sessions',
      items: [
        'Academic Stress Management',
        'Motivation & Consistency Building',
        'Career & Stream Clarification',
      ],
    },
    {
      number: 3,
      title: 'Doubt-Solving Sessions',
      items: [
        'Daily/Weekly Doubt Clearing (Online/Offline)',
        'Subject-wise Expert Faculty',
        'Exam-oriented Solutions',
      ],
    },
    {
      number: 4,
      title: 'Parent-Teacher Meetings',
      items: [
        'Monthly Performance Review',
        'Behavioural & Academic Analysis',
        'Improvement Action Plan',
      ],
    },
  ];

  const whyHelixAcademy = [
    {
      title: 'Focused Batches',
      description: 'Small groups for deeper learning',
    },
    {
      title: 'Mock Drills',
      description: 'Exam-like practice every week',
    },
    {
      title: 'Mentorship',
      description: 'Coaching on mindset and pace',
    },
    {
      title: 'Analytics',
      description: 'Pinpoint strengths & gaps',
    },
    {
      title: 'Expert Faculty',
      description: 'Experienced teachers with proven track records',
    },
    {
      title: 'Study Materials',
      description: 'Comprehensive notes and resources',
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-emerald-100">
              <span className="text-emerald-700 font-semibold text-sm uppercase tracking-wider">
                Academic Programs
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-b from-emerald-100 to-teal-100 shadow-lg border border-emerald-200 overflow-hidden">
                <Image
                  src="/logos/helixAcadamy_logo.png"
                  alt="Helix Academy Logo"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <h1 className="text-lg text-[#0f766e] max-w-2xl">
                Premier coaching institute for JEE Main &amp; Advanced, NEET, and competitive exams.
              </h1>
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {helixAcademyImages.map((image, index) => (
              <div
                key={image}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image}
                  alt={`Helix Academy image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">View Academy Gallery</p>
                    <p className="text-white/80 text-sm">Click to see full image</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-md border border-emerald-100 p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-[#134e4a]">What We Offer</h2>

              <div className="space-y-4">
                {whatWeOffer.map((section) => (
                  <div key={section.number}>
                    <h3 className="text-lg font-semibold text-[#115e59] mb-2">
                      {section.number}. {section.title}
                    </h3>
                    <ul className="space-y-2 text-[#0f766e]">
                      {section.items.map((item, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Why Helix Academy?</h2>
                <p className="text-white/90 leading-relaxed">
                  We keep batches small for maximum attention, provide crystal-clear notes, and
                  simulate the real exam environment frequently so you&apos;re fully prepared for test day.
                </p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  {whyHelixAcademy.map((feature, index) => (
                    <div key={index} className="rounded-lg bg-white/10 p-3">
                      <p className="font-semibold">{feature.title}</p>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="mt-16 text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#134e4a] mb-4">
              Ready to Achieve Your Dream Score?
            </h2>
            <p className="text-[#0f766e] mb-6 leading-relaxed">
              Join Helix Academy and get expert guidance for JEE, NEET, and competitive exams. Start your journey towards academic excellence today.
            </p>
            <Link
              href="https://wa.me/916356179699"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </main>
      <ImageLightbox
        isOpen={lightboxOpen}
        images={helixAcademyImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
        altPrefix="Helix Academy image"
      />
    </>
  );
}

export default HelixAcademyComponent
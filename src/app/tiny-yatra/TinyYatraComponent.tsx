"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageLightbox from "../../components/ImageLightbox/ImageLightbox";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function TinyYatraComponent() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const tinyYatraImages = [
    "/images/canva_2.webp",
    "/images/canva_1.webp",
    "/images/canva_4.webp",
    "/images/canva_5.webp",
    "/images/canva_6.webp",
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
    setLightboxIndex(
      (prev) => (prev - 1 + tinyYatraImages.length) % tinyYatraImages.length,
    );
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16 space-y-6 flex flex-col items-center">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-md">
              <span className="text-teal-700 font-semibold text-sm uppercase tracking-wider">
                ACADEMIC PROGRAMS
              </span>
            </div>
            <div className="relative w-[120px] h-[120px] rounded-full bg-gradient-to-b from-emerald-100 to-teal-100 shadow-lg border border-emerald-200 overflow-hidden">
              <Image
                src="/logos/tinyYatra_logo.png"
                alt="Helix Academy Logo"
                fill
                className="object-contain p-3"
              />
            </div>
            <h1 className="text-lg sm:text-xl text-[#0f766e] max-w-3xl mx-auto leading-relaxed">
              Pre-nursery academy nurturing young minds through play-based
              learning.
            </h1>
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
                    <p className="text-white font-semibold text-lg">
                      View Learning Moment
                    </p>
                    <p className="text-white/80 text-sm">
                      Click to see full image
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#134e4a] mb-4">
              Ready to Start Your Child&apos;s Learning Journey?
            </h2>
            <p className="text-[#0f766e] mb-6 leading-relaxed">
              Enroll your little one in Tiny Yatra and watch them grow through
              fun, interactive learning experiences designed for early childhood
              development.
            </p>
            <Link
              href="/studentRegistration"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#042f2e] to-[#55a976] px-8 py-4 text-base font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
            >
              Register Your Child Today
            </Link>
          </div>

          {/* Contact Details Card */}
          <div className="mt-12">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-teal-100">
              {/* Contact Content */}
              <div className="p-6 sm:p-8">
                {/* Main Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Address */}
                  <div className="group rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-teal-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <MdLocationOn className="w-6 h-6 text-teal-600" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-teal-500">
                          Address
                        </p>

                        <p className="mt-2 text-sm font-medium text-[#134e4a] leading-relaxed">
                          Panchayat Chowk, University Road,
                          <br />
                          Rajkot – 360005
                        </p>

                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Panchayat+Chowk+University+Road+Rajkot+360005"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-3 text-xs font-semibold text-teal-600 hover:text-teal-800 transition-colors"
                        >
                          View Location →
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+916356179699"
                    className="group rounded-2xl border border-teal-100 bg-gradient-to-br from-cyan-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-cyan-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <MdPhone className="w-6 h-6 text-cyan-600" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-cyan-500">
                          Phone
                        </p>

                        <p className="mt-2 text-sm font-semibold text-[#134e4a]">
                          +91 63561 79699
                        </p>

                        <p className="mt-2 text-xs text-gray-500">
                          Call us for admission enquiries
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:tinyyatra99@gmail.com"
                    className="group rounded-2xl border border-teal-100 bg-gradient-to-br from-emerald-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-emerald-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                        <MdEmail className="w-6 h-6 text-emerald-600" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-emerald-500">
                          Email
                        </p>

                        <p className="mt-2 text-sm font-semibold text-[#134e4a] break-all">
                          tinyyatra99@gmail.com
                        </p>

                        <p className="mt-2 text-xs text-gray-500">
                          Send us your enquiry
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-7 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                    <div>
                      <p className="text-sm font-bold text-[#134e4a]">
                        Follow Tiny Yatra
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        Stay connected with our latest activities and updates
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/tinyyatra?igsh=eHZ5cW41aGtzZzh2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tiny Yatra Instagram"
                        className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-50 to-rose-100 border border-pink-200 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <FaInstagram className="w-5 h-5 text-pink-500" />
                      </a>

                      {/* Facebook */}
                      <a
                        href="https://www.facebook.com/people/Tinyyatra-Pre-School/61589399619277/#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tiny Yatra Facebook"
                        className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <FaFacebook className="w-5 h-5 text-blue-600" />
                      </a>

                      {/* WhatsApp */}
                      <a
                        href="https://wa.me/916356179699"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tiny Yatra WhatsApp"
                        className="w-11 h-11 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <FaWhatsapp className="w-5 h-5 text-green-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ImageLightbox
        isOpen={lightboxOpen}
        images={tinyYatraImages}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
        altPrefix="Tiny Yatra image"
      />
    </>
  );
}

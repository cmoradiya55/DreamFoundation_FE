"use client";

import { Metadata } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2026-10-04T00:00:00+05:30");

type EventStatus = "upcoming" | "live" | "finished";

const HealthyBabyCompititionPage = () => {
  const [eventStatus, setEventStatus] = useState<EventStatus>("upcoming");

  useEffect(() => {
    const checkEventStatus = () => {
      const now = new Date();

      // Compare only the date
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      const eventDate = new Date(
        EVENT_DATE.getFullYear(),
        EVENT_DATE.getMonth(),
        EVENT_DATE.getDate(),
      );
      console.log("eventDate 4 oct", eventDate);

      if (today < eventDate) {
        setEventStatus("upcoming");
      } else if (today.getTime() === eventDate.getTime()) {
        setEventStatus("live");
      } else {
        setEventStatus("finished");
      }
    };

    checkEventStatus();

    // Check again periodically
    const interval = setInterval(checkEventStatus, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  const eventStatusConfig = {
    upcoming: {
      label: "Upcoming Event",
      dot: "bg-emerald-500",
      text: "text-teal-700",
    },
    live: {
      label: "Live Event",
      dot: "bg-red-500 animate-pulse",
      text: "text-red-600",
    },
    finished: {
      label: "Event Finished",
      dot: "bg-gray-400",
      text: "text-gray-600",
    },
  };

  const status = eventStatusConfig[eventStatus];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-5 sm:px-8 lg:px-10 py-8 lg:py-12 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="order-2 lg:order-1">
            {/* Dynamic Event Status */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white border border-teal-100 shadow-sm ${status.text}`}
            >
              <span className={`w-2.5 h-2.5 rounded-full ${status.dot}`} />

              <span className="text-sm font-semibold uppercase tracking-wider">
                {status.label}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#134e4a]">
              Tiny Games
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                Competition
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-gray-600">
              Celebrate your little one&apos;s healthy growth, development,
              happiness, and special milestones. Join us for a fun-filled
              celebration created especially for little champions.
            </p>

            {/* Event Information */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              {/* Event */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-teal-100 shadow-sm">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center">
                  <span className="text-xl">🎉</span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-500">
                    Event
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#134e4a]">
                    Tiny Games Competition
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <span className="text-xl">📅</span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
                    Date
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#134e4a]">
                    4 October 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Status Message */}
            <div className="mt-6">
              {eventStatus === "upcoming" && (
                <p className="text-sm font-medium text-teal-700">
                  🎉 Get ready! Our Tiny Games Competition is coming on{" "}
                  <strong>4 October 2026</strong>.
                </p>
              )}

              {eventStatus === "live" && (
                <p className="text-sm font-semibold text-red-600">
                  🔴 The Tiny Games Competition is live today!
                </p>
              )}

              {eventStatus === "finished" && (
                <p className="text-sm font-medium text-gray-500">
                  Thank you for being part of the Tiny Games Competition. The
                  event has now ended.
                </p>
              )}
            </div>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative Circle */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-teal-200/40 blur-2xl" />

            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-emerald-200/40 blur-2xl" />

            {/* Image Card */}
            <div className="relative rounded-[2rem] overflow-hidden bg-white p-3 shadow-2xl border border-white">
              <div className="relative aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/tiny_games_event.webp"
                  alt="Tiny Games Competition"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HealthyBabyCompititionPage;

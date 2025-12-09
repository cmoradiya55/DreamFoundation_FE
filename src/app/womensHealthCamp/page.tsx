import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women's Health Camp | Dream Foundation",
  description:
    "Community wellness and preventive screening camp by Dream Foundation. Current registrations are closed.",
  openGraph: {
    title: "Women's Health Camp | Dream Foundation",
    description:
      "Community wellness and preventive screening camp by Dream Foundation. Current registrations are closed.",
    url: "https://dreamfoundation.in/womensHealthCamp",
  },
};

export default function WomensHealthCampPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-4xl w-full">
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-emerald-100">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-50/70 via-emerald-50/60 to-white opacity-80" />

          <div className="relative p-8 sm:p-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Women&apos;s Health Camp
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#134e4a]">
                Community Wellness & Preventive Screening
              </h1>
              <p className="text-base sm:text-lg text-[#0f766e] max-w-3xl">
                A focused initiative to provide checkups, guidance, and awareness for women&apos;s health
                in our community.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 sm:p-6 flex flex-col gap-3 sm:gap-2">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                Registrations are currently closed
              </div>
              <p className="text-[#0f766e] text-sm sm:text-base">
                Thank you for your interest. Please check back soon—our next camp details will be
                announced here.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-emerald-100 bg-white/70 p-4">
                <p className="text-xs uppercase tracking-wide text-emerald-700 font-semibold">
                  Focus Areas
                </p>
                <ul className="mt-2 space-y-2 text-[#0f766e] text-sm">
                  <li>• Preventive screening & vitals</li>
                  <li>• Nutrition & lifestyle guidance</li>
                  <li>• Doctor consultations</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white/70 p-4">
                <p className="text-xs uppercase tracking-wide text-emerald-700 font-semibold">
                  Stay Informed
                </p>
                <ul className="mt-2 space-y-2 text-[#0f766e] text-sm">
                  <li>• Follow our announcements for next dates</li>
                  <li>• Reach out for collaboration requests</li>
                  <li>• Watch this space for reopening</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


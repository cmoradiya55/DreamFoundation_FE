import WomensHealthCamp from '@/app/womensHealthCamp/WomensHealthCamp';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Women\'s Health Camp',
    description: 'Register for our upcoming camp',
    openGraph: {
        title: 'Women\'s Health Camp',
        description: 'Register for our upcoming camp',
        url: 'https://dreamfoundation.in/womensHealthCamp',
    },
};

const WomensHealthCampPage = () => (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-start lg:items-center justify-center px-4 sm:px-5 lg:px-6 py-8 sm:py-10">
        <div className="w-full max-w-6xl mx-auto space-y-8">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 via-pink-500/10 to-purple-600/10 z-10"></div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-3xl z-10"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl z-10"></div>

                <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-rose-200/50">
                        <span className="text-rose-700 font-bold text-sm">Women&apos;s Health Camp</span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-rose-900/80 via-pink-900/40 to-transparent z-10 p-6">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">Your Health, Our Priority</h2>
                    <p className="text-pink-100 text-sm md:text-base">Comprehensive wellness screening and health care for women</p>
                </div>

                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                    <Image
                        src="/images/WomenHealthCamp/WomenHealthCamp.webp"
                        alt="Women's Health Camp"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                </div>
            </div>
            <WomensHealthCamp />
        </div>
    </main>
);

export default WomensHealthCampPage;


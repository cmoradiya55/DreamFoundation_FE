import { Metadata } from 'next';
import Image from 'next/image';
import HealthyBabyCompitition from './HealthyBabyCompitition';

export const metadata: Metadata = {
    title: 'Healthy Baby Compitition',
    description: 'Register for our upcoming competition',
    openGraph: {
        title: 'Healthy Baby Compitition',
        description: 'Register for our upcoming competition',
        url: 'https://dreamfoundation.in/healthyBabyCompitition',
    },
};

const HealthyBabyCompititionPage = () => (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-start lg:items-center justify-center px-4 sm:px-5 lg:px-6 py-8 sm:py-10">
        <div className="w-full max-w-6xl mx-auto space-y-8">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-teal-600/10 z-10"></div>

                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl z-10"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl z-10"></div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 via-cyan-900/40 to-transparent z-10 p-6">
                    <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">Celebrate Your Little One</h2>
                    <p className="text-cyan-100 text-sm md:text-base">Join us in celebrating healthy growth and development milestones</p>
                </div>

                <div className="relative w-full h-[200px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
                    <Image
                        src="/images/HealthyBabyCompitition.webp"
                        alt="Healthy Baby Competition"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                </div>
            </div>
            <HealthyBabyCompitition />
        </div>
    </main>
);

export default HealthyBabyCompititionPage;

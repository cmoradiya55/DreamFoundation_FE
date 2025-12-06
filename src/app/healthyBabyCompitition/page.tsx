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
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    src="/images/HealthyBabyCompitition.webp"
                    alt="Healthy Baby Competition"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <HealthyBabyCompitition />
        </div>
    </main>
);

export default HealthyBabyCompititionPage;

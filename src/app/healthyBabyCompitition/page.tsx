import { Metadata } from 'next';
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
        <div className="w-full">
            <HealthyBabyCompitition />
        </div>
    </main>
);

export default HealthyBabyCompititionPage;

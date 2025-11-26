import WomensHealthCamp from '@/app/womensHealthCamp/WomensHealthCamp';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Women’s Health Camp',
    description: 'Register for our upcoming camp',
    openGraph: {
        title: 'Women’s Health Camp',
        description: 'Register for our upcoming camp',
        url: 'https://dreamfoundation.in/womensHealthCamp',
    },
};

const WomensHealthCampPage = () => (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex items-start lg:items-center justify-center px-4 sm:px-5 lg:px-6 py-8 sm:py-10">
        <div className="w-full">
            <WomensHealthCamp />
        </div>
    </main>
);

export default WomensHealthCampPage;


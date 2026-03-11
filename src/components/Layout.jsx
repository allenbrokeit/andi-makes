import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AndiMakesLogo from './icons/AndiMakesLogo';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-brand-light-blue)] relative">
            <Navbar />
            
            {/* Absolute Logo Top Left Beneath Navbar */}
            <div className="absolute top-20 left-0 sm:left-2 z-40">
                <Link to="/" className="group block">
                    <AndiMakesLogo className="w-32 md:w-48 h-auto object-contain transition-transform group-hover:scale-105 drop-shadow-xl" />
                </Link>
            </div>

            <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

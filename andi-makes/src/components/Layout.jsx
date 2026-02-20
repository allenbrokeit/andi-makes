import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-brand-light-blue)]">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

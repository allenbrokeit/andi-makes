import { Link, useLocation } from 'react-router-dom';
import AndiMakesLogo from './icons/AndiMakesLogo';

export default function Navbar() {
    const location = useLocation();

    const links = [
        { to: '/', label: 'Home' },
        { to: '/services', label: 'Services' },
        { to: '/contact', label: 'Contact Us' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">

                    {/* Logo Section */}
                    <div className="relative w-40 md:w-56 h-full flex shrink-0">
                        <Link to="/" className="absolute top-1 -left-8 sm:-left-16 lg:-left-24 group z-50">
                            <AndiMakesLogo className="h-32 md:h-40 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-lg" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden sm:flex sm:items-center sm:gap-8">
                        {links.map((link) => {
                            const isActive = location.pathname === link.to;
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`text-sm font-medium transition-colors ${isActive
                                            ? 'text-blue-600'
                                            : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Placeholder (Optional enhancement later) */}
                    <div className="sm:hidden flex items-center gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-xs font-medium text-gray-600"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </nav>
    );
}

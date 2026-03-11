import { EnvelopeIcon } from '@heroicons/react/24/solid';
import AndiChibiLogo from './icons/AndiChibiLogo';


export default function Footer() {
    return (
        <footer className="bg-[var(--color-brand-dark-blue)] text-white py-8 mt-auto shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-sm text-blue-100">
                    &copy; {new Date().getFullYear()} Andi Makes. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://www.facebook.com/profile.php?id=61586001636539"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors group"
                    >
                        <AndiChibiLogo className="h-8 w-8 object-contain rounded-full group-hover:scale-110 transition-transform bg-white/10" />
                        <span className="text-sm font-medium">Facebook</span>
                    </a>

                    <a
                        href="mailto:contact@andimakes.com"
                        className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors group"
                    >
                        <EnvelopeIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">contact@andimakes.com</span>
                    </a>
                </div>

            </div>
        </footer>
    );
}

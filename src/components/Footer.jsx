import { EnvelopeIcon } from '@heroicons/react/24/solid';
import AndiChibiLogo from './icons/AndiChibiLogo';


export default function Footer() {
    return (
        <footer className="bg-[var(--color-brand-dark-blue)] text-white py-8 mt-auto shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-sm text-blue-100">
                    &copy; {new Date().getFullYear()} Andi Makes. All rights reserved.
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
                    <span className="text-sm font-medium text-blue-100 text-center">
                        Learn more about our services or contact us at: 
                    </span>
                    <a
                        href="https://www.facebook.com/profile.php?id=61586001636539"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors group shrink-0"
                    >
                        <AndiChibiLogo className="h-10 w-10 object-cover rounded-full group-hover:scale-110 transition-transform bg-white/10 p-0.5" />
                        <span className="text-sm font-medium">Facebook</span>
                    </a>
                </div>

            </div>
        </footer>
    );
}

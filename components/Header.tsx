'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [logoError, setLogoError] = useState(false);

    const headerImageUrl = 'https://drive.google.com/thumbnail?id=1rMM9BggGwKsff2n8oexmSCV3EQ3LehxA&sz=w1000';

    return (
        <header className="fixed top-0 w-full bg-gradient-to-b from-slate-900/95 to-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="group flex items-center hover:scale-105 transition duration-300">
                    {!logoError ? (
                        <img
                            src={headerImageUrl}
                            alt="Merna Adel logo"
                            className="h-11 w-11 rounded-full border border-cyan-300/40 object-cover shadow-md shadow-cyan-400/20"
                            onError={() => setLogoError(true)}
                        />
                    ) : (
                        <span className="display-font text-2xl font-black bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                            M.A
                        </span>
                    )}
                </Link>

                <div className="hidden md:flex gap-8">
                    <a href="#about" className="text-gray-300 hover:text-white transition font-medium relative group">
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition font-medium relative group">
                        Projects
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition font-medium relative group">
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                </div>

                <a
                    href="#contact"
                    className="hidden md:inline px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg transition transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                >
                    Let's Talk
                </a>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {isOpen && (
                <div className="md:hidden bg-slate-900/95 border-t border-slate-700/50">
                    <div className="px-6 py-4 space-y-3">
                        <a href="#about" className="block text-gray-300 hover:text-white transition py-2 font-medium">About</a>
                        <a href="#projects" className="block text-gray-300 hover:text-white transition py-2 font-medium">Projects</a>
                        <a href="#contact" className="block text-gray-300 hover:text-white transition py-2 font-medium">Contact</a>
                        <a href="#contact" className="block w-full text-center px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg transition mt-4">
                            Let's Talk
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

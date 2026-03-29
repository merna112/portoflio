'use client';

import { useEffect, useState } from 'react';

const roles = [
    'Full Stack Developer',
    'MERN Specialist',
    'Product Builder',
    'AI Enthusiast',
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [avatarError, setAvatarError] = useState(false);
    const profileImageUrl = 'https://drive.google.com/thumbnail?id=1rMM9BggGwKsff2n8oexmSCV3EQ3LehxA&sz=w1000';

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <div className="section-shell hero-grain min-h-screen bg-gradient-to-b from-slate-900 via-blue-950/25 to-slate-900 flex items-center justify-center pt-24 px-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-14 left-8 sm:left-16 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-12 right-8 sm:right-16 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute inset-0 opacity-25 animate-grid-shift" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)', backgroundSize: '70px 70px' }}></div>

            <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-up">
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <span className="px-4 py-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 text-xs sm:text-sm font-semibold animate-soft-glow">Live Product Focus</span>
                    <span className="px-4 py-1.5 rounded-full border border-blue-300/30 bg-blue-300/10 text-blue-200 text-xs sm:text-sm font-semibold animate-float-slow">Full Stack + AI</span>
                    <span className="px-4 py-1.5 rounded-full border border-indigo-300/30 bg-indigo-300/10 text-indigo-200 text-xs sm:text-sm font-semibold animate-float-slow" style={{ animationDelay: '0.8s' }}>International Collaboration</span>
                </div>

                {/* Avatar */}
                <div className="mb-8 inline-block">
                    <div className="relative w-32 h-32 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-75 blur animate-soft-glow"></div>
                        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1">
                            {!avatarError ? (
                                <img
                                    src={profileImageUrl}
                                    alt="Merna Adel"
                                    className="w-full h-full rounded-full object-cover bg-slate-900"
                                    onError={() => setAvatarError(true)}
                                />
                            ) : (
                                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                    <span className="text-6xl">👨‍💻</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Title */}
                <h1 className="display-font text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-tight">
                    Hey, I'm <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Merna</span>
                </h1>

                {/* Typing Role */}
                <div className="h-16 md:h-20 flex items-center justify-center mb-8">
                    <div className="text-2xl md:text-4xl font-bold">
                        <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                            {displayText}
                        </span>
                        <span className="animate-blink text-blue-400 ml-1">|</span>
                    </div>
                </div>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-200/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Building <span className="text-blue-400 font-semibold">live products</span> that people use. Full Stack Engineer with expertise in MERN stack, AI integration, and international collaboration.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-4 justify-center mb-12 flex-wrap">
                    <a
                        href="#projects"
                        className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-xl transition transform hover:scale-105 text-lg overflow-hidden shadow-lg shadow-cyan-500/20"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            🚀 See Live Projects <span className="group-hover:translate-x-1 transition">→</span>
                        </span>
                        <div className="absolute -inset-x-24 inset-y-0 bg-white/30 opacity-0 group-hover:opacity-100 animate-shimmer"></div>
                    </a>
                    <a
                        href="#contact"
                        className="px-10 py-4 border-2 border-cyan-300/70 text-cyan-200 hover:bg-cyan-300/10 font-bold rounded-xl transition text-lg hover:scale-105"
                    >
                        💬 Get in Touch
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6 text-3xl mb-16">
                    <a href="https://github.com/merna112" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition duration-300 filter hover:drop-shadow-lg hover:drop-shadow-blue-500/50">
                        🐙
                    </a>
                    <a href="https://www.linkedin.com/in/merna-adel-4b4426269" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition duration-300 filter hover:drop-shadow-lg hover:drop-shadow-blue-500/50">
                        💼
                    </a>
                    <a href="mailto:mernaadel182@gmail.com" className="hover:scale-125 transition duration-300 filter hover:drop-shadow-lg hover:drop-shadow-blue-500/50">
                        ✉️
                    </a>
                    <a href="https://discordapp.com/users/mernaadel1" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition duration-300 filter hover:drop-shadow-lg hover:drop-shadow-blue-500/50">
                        🎮
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="flex flex-col items-center gap-2 text-gray-300">
                    <p className="text-sm">Scroll to explore</p>
                    <div className="animate-bounce">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

'use client';

import { publications } from '@/lib/projects-data';
import Link from 'next/link';

export default function Publications() {
    return (
        <section id="publications" className="section-shell py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 animate-fade-up">
                    <h2 className="display-font text-4xl font-bold text-white mb-3 flex items-center gap-3">
                        <span className="text-blue-400">📚</span> Publications & Research
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                </div>

                <div className="grid gap-6">
                    {publications.map((pub, index) => (
                        <Link
                            key={pub.id}
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group animate-fade-up"
                            style={{ animationDelay: `${index * 120}ms` }}
                        >
                            <div className="p-6 bg-slate-800/90 border border-slate-700 rounded-lg hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl flex-shrink-0 mt-1">📖</div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors mb-2">
                                            {pub.title}
                                        </h3>
                                        <p className="text-slate-400 mb-3 leading-relaxed">
                                            {pub.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300">
                                            <span>🔗 Read Publication</span>
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

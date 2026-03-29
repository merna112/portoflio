'use client';

import { projects, featuredProjects } from '@/lib/projects-data';
import ProjectCard from './ProjectCard';
import { useState } from 'react';

export default function Projects() {
    const [showAll, setShowAll] = useState(false);

    // Separate projects with live demos
    const liveProjectOrder = ['distributed-search', 'shop-hub', 'kubecloudai'];
    const liveProjects = featuredProjects
        .filter(p => p.liveDemo)
        .sort((a, b) => liveProjectOrder.indexOf(a.id) - liveProjectOrder.indexOf(b.id));
    const displayedProjects = showAll ? projects : featuredProjects;

    return (
        <section id="projects" className="section-shell py-20 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-up">
                    <h2 className="display-font text-5xl md:text-6xl font-bold text-white mb-4">
                        Featured <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Products</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Live, deployed applications showcasing real-world problem solving and full-stack expertise.
                    </p>
                </div>

                {/* Live Projects Section */}
                {liveProjects.length > 0 && (
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                            <h3 className="text-2xl font-bold text-white">🌐 Live Projects</h3>
                            <div className="h-1 flex-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {liveProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    </div>
                )}

                {/* All Projects Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                        <h3 className="text-2xl font-bold text-white">📂 All Projects</h3>
                        <div className="h-1 flex-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* Load More Button */}
                {!showAll && projects.length > featuredProjects.length && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition transform hover:scale-105 text-lg shadow-lg hover:shadow-blue-500/50 inline-flex items-center gap-3"
                        >
                            View All Projects <span className="text-2xl">→</span>
                        </button>
                        <p className="text-gray-400 mt-6 text-sm">
                            + {projects.length - featuredProjects.length} more projects
                        </p>
                    </div>
                )}

                {showAll && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(false)}
                            className="px-10 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition text-lg"
                        >
                            Show Less
                        </button>
                    </div>
                )}

                {/* Stats Section */}
                <div className="mt-20 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-2xl p-8 backdrop-blur">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">📊 Impact & Stats</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">{liveProjects.length}+</div>
                            <p className="text-gray-300 font-semibold">Live Projects</p>
                            <p className="text-gray-400 text-sm mt-1">Deployed on Vercel</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-cyan-400 mb-2">{projects.length}+</div>
                            <p className="text-gray-300 font-semibold">Total Projects</p>
                            <p className="text-gray-400 text-sm mt-1">Open source on GitHub</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-400 mb-2">3</div>
                            <p className="text-gray-300 font-semibold">International Teams</p>
                            <p className="text-gray-400 text-sm mt-1">Cross-border collaboration</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-400 mb-2">🥈</div>
                            <p className="text-gray-300 font-semibold">2nd Place</p>
                            <p className="text-gray-400 text-sm mt-1">Capstone Competition</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

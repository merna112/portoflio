'use client';

import { Project } from '@/lib/projects-data';

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
    if (project.liveDemo) {
        return (
            <div className="group animate-fade-up relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/70 border border-slate-700/60 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col h-full hover:-translate-y-1" style={{ animationDelay: `${index * 110}ms` }}>
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                {/* Large Live Preview Area - Responsive */}
                <div className="relative w-full bg-slate-950 overflow-hidden flex-shrink-0 h-32 sm:h-40 md:h-48 lg:h-56">
                    <iframe
                        src={project.liveDemo}
                        className="w-full h-full border-none transition-transform duration-700 group-hover:scale-105"
                        title={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-3 gap-3">
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition line-clamp-2">
                            {project.title}
                        </h3>
                        {project.featured && (
                            <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full whitespace-nowrap">⭐ Featured</span>
                        )}
                    </div>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    <p className="text-gray-400 text-xs mb-4 flex-grow line-clamp-3">
                        {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-xs bg-slate-700/80 text-gray-300 px-2 py-1 rounded-md border border-slate-600/50">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="text-xs bg-slate-700/80 text-gray-400 px-2 py-1 rounded-md border border-slate-600/50">
                                +{project.technologies.length - 3} more
                            </span>
                        )}
                    </div>

                    <div className="flex gap-2 mt-auto">
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg transition text-center text-sm hover:shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105"
                        >
                            🌐 Live Demo
                        </a>
                        {project.backendDemo && (
                            <a
                                href={project.backendDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-2.5 border border-cyan-700/70 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 font-semibold rounded-lg transition text-xs"
                                title="View deployed backend"
                            >
                                API
                            </a>
                        )}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 border border-slate-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-lg transition text-sm"
                            title="View source code"
                        >
                            💻
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="group animate-fade-up relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/70 border border-slate-700/60 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col h-full hover:-translate-y-1" style={{ animationDelay: `${index * 110}ms` }}>
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Icon/Visual Area */}
            <div className="h-40 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-blue-500 to-cyan-500 transition-opacity duration-300"></div>
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(125,211,252,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(45,212,191,0.4), transparent 35%)' }}></div>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-500">🚀</div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3 gap-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition line-clamp-2">
                        {project.title}
                    </h3>
                    {project.featured && (
                        <span className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full whitespace-nowrap">⭐ Featured</span>
                    )}
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                <p className="text-gray-400 text-xs mb-4 flex-grow line-clamp-3">
                    {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-xs bg-slate-700/80 text-gray-300 px-2 py-1 rounded-md border border-slate-600/50">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="text-xs bg-slate-700/80 text-gray-400 px-2 py-1 rounded-md border border-slate-600/50">
                            +{project.technologies.length - 3} more
                        </span>
                    )}
                </div>

                <div className="flex gap-2 mt-auto">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition text-center text-sm"
                    >
                        📂 View Code
                    </a>
                </div>
            </div>
        </div>
    );
}

'use client';

export default function About() {
    const skills = {
        languages: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
        frontend: ['React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        backend: ['Node.js', 'Express.js', 'Flask', 'MongoDB', 'PostgreSQL', 'Firebase'],
        devops: ['Git', 'GitHub', 'Vercel', 'Render', 'Docker', 'Postman'],
        ai: ['OpenAI API', 'Google Generative AI', 'Semantic Search', 'Machine Learning', 'NLP'],
        concepts: ['MERN Stack', 'Microservices', 'RESTful APIs', 'SOLID', 'RBAC', 'Clean Code'],
    };

    return (
        <section id="about" className="section-shell py-20 px-6 bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="display-font text-4xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-up">
                    About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="animate-fade-up" style={{ animationDelay: '80ms' }}>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I'm Merna Adel, a <strong>Full Stack Developer</strong> with hands-on experience in <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) and building scalable web applications.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I have proven ability to collaborate in cross-functional teams through capstone and international projects. Skilled in developing RESTful APIs, implementing responsive UIs, and AI-powered search pipelines. Currently involved as a <strong>Field Training Intern (Full Stack & AI)</strong> at Virginia Tech University.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Eager to apply technical expertise and problem-solving skills to contribute effectively to innovative projects. Passionate about scalable architecture, clean code, and staying updated with the latest technologies and best practices.
                        </p>
                    </div>

                    <div className="space-y-8 animate-fade-up" style={{ animationDelay: '140ms' }}>
                        <div>
                            <h3 className="text-blue-400 font-bold mb-4 text-lg">Core Languages</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.languages.map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-200 rounded-lg border border-blue-500/30 transition duration-300 hover:-translate-y-1 hover:border-blue-300/60">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-cyan-400 font-bold mb-4 text-lg">Frontend</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.frontend.map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-200 rounded-lg border border-cyan-500/30 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-blue-300 font-bold mb-4 text-lg">Backend & Databases</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.backend.map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-200 rounded-lg border border-blue-400/30 transition duration-300 hover:-translate-y-1 hover:border-blue-300/60">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-purple-400 font-bold mb-4 text-lg">DevOps & Tools</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.devops.map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-200 rounded-lg border border-purple-500/30 transition duration-300 hover:-translate-y-1 hover:border-purple-300/60">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-pink-400 font-bold mb-4 text-lg">AI & Machine Learning</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.ai.map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-200 rounded-lg border border-pink-500/30 transition duration-300 hover:-translate-y-1 hover:border-pink-300/60">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-green-400 font-bold mb-4 text-lg">Key Concepts</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.concepts.map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-200 rounded-lg border border-green-500/30 transition duration-300 hover:-translate-y-1 hover:border-green-300/60">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
                    <h3 className="text-white font-bold text-xl mb-6">🏆 Current Position & Recent Highlights</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-blue-400 font-bold mb-2">Field Training Intern (Full Stack & AI)</p>
                            <p className="text-gray-300 text-sm">Virginia Tech University FT2 Collaboration | Jan 2025 — May 2025</p>
                            <p className="text-gray-400 text-sm mt-1">Building full-stack web application with Next.js frontend and Flask backend. Implementing AI-powered search pipeline supporting text, voice, and image-based semantic search for project discovery.</p>
                        </div>
                        <div className="border-t border-slate-600 pt-4">
                            <p className="text-cyan-400 font-bold mb-2">🎓 Capstone Project (International Collaboration)</p>
                            <p className="text-gray-300 text-sm">University of Louisville | Oct 2024 — Feb 2025</p>
                            <p className="text-yellow-300/80 text-sm font-semibold mt-1">🥈 2nd Place - Bioengineering-Diagnostics Category</p>
                            <p className="text-gray-400 text-sm mt-1">Collaborated with teams from USA, Egypt, and Spain to develop Python-based diagnostics application. Published comprehensive review on ML techniques for breast cancer detection.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

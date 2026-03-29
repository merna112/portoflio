export default function Footer() {
    return (
        <footer className="section-shell relative bg-gradient-to-t from-slate-950 to-slate-900 border-t border-slate-700/50 py-16 px-6">
            <div className="max-w-7xl mx-auto animate-fade-up">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="display-font text-white font-black text-2xl mb-3">M.A</h3>
                        <p className="text-gray-400 text-sm">
                            Full Stack Developer building live products that solve real problems.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition text-sm">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-white transition text-sm">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#publications" className="text-gray-400 hover:text-white transition text-sm">
                                    Publications
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition text-sm">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Projects</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://kube-cloud-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition text-sm">
                                    KubeCloudAI
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/merna112" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition text-sm">
                                    All Repos
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition text-sm">
                                    View Portfolio
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/merna112"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition text-xl"
                                title="GitHub"
                            >
                                🐙
                            </a>
                            <a
                                href="https://www.linkedin.com/in/merna-adel-4b4426269"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition text-xl"
                                title="LinkedIn"
                            >
                                💼
                            </a>
                            <a
                                href="mailto:mernaadel182@gmail.com"
                                className="text-gray-400 hover:text-blue-400 transition text-xl"
                                title="Email"
                            >
                                ✉️
                            </a>
                            <a
                                href="https://discordapp.com/users/mernaadel1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition text-xl"
                                title="Discord"
                            >
                                🎮
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-700/50 pt-8 text-center">
                    <p className="text-gray-400 text-sm mb-2">
                        © 2026 Merna Adel. Built with <span className="text-blue-400 font-semibold">Next.js</span> + <span className="text-cyan-400 font-semibold">Tailwind CSS</span>
                    </p>
                    <p className="text-gray-500 text-xs">
                        ✨ Keep building. Keep learning. Keep shining ✨
                    </p>
                </div>
            </div>
        </footer>
    );
}

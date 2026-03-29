'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Create mailto link
        const mailtoLink = `mailto:mernaadel182@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setSubmitted(false);
        }, 2000);
    };

    return (
        <section id="contact" className="section-shell py-20 px-6 bg-slate-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="display-font text-4xl md:text-5xl font-bold text-white mb-4 text-center animate-fade-up">
                    Let's <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
                </h2>
                <p className="text-gray-300 text-center mb-12 animate-fade-up" style={{ animationDelay: '90ms' }}>
                    Have a project in mind or just want to chat? Feel free to reach out!
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="animate-fade-up" style={{ animationDelay: '130ms' }}>
                        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 backdrop-blur">
                            <div>
                                <label htmlFor="name" className="block text-white font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 text-white rounded-lg focus:border-blue-400 focus:outline-none transition duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 text-white rounded-lg focus:border-blue-400 focus:outline-none transition duration-300 focus:shadow-lg focus:shadow-blue-500/20"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 text-white rounded-lg focus:border-blue-400 focus:outline-none transition duration-300 focus:shadow-lg focus:shadow-blue-500/20 resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/40 transition transform hover:scale-105"
                            >
                                {submitted ? '✓ Message Sent!' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8 animate-fade-up" style={{ animationDelay: '180ms' }}>
                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-400 transition duration-300 hover:-translate-y-1">
                            <div className="text-3xl mb-4">📧</div>
                            <h3 className="text-white font-bold mb-2">Email</h3>
                            <a
                                href="mailto:mernaadel182@gmail.com"
                                className="text-blue-400 hover:text-blue-300 transition break-all"
                            >
                                mernaadel182@gmail.com
                            </a>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-1">
                            <div className="text-3xl mb-4">💼</div>
                            <h3 className="text-white font-bold mb-2">LinkedIn</h3>
                            <a
                                href="https://www.linkedin.com/in/merna-adel-4b4426269"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition break-all"
                            >
                                merna-adel-4b4426269
                            </a>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-400 transition duration-300 hover:-translate-y-1">
                            <div className="text-3xl mb-4">🐙</div>
                            <h3 className="text-white font-bold mb-2">GitHub</h3>
                            <a
                                href="https://github.com/merna112"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition"
                            >
                                github.com/merna112
                            </a>
                        </div>

                        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-pink-400 transition duration-300 hover:-translate-y-1">
                            <div className="text-3xl mb-4">🎮</div>
                            <h3 className="text-white font-bold mb-2">Discord</h3>
                            <p className="text-blue-400">mernaadel1</p>
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
                            <p className="text-gray-300">
                                ✨ Feel free to reach out for collaboration, internships, or just to say hello!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

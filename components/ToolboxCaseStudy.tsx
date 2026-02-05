
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Shield, Cpu, Smartphone, Lock, CheckCircle, Smartphone as MobileIcon, Layers, Code, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import toolboxImage from '../assets/toolbox.png';

const ToolboxCaseStudy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none -z-20">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
                {/* Navigation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link to="/" className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
                        <div className="p-2 rounded-full glass-card group-hover:scale-110 transition-transform">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                </motion.div>

                // Hero Section
                <section className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col lg:flex-row gap-16 items-center lg:items-start"
                    >
                        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                            <div className="inline-block px-4 py-1.5 rounded-full glass-card border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
                                Utilities & Productivity
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                                Tool<span className="text-gradient">Box</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                A secure, client-side-first utility platform. Powerful file manipulation tools running entirely on your device using TypeScript, ensuring 100% privacy with zero data upload.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                                <a
                                    href="https://aadizztoolbox.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center space-x-3 transition-all hover:scale-105 shadow-lg shadow-blue-600/20"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    <span>Visit Web Tool</span>
                                </a>
                                <a
                                    href="#"
                                    className="px-8 py-4 glass-card hover:bg-white/5 text-white rounded-2xl font-bold flex items-center space-x-3 transition-all hover:scale-105"
                                >
                                    <Smartphone className="w-5 h-5" />
                                    <span>View App</span>
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70" />
                            <div className="relative glass-card p-4 rounded-[32px] overflow-hidden border-white/10 group-hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src={toolboxImage}
                                    alt="Toolbox Interface"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Stats Grid */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {[
                        { label: "Privacy", value: "100% Local", icon: Lock },
                        { label: "Architecture", value: "Serverless", icon: Cpu },
                        { label: "Platform", value: "Web + Mobile", icon: Layers },
                        { label: "Core", value: "TypeScript", icon: Code },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-3xl border-white/5 text-center hover:bg-white/5 transition-colors"
                        >
                            <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-4">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-xl md:text-2xl font-bold text-white mb-1 break-words">{stat.value}</div>
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </section>

                {/* Content Layout */}
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        <Section title="The Privacy First Approach">
                            <p className="text-lg leading-relaxed mb-6">
                                In an era where data privacy is paramount, Toolbox takes a radical approach to file utilities. Unlike traditional tools that upload your sensitive documents to remote servers for processing, Toolbox performs every operation directly on your device's CPU.
                            </p>
                            <div className="glass-card p-8 rounded-3xl border-l-4 border-blue-500 bg-blue-500/5">
                                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-blue-400" />
                                    Zero-Upload Guarantee
                                </h4>
                                <p className="italic text-slate-300">
                                    "Your files never leave your device. By leveraging modern browser capabilities and TypeScript, we bring server-grade processing power directly to your browser tab and mobile phone."
                                </p>
                            </div>
                        </Section>

                        <Section title="Key Features">
                            <p className="mb-6">
                                Toolbox offers a comprehensive suite of utilities designed to rival industry giants like ILovePDF, but with a focus on security and modern tech.
                            </p>
                            <div className="space-y-4">
                                <SolutionCard
                                    title="Client-Side Processing"
                                    desc="Utilizes the device CPU for all computations. No database, no backend storage, no data risk."
                                    icon={Cpu}
                                    highlight
                                />
                                <SolutionCard
                                    title="Cross-Platform Availability"
                                    desc="Available as a responsive Web Tool and a standalone React Native Android application."
                                    icon={MobileIcon}
                                />
                                <SolutionCard
                                    title="Type-Safe Reliability"
                                    desc="Entire codebase written in TypeScript for maximum stability and fewer runtime errors."
                                    icon={Code}
                                />
                            </div>
                        </Section>

                        <Section title="Technical Architecture">
                            <p className="mb-8">
                                The breakdown of the Toolbox architecture highlights its simplicity and security.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-white mb-4 text-lg">Tech Stack</h4>
                                    <ul className="space-y-3">
                                        {['React (Web Frontend)', 'React Native (Mobile App)', 'TypeScript (Logic)', 'Tailwind CSS (Styling)'].map((item, i) => (
                                            <li key={i} className="flex items-center space-x-3 text-slate-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="glass-card p-6 rounded-2xl text-sm font-mono text-blue-300 overflow-x-auto">
                                    <div className="opacity-50 mb-2">// Security Logic</div>
                                    <div className="whitespace-nowrap">const processFile = (file: File) ={'>'} {'{'}</div>
                                    <div className="pl-4 whitespace-nowrap">// No API calls</div>
                                    <div className="pl-4 whitespace-nowrap">const reader = new FileReader();</div>
                                    <div className="pl-4 whitespace-nowrap">reader.onload = (e) ={'>'} {'{'}</div>
                                    <div className="pl-8 whitespace-nowrap">performLocalTransform(e.target.result);</div>
                                    <div className="pl-4 whitespace-nowrap">{'}'};</div>
                                    <div className="pl-4 whitespace-nowrap">return outputBlob;</div>
                                    <div>{'}'}</div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Impact & Vision">
                            <p className="mb-6">
                                Toolbox proves that powerful utilities don't need to compromise on privacy. It serves as a secure, ad-free alternative to common online tools.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <FutureCard icon={Lock} title="Local Encryption" desc="Future support for encrypted file vaults" />
                                <FutureCard icon={Zap} title="Instant Results" desc="No upload/download wait times" />
                                <FutureCard icon={Globe} title="PWA Support" desc="Installable directly from browser" />
                                <FutureCard icon={Layers} title="More Tools" desc="Expanding image & video tools" />
                            </div>
                        </Section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="glass-card p-8 rounded-[32px] border-white/10 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Role</div>
                                    <div className="text-slate-200">Full Stack Developer</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Platform</div>
                                    <div className="text-slate-200">Web & Android</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {['TypeScript', 'React', 'React Native', 'Tailwind'].map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-blue-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-white/10 my-8" />

                            <a
                                href="https://aadizztoolbox.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-white text-slate-900 rounded-xl font-bold text-center hover:bg-slate-200 transition-colors"
                            >
                                Visit Website
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Credit */}
                <div className="mt-24 pt-12 border-t border-white/5 text-center text-slate-600 text-sm">
                    <p>© 2026 Aditya Dhiman. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

// Submodules for cleaner code
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
    >
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="hidden md:block w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
            {title}
        </h2>
        {children}
    </motion.div>
);

const SolutionCard: React.FC<{ title: string; desc: string; icon: any; highlight?: boolean }> = ({ title, desc, icon: Icon, highlight }) => (
    <div className={`p-6 rounded-2xl border transition-all hover:scale-[1.01] ${highlight ? 'bg-blue-500/10 border-blue-500/30' : 'bg-white/5 border-white/5'}`}>
        <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${highlight ? 'bg-blue-500 text-white' : 'bg-white/10 text-slate-300'}`}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
                <p className="text-slate-400 text-sm">{desc}</p>
            </div>
        </div>
    </div>
);

const FutureCard: React.FC<{ icon: any; title: string; desc: string }> = ({ icon: Icon, title, desc }) => (
    <div className="glass-card p-5 rounded-2xl hover:bg-white/5 transition-colors">
        <Icon className="w-6 h-6 text-blue-400 mb-3" />
        <h5 className="font-bold text-white mb-1">{title}</h5>
        <p className="text-xs text-slate-500">{desc}</p>
    </div>
);

export default ToolboxCaseStudy;

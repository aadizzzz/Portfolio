import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ShieldAlert, Bug, Database, Server, Code, Bot, Globe, Lock, Activity, Eye, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import honeypotImage from '../assets/scamhoneypot.png';

const HoneypotCaseStudy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-green-500/30 selection:text-white relative overflow-x-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none -z-20">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-green-900/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full" />
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

                {/* Hero Section */}
                <section className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col lg:flex-row gap-16 items-start"
                    >
                        <div className="lg:w-1/2 space-y-8">
                            <div className="inline-block px-4 py-1.5 rounded-full glass-card border-green-500/20 text-green-400 text-xs font-bold tracking-widest uppercase">
                                Cybersecurity & AI
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                                Scam<span className="text-green-500">Honeypot</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                An intelligent extraction system using Supabase Edge Functions and Gemini AI to engage scammers and extract critical intelligence like UPI IDs and bank details.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <a
                                    href="https://honeypot-omega.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold flex items-center space-x-3 transition-all hover:scale-105 shadow-lg shadow-green-600/20"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    <span>Visit Live System</span>
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-green-600/20 to-emerald-600/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70" />
                            <div className="relative glass-card p-4 rounded-[32px] overflow-hidden border-white/10 group-hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src={honeypotImage}
                                    alt="Scam Honeypot Interface"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Stats Grid */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {[
                        { label: "AI Engine", value: "Gemini Pro", icon: Bot },
                        { label: "Backend", value: "Edge Functions", icon: Server },
                        { label: "Detection", value: "Automated", icon: ShieldAlert },
                        { label: "Platform", value: "Supabase", icon: Database },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-3xl border-white/5 text-center hover:bg-white/5 transition-colors"
                        >
                            <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 mb-4">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </section>

                {/* Content Layout */}
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        <Section title="The Problem">
                            <p className="text-lg leading-relaxed mb-6">
                                Online scams are evolving rapidly, with fraudsters using sophisticated social engineering to target victims.
                                Identifying these actors often requires prolonged engagement to extract actionable intelligence like payment details (UPI, Bank Accounts) or contact information.
                                Manual engagement is risky, time-consuming, and unscalable.
                            </p>
                            <div className="glass-card p-8 rounded-3xl border-l-4 border-green-500 bg-green-500/5">
                                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-green-400" />
                                    The Objective
                                </h4>
                                <p className="italic text-slate-300">
                                    "To automate the engagement process with scammers using AI personas, safely extracting and logging critical identification data for reporting and analysis."
                                </p>
                            </div>
                        </Section>

                        <Section title="How It Works">
                            <p className="mb-6">
                                The system acts as an interactive honeypot. When a scam message is detected, the AI takes over, posing as a naive victim to prolong the conversation.
                            </p>
                            <div className="space-y-4">
                                <SolutionCard
                                    title="AI Persona Engagement"
                                    desc="Gemini AI generates context-aware responses to keep the scammer engaged without raising suspicion."
                                    icon={Bot}
                                />
                                <SolutionCard
                                    title="Intelligence Extraction"
                                    desc="Edge functions parse conversations in real-time to identify patterns like UPI IDs, phone numbers, and URLs."
                                    icon={Eye}
                                    highlight
                                />
                                <SolutionCard
                                    title="Secure Logging"
                                    desc="All identified data is securely stored in Supabase for further analysis and reporting."
                                    icon={Lock}
                                />
                            </div>
                        </Section>

                        <Section title="Technical Architecture">
                            <p className="mb-8">
                                Built for speed and scalability using serverless edge computing to handle multiple conversations simultaneously.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-white mb-4 text-lg">Core Components</h4>
                                    <ul className="space-y-3">
                                        {['Supabase Edge Functions', 'Google Gemini AI API', 'Real-time Database', 'React Frontend Dashboard'].map((item, i) => (
                                            <li key={i} className="flex items-center space-x-3 text-slate-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="glass-card p-6 rounded-2xl text-sm font-mono text-green-300">
                                    <div className="opacity-50 mb-2">// Extraction Logic</div>
                                    <div>if (message.contains(regex.UPI)) {'{'}</div>
                                    <div className="pl-4">intelligence.log({'{'}</div>
                                    <div className="pl-8">type: "UPI_ID",</div>
                                    <div className="pl-8">value: match[0],</div>
                                    <div className="pl-8">confidence: 0.98</div>
                                    <div className="pl-4">{'}'})</div>
                                    <div>{'}'}</div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Future Roadmap">
                            <p className="mb-6">
                                The goal is to evolve this tool into a community-driven defense system.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <FutureCard icon={Code} title="Public API" desc="Allowing developers to plug the honeypot into their own systems." />
                                <FutureCard icon={Activity} title="Live Reporting" desc="Real-time dashboard of active scam campaigns." />
                                <FutureCard icon={ShieldAlert} title="Auto-Reporting" desc="Automatically report extracted UPIs to authorities." />
                                <FutureCard icon={Globe} title="Multi-Platform" desc="Integration with WhatsApp and Telegram bots." />
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
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Status</div>
                                    <div className="text-green-400 font-bold flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span>Active Beta</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {['Supabase', 'Gemini AI', 'React', 'TypeScript', 'Edge Fns'].map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-green-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-white/10 my-8" />

                            <a
                                href="https://honeypot-omega.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-white text-slate-900 rounded-xl font-bold text-center hover:bg-slate-200 transition-colors"
                            >
                                Launch System
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
            <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
            {title}
        </h2>
        {children}
    </motion.div>
);

const SolutionCard: React.FC<{ title: string; desc: string; icon: any; highlight?: boolean }> = ({ title, desc, icon: Icon, highlight }) => (
    <div className={`p-6 rounded-2xl border transition-all hover:scale-[1.01] ${highlight ? 'bg-green-500/10 border-green-500/30' : 'bg-white/5 border-white/5'}`}>
        <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${highlight ? 'bg-green-500 text-white' : 'bg-white/10 text-slate-300'}`}>
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
        <Icon className="w-6 h-6 text-green-400 mb-3" />
        <h5 className="font-bold text-white mb-1">{title}</h5>
        <p className="text-xs text-slate-500">{desc}</p>
    </div>
);

// Helper Icon for Section
const Target: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
);

export default HoneypotCaseStudy;

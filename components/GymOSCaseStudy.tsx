import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Smartphone, Layout, Database, Server, Code, Target, Globe, Activity, Users, CreditCard, CalendarCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import gymosImage from '../assets/gymos.png';

const GymOSCaseStudy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-emerald-500/30 selection:text-white relative overflow-x-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none -z-20">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-emerald-900/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-teal-900/10 blur-[120px] rounded-full" />
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
                        className="flex flex-col lg:flex-row gap-16 items-center lg:items-start"
                    >
                        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                            <div className="inline-block px-4 py-1.5 rounded-full glass-card border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase">
                                SaaS & Automation
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                                Gym <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">OS</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                Building a Serverless AI-Powered Gym Management Platform. Smart automation, real insights, and zero chaos.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                                <a
                                    href="https://smart-gym-1nm.pages.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold flex items-center space-x-3 transition-all hover:scale-105 shadow-lg shadow-emerald-600/20"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    <span>Visit Live Project</span>
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/20 to-teal-600/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70" />
                            <div className="relative glass-card p-4 rounded-[32px] overflow-hidden border-white/10 group-hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src={gymosImage}
                                    alt="Gym OS Interface"
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Stats Grid */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {[
                        { label: "Core", value: "Supabase", icon: Database },
                        { label: "Brain", value: "AI Gen", icon: Target },
                        { label: "Focus", value: "Automation", icon: Zap },
                        { label: "Platform", value: "SaaS", icon: Globe },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-3xl border-white/5 text-center hover:bg-white/5 transition-colors"
                        >
                            <div className="w-12 h-12 mx-auto bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-4">
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
                        <Section title="1. Introduction">
                            <p className="text-lg leading-relaxed mb-6">
                                Small and mid-sized gyms in India often operate using manual systems — Excel sheets, paper registers, WhatsApp chats, and informal payment tracking. This leads to missed renewals, revenue leakage, poor lead follow-ups, trainer–member coordination issues, and no analytics for decision-making.
                            </p>
                            <p className="text-lg leading-relaxed font-semibold text-slate-200">
                                To solve this, Gym OS was conceptualized as a multi-tenant, AI-powered, serverless SaaS platform designed specifically for gym owners.
                            </p>
                            <p className="text-lg leading-relaxed mt-4">
                                This case study explores the problem, solution architecture, implementation strategy, business model, and future scalability roadmap.
                            </p>
                        </Section>

                        <Section title="2. Problem Statement">
                            <p className="mb-4">A field-level observation of local gyms revealed five critical operational gaps:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-400">
                                <li>Manual member registration and tracking</li>
                                <li>No automated reminders for membership expiry</li>
                                <li>Poor lead-to-conversion workflow</li>
                                <li>Inconsistent trainer performance tracking</li>
                                <li>Lack of centralized revenue analytics</li>
                            </ul>
                            <div className="glass-card p-8 rounded-3xl border-l-4 border-emerald-500 bg-emerald-500/5 mb-6">
                                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-emerald-400" />
                                    The Challenge
                                </h4>
                                <p className="text-slate-300">
                                    To design a system that is affordable for small gyms, requires minimal technical knowledge, scales across multiple gym branches, and minimizes backend infrastructure complexity.
                                </p>
                            </div>
                        </Section>

                        <Section title="3. Proposed Solution: Gym OS">
                            <p className="mb-6">
                                Gym OS is a cloud-based, multi-tenant Gym Management System built using a serverless architecture. It functions as the operational backbone of a gym by providing:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <SolutionCard title="Lifecycle Management" desc="Full tracking of members." icon={Users} />
                                <SolutionCard title="Attendance Automation" desc="QR-based check-ins and logs." icon={CalendarCheck} />
                                <SolutionCard title="Payment Tracking" desc="Digital logging and revenue dashboard." icon={CreditCard} />
                                <SolutionCard title="AI Workflows" desc="Automated communication." icon={Activity} />
                            </div>
                            <p className="mt-6 italic font-medium text-slate-300 border-l-2 pl-4 border-slate-600">
                                Unlike traditional gym software, Gym OS integrates automation and AI at the core of operations.
                            </p>
                        </Section>

                        <Section title="4. System Architecture">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">4.1 Technology Stack</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="glass-card p-5 rounded-xl border-white/5">
                                            <h4 className="text-emerald-400 font-semibold flex items-center gap-2 mb-3"><Layout className="w-4 h-4" /> Frontend</h4>
                                            <ul className="space-y-2 text-sm text-slate-400">
                                                <li>• React (TypeScript)</li>
                                                <li>• Role-based routing</li>
                                                <li>• Dashboard-based UI</li>
                                                <li>• Hosted on Vercel</li>
                                            </ul>
                                        </div>
                                        <div className="glass-card p-5 rounded-xl border-white/5">
                                            <h4 className="text-emerald-400 font-semibold flex items-center gap-2 mb-3"><Database className="w-4 h-4" /> Backend & Infra</h4>
                                            <ul className="space-y-2 text-sm text-slate-400">
                                                <li>• Supabase Cloud (PostgreSQL)</li>
                                                <li>• No Node.js / Django server</li>
                                                <li>• Row-Level Security (RLS)</li>
                                                <li>• Edge Functions & Webhooks</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-4 italic">This architecture eliminates the need for custom backend servers and reduces operational complexity.</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">4.2 Multi-Tenant Model</h3>
                                    <p className="text-slate-400 mb-4">Gym OS uses a shared database with row-level isolation. Each gym is identified using a <code className="text-emerald-300 bg-emerald-900/30 px-2 py-0.5 rounded">gym_id</code> across all core tables (Members, Trainers, Plans, Payments, Attendance).</p>
                                    <div className="glass-card p-5 rounded-xl border-l-2 border-l-teal-500">
                                        <h4 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Row-Level Security (RLS) ensures:</h4>
                                        <ul className="text-slate-400 text-sm space-y-2">
                                            <li><span className="text-teal-400 mr-2">✓</span>Trainers can only view assigned members</li>
                                            <li><span className="text-teal-400 mr-2">✓</span>Members can only view their own data</li>
                                            <li><span className="text-teal-400 mr-2">✓</span>Gym admins can view their gym's data only</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="5. AI Automation Layer">
                            <p className="mb-6">
                                AI capabilities transform Gym OS from a mere management tool into a revenue optimization system.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="glass-card p-4 rounded-xl">
                                    <h5 className="font-bold text-white">Auto WhatsApp</h5>
                                    <p className="text-sm text-slate-400">Follow-ups and communication</p>
                                </div>
                                <div className="glass-card p-4 rounded-xl">
                                    <h5 className="font-bold text-white">Expiry Reminders</h5>
                                    <p className="text-sm text-slate-400">Generation of alert messages</p>
                                </div>
                                <div className="glass-card p-4 rounded-xl">
                                    <h5 className="font-bold text-white">Lead Nurturing</h5>
                                    <p className="text-sm text-slate-400">Automated nurturing sequences</p>
                                </div>
                                <div className="glass-card p-4 rounded-xl">
                                    <h5 className="font-bold text-white">Sales Scripts</h5>
                                    <p className="text-sm text-slate-400">Drafting tailored sales pitches</p>
                                </div>
                            </div>
                        </Section>

                        <Section title="6. Competitive Advantage">
                            <p className="mb-6">
                                Rather than selling "software," Gym OS sells retention improvement, operational efficiency, and revenue growth.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['AI-First Approach', 'Serverless Cost Efficiency', 'Multi-Tenant Scalability', 'Automation-Driven Retention'].map((item) => (
                                    <div key={item} className="px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-300 text-sm font-medium">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section title="7. Conclusion & Future Scope">
                            <p className="mb-6">
                                Gym OS demonstrates how a modern SaaS product can be built using a serverless architecture without traditional backend frameworks. It represents a scalable, real-world application of multi-tenant database design, role-based security, and automation-first system thinking.
                            </p>
                            <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 p-6 rounded-2xl border border-emerald-500/20">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2"><Globe className="w-5 h-5 text-emerald-400" /> Long-Term Vision</h4>
                                <p className="text-slate-300">
                                    To become a Fitness Infrastructure Platform, similar to Shopify but for gyms. Expansion potential includes face recognition, corporate wellness, fitness analytics, AI trainers, and franchise ecosystem management.
                                </p>
                            </div>
                        </Section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="glass-card p-8 rounded-[32px] border-white/10 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Category</div>
                                    <div className="text-slate-200">SaaS Platform</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {['React', 'TypeScript', 'Supabase', 'Edge Functions', 'Tailwind', 'AI API'].map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-emerald-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Business Model</div>
                                    <div className="text-slate-200 text-sm">Subscription-Based Tiers (Basic, Pro, Elite)</div>
                                </div>
                            </div>

                            <div className="h-px bg-white/10 my-8" />

                            <a
                                href="https://smart-gym-1nm.pages.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-white text-slate-900 rounded-xl font-bold text-center hover:bg-slate-200 transition-colors"
                            >
                                Visit Live MVP
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Credit */}
                <div className="mt-24 pt-12 border-t border-white/5 text-center text-slate-600 text-sm">
                    <p>© 2026 Aditya Dhiman. All Rights Reserved.</p>
                </div>
            </div >
        </div >
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
            <div className="hidden md:block w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
            {title}
        </h2>
        {children}
    </motion.div>
);

const SolutionCard: React.FC<{ title: string; desc: string; icon: any; highlight?: boolean }> = ({ title, desc, icon: Icon, highlight }) => (
    <div className={`p-6 rounded-2xl border transition-all hover:scale-[1.01] ${highlight ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5 border-white/5'}`}>
        <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl ${highlight ? 'bg-emerald-500 text-white' : 'bg-white/10 text-slate-300'}`}>
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
                <p className="text-slate-400 text-sm">{desc}</p>
            </div>
        </div>
    </div>
);

export default GymOSCaseStudy;

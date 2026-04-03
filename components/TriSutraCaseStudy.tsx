import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ShoppingCart, Package, FileText, Layout, Database, Smartphone, Target, Globe, Bell, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import trisutraImage from '../assets/trisutra.png';

const TriSutraCaseStudy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#030712] text-slate-300 selection:bg-amber-500/30 selection:text-white relative overflow-x-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none -z-20">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-amber-900/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-orange-900/10 blur-[120px] rounded-full" />
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
                            <div className="inline-block px-4 py-1.5 rounded-full glass-card border-amber-500/20 text-amber-400 text-xs font-bold tracking-widest uppercase">
                                E-Commerce & Logistics
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                                TriSutra <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Commerce</span>
                            </h1>
                            <p className="text-xl text-slate-400 leading-relaxed">
                                A complete end-to-end business backbone for an Ayurveda startup, automating everything from order placement to delivery.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                                <a
                                    href="https://trisutra.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-bold flex items-center space-x-3 transition-all hover:scale-105 shadow-lg shadow-amber-600/20"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                    <span>Visit Live Store</span>
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600/20 to-orange-600/20 rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70" />
                            <div className="relative glass-card p-4 rounded-[32px] overflow-hidden border-white/10 group-hover:scale-[1.02] transition-transform duration-700">
                                <img
                                    src={trisutraImage}
                                    alt="TriSutra Commerce Interface"
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
                        { label: "Auth", value: "Google OAuth", icon: ShieldCheck },
                        { label: "Logic", value: "Order Pipeline", icon: Target },
                        { label: "Tracking", value: "Real-time", icon: Smartphone },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-3xl border-white/5 text-center hover:bg-white/5 transition-colors"
                        >
                            <div className="w-12 h-12 mx-auto bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-400 mb-4">
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
                        <Section title="1. Introduction" accentColor="amber">
                            <p className="text-lg leading-relaxed mb-6">
                                TriSutra Commerce is a complete business-ready platform designed to automate and streamline the order management process for an Ayurveda-based startup. The system handles the entire lifecycle of an order — from placement to delivery — while ensuring smooth coordination between customers and administrators.
                            </p>
                            <p className="text-lg leading-relaxed font-semibold text-slate-200">
                                Targeted at modernizing traditional wellness businesses, the platform integrates luxury aesthetics with high-performance logistics.
                            </p>
                        </Section>

                        <Section title="2. The Challenge" accentColor="amber">
                            <div className="glass-card p-8 rounded-3xl border-l-4 border-amber-500 bg-amber-500/5 mb-6">
                                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-amber-400" />
                                    Business Goal
                                </h4>
                                <p className="text-slate-300">
                                    To create a digital backbone that reduces manual effort in order handling, provides real-time transparency to customers, and scales efficiently for a growing Ayurveda startup.
                                </p>
                            </div>
                            <p className="mb-4 text-slate-400">Key operational hurdles addressed:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-400">
                                <li>Manual order tracking and status updates via WhatsApp/Phone.</li>
                                <li>Fragmented invoicing systems for customers and delivery staff.</li>
                                <li>Lack of unified dashboard for multi-stage fulfillment tracking.</li>
                                <li>Complexity in managing both Prepaid and Cash on Delivery payments.</li>
                            </ul>
                        </Section>

                        <Section title="3. Solution Architecture" accentColor="amber">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <SolutionCard title="Order Lifecycle" desc="Automated status transitions: New → Processing → Shipped → Completed." icon={Package} highlight accentColor="amber" />
                                <SolutionCard title="Dual Invoicing" desc="Automated generation for both Customer and Delivery personnel." icon={FileText} accentColor="amber" />
                                <SolutionCard title="Real-time Updates" desc="Instant notifications and live tracking on the customer dashboard." icon={Bell} accentColor="amber" />
                                <SolutionCard title="Admin Control" desc="Centralized dashboard to manage products, orders, and fulfillment." icon={Layout} accentColor="amber" />
                            </div>
                            <p className="mt-8 text-lg italic text-slate-400 border-l-2 pl-4 border-amber-500/30">
                                "Designed and developed independently as a complete end-to-end business system."
                            </p>
                        </Section>

                        <Section title="4. Technical Implementation" accentColor="amber">
                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="glass-card p-6 rounded-2xl border-white/5">
                                        <h4 className="text-amber-400 font-semibold flex items-center gap-2 mb-4"><Layout className="w-4 h-4" /> Frontend Stack</h4>
                                        <ul className="space-y-2 text-sm text-slate-400">
                                            <li>• React with TypeScript for type safety</li>
                                            <li>• Responsive Admin & Customer Dashboards</li>
                                            <li>• Real-time notification hooks</li>
                                            <li>• Framer Motion for premium UI feel</li>
                                        </ul>
                                    </div>
                                    <div className="glass-card p-6 rounded-2xl border-white/5">
                                        <h4 className="text-amber-400 font-semibold flex items-center gap-2 mb-4"><Database className="w-4 h-4" /> Backend & Data</h4>
                                        <ul className="space-y-2 text-sm text-slate-400">
                                            <li>• Supabase Cloud (PostgreSQL)</li>
                                            <li>• Row-Level Security for multi-user access</li>
                                            <li>• Edge Functions for automated logic</li>
                                            <li>• Google OAuth & Email/Password Auth</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="5. Impact & Future" accentColor="amber">
                            <div className="bg-gradient-to-r from-amber-900/40 to-orange-900/40 p-10 rounded-[32px] border border-amber-500/20">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
                                        <Globe className="w-10 h-10 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-2">Digital Transformation</h4>
                                        <p className="text-slate-300 leading-relaxed">
                                            The system automated the entire order handling workflow, reducing manual effort and improving operational efficiency. It enhanced customer experience with real-time order updates and clear communication, enabling the startup to scale effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="glass-card p-8 rounded-[32px] border-white/10 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">Project Metadata</h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Category</div>
                                    <div className="text-slate-200">Business OS / E-Commerce</div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind', 'Real-time Webhooks'].map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-amber-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Features</div>
                                    <div className="text-sm text-slate-400 space-y-1">
                                        <div>• Admin Dashboard</div>
                                        <div>• Real-time Tracking</div>
                                        <div>• Dual PDF Invoicing</div>
                                        <div>• Auto Notifications</div>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-white/10 my-8" />

                            <a
                                href="https://trisutra.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 bg-amber-600 text-white rounded-xl font-bold text-center hover:bg-amber-700 transition-all hover:scale-[1.02]"
                            >
                                Visit Live MVP
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Credit */}
                <div className="mt-24 pt-12 border-t border-white/5 text-center text-slate-600 text-sm">
                    <p>© 2026 Aditya Dhiman. End-to-End Business Solutions.</p>
                </div>
            </div >
        </div >
    );
};

// Submodules
const Section: React.FC<{ title: string; children: React.ReactNode; accentColor?: string }> = ({ title, children, accentColor = 'blue' }) => {
    const colorClass = accentColor === 'amber' ? 'from-amber-500 to-orange-500' : 'from-blue-500 to-indigo-500';
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className={`hidden md:block w-2 h-8 bg-gradient-to-b ${colorClass} rounded-full`} />
                {title}
            </h2>
            {children}
        </motion.div>
    );
};

const SolutionCard: React.FC<{ title: string; desc: string; icon: any; highlight?: boolean; accentColor?: string }> = ({ title, desc, icon: Icon, highlight, accentColor = 'blue' }) => {
    const activeColor = accentColor === 'amber' ? 'bg-amber-500' : 'bg-blue-500';
    const borderColor = accentColor === 'amber' ? 'border-amber-500/30' : 'border-blue-500/30';
    const bgLightColor = accentColor === 'amber' ? 'bg-amber-500/10' : 'bg-blue-500/10';
    
    return (
        <div className={`p-6 rounded-2xl border transition-all hover:scale-[1.01] ${highlight ? `${bgLightColor} ${borderColor}` : 'bg-white/5 border-white/5'}`}>
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${highlight ? `${activeColor} text-white` : 'bg-white/10 text-slate-300'}`}>
                    <Icon className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
                    <p className="text-slate-400 text-sm">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default TriSutraCaseStudy;

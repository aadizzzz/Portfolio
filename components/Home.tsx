
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutGrid from './AboutGrid';
import ProjectSection from './ProjectSection';
import SkillsBento from './SkillsBento';
import Footer from './Footer';
import GeminiChat from './GeminiChat';
import BackgroundIcons from './BackgroundIcons';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#030712] selection:bg-blue-500/30 selection:text-white relative">
            <BackgroundIcons />

            {/* Primary Glow Backgrounds */}
            <div className="fixed inset-0 pointer-events-none -z-20">
                <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full" />
                <div className="absolute top-[60%] -right-[10%] w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full" />
            </div>

            <Navbar />

            <main className="relative z-10">
                <Hero />
                <AboutGrid />
                <ProjectSection />
                <SkillsBento />
            </main>

            <Footer />

            <GeminiChat />
        </div>
    );
};

export default Home;

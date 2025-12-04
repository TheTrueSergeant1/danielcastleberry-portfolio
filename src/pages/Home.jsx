import React from 'react';
import { FiShield, FiCpu, FiGlobe, FiDatabase } from 'react-icons/fi';
// Reuse the BentoCard from the previous prompt here
import BentoCard from '../components/BentoCard'; 

const Home = () => {
  return (
    <div className="pt-32 px-6 md:px-24 max-w-7xl mx-auto">
      
      {/* --- HERO --- */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-32">
        <div className="flex-1">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            Secure. <br />
            <span className="text-neutral-600">Analyze.</span> <br />
            Defend.
          </h1>
          <p className="text-neutral-400 text-lg max-w-lg mb-8">
            I am Daniel Castleberry. Cybersecurity Student, Homelab Enthusiast, and Aspiring Analyst.
          </p>
          <div className="flex gap-4">
            <a href="../public/resume.pdf" target="_blank" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-cyber-accent transition-colors">Download CV</a>
            <a href="/contact" className="border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="relative">
          {/* Headshot Glow */}
          <div className="absolute inset-0 bg-cyber-accent/20 blur-[100px] rounded-full"></div>
          <img src="../src/assets/headshot.png" alt="Daniel" className="relative z-10 w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyber-border" />
        </div>
      </section>

      {/* --- SKILLS BENTO GRID --- */}
      <h2 className="text-cyber-accent tracking-widest text-sm font-bold uppercase mb-8">Expertise & Stack</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px] mb-24">
        <BentoCard 
          colSpan={2} rowSpan={2} 
          title="Security Operations" 
          desc="Experience with InsightIDR, ServiceNow, ZScaler, and Mimecast."
          icon={FiShield} 
        />
        <BentoCard 
          title="Networking" 
          desc="CCNA knowledge, Packet Analysis, Wireshark."
          icon={FiGlobe} 
        />
        <BentoCard 
          title="Forensics" 
          desc="Malware analysis in sandboxed environments."
          icon={FiDatabase} 
        />
        <BentoCard 
          colSpan={2}
          title="Full Stack Dev" 
          desc="Building secure tools with React, Node.js, and MySQL."
          icon={FiCpu} 
        />
      </div>
    </div>
  );
};

export default Home;
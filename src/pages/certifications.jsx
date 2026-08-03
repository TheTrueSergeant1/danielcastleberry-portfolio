import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiX } from 'react-icons/fi';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- ORIGINAL CERT CARD COMPONENT ---
// Kept exactly the same, but acts as the detail view inside the modal.
const CertCard = ({ title, issuer, date, status, desc, tags }) => {
  const isAchieved = status === 'Achieved';
  
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-cyber-border bg-[#050505] p-8 hover:border-cyber-accent/50 transition-all duration-500 w-full shadow-2xl shadow-cyber-accent/10">
      <div className={`absolute -right-10 -top-10 h-40 w-40 blur-[50px] transition-all ${isAchieved ? 'bg-cyber-accent/10 group-hover:bg-cyber-accent/20' : 'bg-white/5 group-hover:bg-white/10'}`} />
      
      <div className="flex justify-between items-start mb-2 relative z-10">
        <span className={`text-xs font-mono ${isAchieved ? 'text-cyber-accent' : 'text-neutral-500'}`}>
          {date}
        </span>
        <span className={`text-xs px-2 py-1 rounded-full border ${isAchieved ? 'border-cyber-accent/30 text-cyber-accent bg-cyber-accent/10' : 'border-white/10 text-neutral-400 bg-white/5'}`}>
          {status}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold mb-1 text-white relative z-10">{title}</h3>
      <p className="text-neutral-500 text-sm mb-4 relative z-10">{issuer}</p>
      <p className="text-neutral-400 mb-6 relative z-10">{desc}</p>
      
      {tags && (
        <div className="flex flex-wrap gap-2 relative z-10">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-300 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// --- DATA STRUCTURE ---
const certsData = [
  {
    id: 'start',
    isNodeOnly: true, // Just a visual start point matching your sketch
    pos: { x: 80, y: 5 }
  },
  {
    id: 'sec+',
    shortTitle: 'Security +',
    title: 'CompTIA Security+ (SY0-701)',
    issuer: 'CompTIA',
    date: 'July 28, 2026',
    status: 'Achieved',
    desc: 'Validates foundational knowledge of cybersecurity principles, threat analysis, risk mitigation, and secure network architecture.',
    tags: ['Network Security', 'Cryptography', 'Risk Management'],
    pos: { x: 20, y: 35 }
  },
  {
    id: 'ccna',
    shortTitle: 'CCNA',
    title: 'Cisco Certified Network Associate',
    issuer: 'Cisco (CCNA)',
    date: 'Current',
    status: 'In Progress',
    desc: 'Deepening expertise in network infrastructure, routing protocols (OSPF, EIGRP), switching, and IPv4/IPv6 addressing.',
    tags: ['Routing', 'Switching', 'Network Infrastructure'],
    pos: { x: 80, y: 65 }
  },
  {
    id: 'ceh',
    shortTitle: 'CEH',
    title: 'Certified Ethical Hacker',
    issuer: 'EC-Council (CEH)',
    date: 'Upcoming',
    status: 'Planned',
    desc: 'Building practical skills in vulnerability assessment, penetration testing methodologies, and proactive cyber defense.',
    tags: ['Penetration Testing', 'Vulnerability Assessment', 'Ethical Hacking'],
    pos: { x: 20, y: 95 }
  }
];

// --- MAIN COMPONENT ---
const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    // Set initial state (line hidden)
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Draw the line as the user scrolls
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 43%", // Starts animating when the top of the container hits 60% of the viewport
        end: "bottom 80%", // Ends when the bottom hits 80%
        scrub: 1, // Smooth scrubbing effect tying animation directly to scrollbar
      }
    });
  }, { scope: containerRef });

  return (
    <div className="pt-32 px-6 md:px-24 max-w-7xl mx-auto pb-32">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4">Deployment Roadmap</h1>
        <p className="text-neutral-400">Tracking skill validation and defensive architecture certifications.</p>
      </div>
      
      {/* --- ROADMAP CONTAINER --- */}
      <div id="roadmap-container" ref={containerRef} className="relative w-full max-w-3xl mx-auto h-[600px] md:h-[800px] my-12">
        
        {/* SVG S-Curve Line */}
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* 
            M = Move to start (80, 5)
            C = Cubic Bezier curves to map the "S" shape down the container
          */}
          <path 
            ref={pathRef}
            d="M 80 5 C 80 20, 20 20, 20 35 C 20 50, 80 50, 80 65 C 80 80, 20 80, 20 95" 
            stroke="#00e5ff" // Use your cyber-accent hex here if different
            strokeWidth="0.5" 
            fill="none" 
            className="drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
          />
        </svg>

        {/* Nodes / Bubbles positioned along the curve */}
        {certsData.map((cert) => (
          <div
            key={cert.id}
            className="absolute z-10 transition-transform duration-300 hover:scale-110"
            style={{
              left: `${cert.pos.x}%`,
              top: `${cert.pos.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {cert.isNodeOnly ? (
              // The tiny start node from your sketch
              <div className="w-4 h-4 rounded-full bg-cyber-accent shadow-[0_0_15px_rgba(0,229,255,1)]" />
            ) : (
              // The interactive cert bubbles
              <button
                onClick={() => setSelectedCert(cert)}
                className="w-24 h-12 md:w-32 md:h-14 rounded-full border border-cyber-accent bg-black/80 backdrop-blur-md flex items-center justify-center hover:bg-cyber-accent hover:text-black transition-all shadow-[0_0_15px_rgba(0,229,255,0.2)] text-white group"
              >
                <span className="font-bold text-sm tracking-widest group-hover:text-black transition-colors">
                  {cert.shortTitle}
                </span>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* --- MODAL OVERLAY --- */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => setSelectedCert(null)} // Close when clicking outside
        >
          <div 
            className="relative w-full max-w-xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside card from closing modal
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute -top-4 -right-4 p-2 bg-black border border-white/10 rounded-full text-neutral-400 hover:text-cyber-accent hover:border-cyber-accent transition-colors z-50"
            >
              <FiX size={20} />
            </button>
            
            <CertCard {...selectedCert} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;

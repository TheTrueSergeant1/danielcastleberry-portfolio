import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FiTerminal } from 'react-icons/fi';

const Navbar = ({ toggleTerminal }) => {
  const navRef = useRef(null);

  useGSAP(() => {
    // Premium Scroll Effect: Shrink nav on scroll
    const showAnim = gsap.from(navRef.current, { 
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      }
    });
  });

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4">
      <div className="flex items-center gap-8 rounded-full border border-cyber-border bg-cyber-card/80 px-6 py-3 backdrop-blur-xl transition-all hover:border-cyber-accent/50 hover:shadow-cyber-glow">
        <Link to="/" className="text-xl font-bold text-cyber-accent">DC</Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/experience" className="hover:text-white transition-colors">Experience</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
        </div>

        <button 
          onClick={toggleTerminal}
          className="flex items-center gap-2 rounded-full bg-cyber-accent/10 px-4 py-1.5 text-xs font-bold text-cyber-accent hover:bg-cyber-accent hover:text-black transition-all"
        >
          <FiTerminal />
          <span>TERMINAL</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
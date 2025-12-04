import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FiTerminal, FiX, FiShield, FiCpu, FiGlobe, FiDatabase, 
  FiServer, FiLayout, FiMessageSquare, FiMail, FiLinkedin, 
  FiGithub, FiSend, FiClock, FiCheckCircle, FiTarget, FiArrowLeft, 
  FiCode, FiLayers, FiLock, FiMenu, FiKey, FiFileText, FiList,
  FiZap, FiBox, FiCommand
} from 'react-icons/fi';

// --- INITIALIZATION ---
gsap.registerPlugin(ScrollTrigger);

// --- ANIMATION CONSTANTS ---
const ANIM_EASE = "power4.out"; 
const ANIM_DURATION = 1.0;
const STAGGER_DELAY = 0.08;

// --- 1. GLOBAL UI COMPONENTS ---

// Wrapper that handles page entry animations safely
const PageWrapper = ({ children }) => {
  const comp = useRef(null);
  
  useGSAP(() => {
    // Use fromTo to prevent "Black Screen" stuck-at-zero bugs in Strict Mode
    gsap.fromTo(".animate-entry", 
      { y: 40, opacity: 0, filter: "blur(10px)", scale: 0.98 },
      { 
        y: 0, 
        opacity: 1, 
        filter: "blur(0px)", 
        scale: 1, 
        duration: ANIM_DURATION, 
        stagger: STAGGER_DELAY, 
        ease: ANIM_EASE 
      }
    );
    window.scrollTo(0, 0);
  }, { scope: comp });

  return <div ref={comp} className="w-full">{children}</div>;
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 animate-entry">
    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight">
      {title}
    </h1>
    {subtitle && (
      <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed border-l-2 border-cyber-accent/50 pl-6">
        {subtitle}
      </p>
    )}
  </div>
);

const BentoCard = ({ title, children, className = "", onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        animate-entry bento-card group relative overflow-hidden rounded-[2.5rem] 
        border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-2xl p-8 
        transition-all duration-500 ease-out
        hover:-translate-y-2 hover:scale-[1.01] hover:border-cyber-accent/40 hover:shadow-2xl hover:shadow-cyber-accent/10
        ${className}
      `}
    >
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyber-accent/5 blur-[120px] transition-all duration-700 group-hover:bg-cyber-accent/15 group-hover:blur-[100px]" />
      <div className="relative z-10 flex flex-col h-full">
        {title && (
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyber-accent transition-colors duration-300">
            {title}
          </h3>
        )}
        <div className="text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300 flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

const Badge = ({ children, type = 'neutral' }) => {
  const styles = {
    neutral: 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10',
    accent: 'bg-cyber-accent/10 text-cyber-accent border-cyber-accent/20 hover:bg-cyber-accent/20',
  };
  return (
    <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${styles[type]} transition-all duration-300 backdrop-blur-md`}>
      {children}
    </span>
  );
};

// --- 2. LAYOUT COMPONENTS ---

const BackgroundMesh = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-cyber-dark">
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/10 blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[150px] animate-pulse-slow delay-1000" />
      <div className="absolute top-[30%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-cyber-accent/5 blur-[120px] animate-float" />
    </div>
  );
};

// --- RESPONSIVE NAVBAR ---
const Navbar = ({ toggleTerminal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const links = ['Home', 'About', 'Experience', 'Skills', 'Homelab', 'Projects'];

  useGSAP(() => {
    // Force start state to avoid glitches
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  useGSAP(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      tl.to(menuRef.current, { y: "0%", duration: 0.6, ease: "power4.out" })
        .fromTo(".mobile-link", 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "back.out(1.2)" }, "-=0.2"
        );
    } else {
      document.body.style.overflow = '';
      gsap.to(menuRef.current, { y: "-100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isOpen]);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
        <div className="flex items-center justify-between w-full max-w-5xl rounded-full border border-white/10 bg-black/60 px-6 py-3 backdrop-blur-2xl shadow-xl shadow-black/20">
          <Link to="/" className="text-xl font-black text-cyber-accent tracking-tighter z-50" onClick={() => setIsOpen(false)}>DC</Link>
          
          <div className="hidden md:flex items-center gap-1">
            {links.map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="px-4 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 z-50">
            <button onClick={toggleTerminal} className="flex items-center gap-2 rounded-full bg-cyber-accent/10 border border-cyber-accent/20 px-4 py-2 text-xs font-bold text-cyber-accent hover:bg-cyber-accent hover:text-black transition-all">
              <FiTerminal className="text-base" />
              <span className="hidden md:inline">TERMINAL</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all">
              {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div ref={menuRef} className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-3xl flex flex-col items-center justify-center translate-y-[-100%]">
        <div className="flex flex-col items-center gap-6">
          {links.map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="mobile-link text-4xl font-bold text-white tracking-tight hover:text-cyber-accent transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="mobile-link mt-8 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform">
            Contact Me
          </Link>
        </div>
      </div>
    </>
  );
};

// --- TERMINAL COMPONENT (WITH MOCK FS) ---
const Terminal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const [output, setOutput] = useState([
    { type: 'info', content: 'Initializing DC-OS v2.0...' },
    { type: 'success', content: 'System Verified. Connection Secure.' },
    { type: 'info', content: 'Type "help" to see available commands.' }
  ]);
  const [currentDir, setCurrentDir] = useState(['~']);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  // File System Logic
  const fileSystem = {
    '~': {
      type: 'dir',
      children: {
        'about.txt': { type: 'file', content: 'Daniel Castleberry.\nCybersecurity Student. Blue Team Aspirant.' },
        'resume.pdf': { type: 'link', href: '/resume.pdf' },
        'projects': {
          type: 'dir',
          children: {
            'localchat': { type: 'link', href: '/projects/localchat' },
            'rentals': { type: 'link', href: '/projects/rentals' },
            'homelab': { type: 'link', href: '/homelab' }
          }
        },
        'socials': {
          type: 'dir',
          children: {
            'github': { type: 'link', href: 'https://github.com/TheTrueSergeant1' },
            'linkedin': { type: 'link', href: 'https://www.linkedin.com/in/daniel-castleberry-022395281/' }
          }
        }
      }
    }
  };

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(containerRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.2)" });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 50);
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output, isOpen]);

  if (!isOpen) return null;

  const getDir = (path = currentDir) => {
    let current = fileSystem['~'];
    for (let i = 1; i < path.length; i++) {
      if (current.children?.[path[i]]) current = current.children[path[i]];
      else return null;
    }
    return current;
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmed = input.trim();
      if (!trimmed) return;
      const newOutput = [...output, { type: 'command', content: `user@dc:${currentDir.join('/')}$ ${trimmed}` }];
      const [cmd, ...args] = trimmed.split(' ');
      const arg = args[0];
      const print = (text, type = 'text') => newOutput.push({ type, content: text });

      switch(cmd.toLowerCase()) {
        case 'help': print('Commands: ls, cd, cat, open, whoami, clear, exit', 'info'); break;
        case 'ls': 
          const dir = getDir();
          if(dir && dir.children) print(Object.keys(dir.children).map(k => dir.children[k].type==='dir'?k+'/':k).join('  '), 'success');
          else print('Empty directory', 'text');
          break;
        case 'cd':
          if(!arg || arg === '~') { setCurrentDir(['~']); navigate('/'); }
          else if(arg === '..') { if(currentDir.length > 1) setCurrentDir(prev => prev.slice(0, -1)); }
          else {
            const d = getDir();
            if(d.children?.[arg]?.type === 'dir') setCurrentDir([...currentDir, arg]);
            else print(`cd: ${arg}: Not a directory`, 'error');
          }
          break;
        case 'cat':
          if(!arg) print('Usage: cat [file]', 'warning');
          else {
            const d = getDir();
            if(d.children?.[arg]?.type === 'file') print(d.children[arg].content);
            else print(`cat: ${arg}: No such file`, 'error');
          }
          break;
        case 'open':
          const dObj = getDir();
          if(dObj.children?.[arg]?.type === 'link') {
            const href = dObj.children[arg].href;
            if(href.startsWith('http')) window.open(href, '_blank');
            else navigate(href);
            print(`Opening ${arg}...`, 'success');
          } else print(`Cannot open ${arg}`, 'error');
          break;
        case 'clear': setOutput([]); setInput(''); return;
        case 'exit': onClose(); return;
        case 'whoami': print('guest@dc-portfolio', 'success'); break;
        default: print(`Command not found: ${cmd}`, 'error');
      }
      setHistory([...history, input]);
      setHistoryPointer(-1);
      setOutput(newOutput);
      setInput('');
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if(history.length > 0) {
        const next = historyPointer + 1;
        if(next < history.length) { setHistoryPointer(next); setInput(history[history.length - 1 - next]); }
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if(historyPointer > 0) {
        const next = historyPointer - 1;
        setHistoryPointer(next);
        setInput(history[history.length - 1 - next]);
      } else { setHistoryPointer(-1); setInput(''); }
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
      <div ref={containerRef} className="w-full max-w-4xl h-[60vh] rounded-2xl border border-cyber-border bg-[#0d1117]/95 shadow-2xl overflow-hidden flex flex-col">
        <div className="flex justify-between bg-white/5 px-6 py-3 border-b border-cyber-border">
          <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"/><div className="w-3 h-3 rounded-full bg-yellow-500"/><div className="w-3 h-3 rounded-full bg-green-500"/></div>
          <button onClick={onClose} className="text-neutral-500 hover:text-white"><FiX /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 font-mono text-sm space-y-2 text-neutral-300" onClick={() => inputRef.current?.focus()}>
          {output.map((line, i) => (
            <div key={i} className={line.type==='command' ? 'text-white font-bold mt-4' : line.type==='success' ? 'text-green-400' : line.type==='error' ? 'text-red-400' : ''}>{line.content}</div>
          ))}
          <div className="flex gap-2 text-green-400 mt-2">
            <span>user@dc:{currentDir.join('/')}$</span>
            <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleCommand} className="flex-1 bg-transparent outline-none text-white font-bold" autoFocus autoComplete="off" />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

// --- 3. PROJECT LAYOUT ---
const ProjectLayout = ({ title, date, children }) => (
  <PageWrapper>
    <div className="pt-32 px-6 md:px-24 max-w-7xl mx-auto pb-32">
      <Link to="/projects" className="inline-flex items-center gap-2 text-neutral-400 hover:text-cyber-accent mb-12 transition-colors duration-300 group">
        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
      </Link>
      <div className="border-b border-white/10 pb-12 mb-16 animate-entry">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">{title}</h1>
          <Badge type="accent">{date}</Badge>
        </div>
      </div>
      <div className="space-y-12">{children}</div>
    </div>
  </PageWrapper>
);

// --- 4. PAGE CONTENTS ---

const Home = () => (
  <PageWrapper>
    <div className="pt-40 px-6 md:px-24 max-w-8xl mx-auto min-h-screen flex flex-col justify-center">
      <section className="flex flex-col md:flex-row items-center gap-16 mb-40">
        <div className="flex-1 space-y-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-[0.9]">
            <span className="animate-entry block">Secure.</span>
            <span className="animate-entry block text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700">Analyze.</span>
            <span className="animate-entry block">Defend.</span>
          </h1>
          <p className="animate-entry text-xl md:text-2xl text-neutral-400 max-w-lg leading-relaxed">
            I am Daniel Castleberry. <span className="text-white">Cybersecurity Student</span> & a learning <span className="text-white">Full Stack Developer</span> building new skills for a career in security.
          </p>
          <div className="animate-entry flex gap-4 pt-4">
            <a href="/resume.pdf" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 hover:bg-cyber-accent transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">Download CV</a>
            <Link to="/contact" className="px-10 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 hover:border-white transition-all duration-300 text-white">Contact Me</Link>
          </div>
        </div>
        <div className="relative animate-entry">
          <div className="absolute inset-0 bg-cyber-accent/30 blur-[120px] rounded-full animate-pulse-slow" />
          <img src="/headshot.png" alt="Profile" className="relative z-10 w-72 h-72 md:w-[500px] md:h-[500px] object-cover rounded-[3rem] border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out" />
        </div>
      </section>


    </div>
  </PageWrapper>
);

const Skills = () => (
  <PageWrapper>
    <div className="pt-32 px-6 md:px-24 max-w-7xl mx-auto pb-24">
      <SectionHeader title="Technical Skills" subtitle="Comprehensive overview of competencies." />
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        <BentoCard title="Security Tools" className="break-inside-avoid">
          <div className="mb-6 text-4xl text-cyber-accent"><FiShield /></div>
          <div className="flex flex-wrap gap-2">{['Insight IDR', 'ServiceNow', 'ZScaler', 'Trend Micro', 'Splunk', 'Wireshark', 'Metasploit', 'Nmap'].map(s => <Badge key={s}>{s}</Badge>)}</div>
        </BentoCard>
        <BentoCard title="Operating Systems" className="break-inside-avoid">
          <div className="mb-6 text-4xl text-white"><FiServer /></div>
          <div className="flex flex-wrap gap-2">{['Linux (Kali/Ubuntu)', 'Windows Server', 'Active Directory', 'VMWare', 'Docker'].map(s => <Badge key={s}>{s}</Badge>)}</div>
        </BentoCard>
        <BentoCard title="Development" className="break-inside-avoid">
          <div className="mb-6 text-4xl text-white"><FiCode /></div>
          <div className="flex flex-wrap gap-2">{['Python', 'C++', 'Java', 'JavaScript', 'React', 'Node.js', 'MySQL', 'Tailwind'].map(s => <Badge key={s}>{s}</Badge>)}</div>
        </BentoCard>
        <BentoCard title="Concepts" className="break-inside-avoid">
          <div className="mb-6 text-4xl text-white"><FiLock /></div>
          <div className="flex flex-wrap gap-2">{['Threat Detection', 'Digital Forensics', 'Cryptography', 'RBAC', 'MITRE ATT&CK', 'SQLi Mitigation'].map(s => <Badge key={s}>{s}</Badge>)}</div>
        </BentoCard>
        <BentoCard title="DevSecOps" className="break-inside-avoid">
          <div className="mb-6 text-4xl text-white"><FiLayers /></div>
          <div className="flex flex-wrap gap-2">{['Git/GitHub', 'CI/CD', 'Secure API Design', 'Input Sanitization'].map(s => <Badge key={s}>{s}</Badge>)}</div>
        </BentoCard>
      </div>
    </div>
  </PageWrapper>
);

const About = () => (
  <PageWrapper>
    <div className="pt-32 px-6 md:px-24 max-w-6xl mx-auto pb-24">
      <SectionHeader title="About Me" subtitle="From Minecraft mods to Enterprise Defense." />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <BentoCard className="md:col-span-8" title="The Origin Story">
          <p className="text-lg leading-8 mb-6 text-neutral-300">My journey began in junior high, sparked by a friend developing Minecraft mods. I was fascinated by how code could fundamentally alter a system's physics.</p>
          <p className="text-lg leading-8 text-neutral-300">This curiosity evolved into vulnerability research. I learned to deconstruct code not to break it, but to understand it. Today, I channel that mindset into defensive security.</p>
        </BentoCard>
        <BentoCard className="md:col-span-4 bg-cyber-accent/5 border-cyber-accent/20" title="The Mission">
          <p className="text-xl font-medium text-cyber-accent leading-relaxed">"To help protect systems from malicious actors & to understand how these systems tick."</p>
        </BentoCard>
        <BentoCard className="md:col-span-4" title="Beyond the Keyboard">
          <ul className="space-y-4 mt-2">
            <li className="flex items-center gap-3 text-lg"><div className="w-2 h-2 bg-cyber-accent rounded-full"/> Obstacle Training</li>
            <li className="flex items-center gap-3 text-lg"><div className="w-2 h-2 bg-cyber-accent rounded-full"/> LEGO Star Wars</li>
            <li className="flex items-center gap-3 text-lg"><div className="w-2 h-2 bg-cyber-accent rounded-full"/> Marksmanship</li>
          </ul>
        </BentoCard>
        <BentoCard className="md:col-span-8" title="What Excites Me">
          <div className="flex items-start gap-6">
            <FiDatabase className="text-5xl text-neutral-500 mt-1" />
            <div><h4 className="text-xl font-bold text-white mb-2">Malware Analysis</h4><p>Deconstructing and patching code using Ida Pro provides a challenging and unique way to spend my time. Seeing how the machine works is fun, but also fundamental in security.</p></div>
          </div>
        </BentoCard>
      </div>
    </div>
  </PageWrapper>
);

const ExperiencePage = () => (
  <PageWrapper>
    <div className="pt-32 px-6 md:px-24 max-w-5xl mx-auto pb-24">
      <SectionHeader title="Experience" subtitle="Professional timeline." />
      <div className="space-y-8">
        <BentoCard title="Cybersecurity Intern - US Silica" className="border-cyber-accent/30">
          <Badge type="accent">Summer 2023</Badge>
          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>• Modernized phishing awareness training materials.</li>
            <li>• Hands-on with InsightIDR, ServiceNow, and Mimecast.</li>
            <li>• Shadowed Senior Security Engineer to handle support tickets and confidential operations.</li>
            <li>• Researched emerging threats for team situational awareness.</li>
          </ul>
        </BentoCard>
        <BentoCard title="Certified Trainer - Chipotle">
          <Badge>2021 - Present</Badge>
          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>• Managed customer service issues and resolved conflicts efficiently.</li>
            <li>• Led end-of-shift closing procedures with smooth operational transitions.</li>
            <li>• Trained and mentored new team members on efficiency and service standards.</li>
          </ul>
        </BentoCard>
      </div>
    </div>
  </PageWrapper>
);

const HomelabPage = () => (
  <PageWrapper>
    <div className="pt-32 px-6 md:px-24 max-w-6xl mx-auto pb-24">
      <SectionHeader title="Homelab" subtitle="Safe malware detonation environment." />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-3 h-134 bg-[#050505] rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
          <img src="/homelab-diagram.jpeg" alt="Diagram" className="max-h-full opacity-70" />
        </div>
        <BentoCard title="Infrastructure"><p>Managed Switch, VLANs, Pi-5 Pi-hole.</p></BentoCard>
        <BentoCard title="Analysis"><p>VMWare Workstation (Windows & Linux), Ida Pro, OllyDbg, Ghidra, PEView, Dependencies .</p></BentoCard>
        <BentoCard title="Air-Gapped"><p>Physical Lenovo laptop running VMWare and all internet capabilities removed.</p></BentoCard>
      </div>
    </div>
  </PageWrapper>
);

const CertificationsPage = () => (
  <PageWrapper>
    <div className="pt-32 px-6 md:px-24 max-w-5xl mx-auto pb-24">
      <SectionHeader title="Certifications" subtitle="Roadmap to qualification." />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-cyber-accent font-bold mb-4 uppercase tracking-widest">In Progress</h3>
          <div className="space-y-4">
            <BentoCard className="py-6"><h4 className="font-bold text-white">CompTIA Security+</h4></BentoCard>
            <BentoCard className="py-6"><h4 className="font-bold text-white">Cisco CCNA</h4></BentoCard>
          </div>
        </div>
        <div>
          <h3 className="text-blue-400 font-bold mb-4 uppercase tracking-widest">Planned</h3>
          <div className="space-y-4">
            <BentoCard className="py-6 opacity-75"><h4 className="font-bold text-white">CEH (Certified Ethical Hacker)</h4></BentoCard>
            <BentoCard className="py-6 opacity-75"><h4 className="font-bold text-white">CompTIA Pentest+</h4></BentoCard>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

const ProjectsList = () => (
  <PageWrapper>
    <div className="pt-32 px-6 md:px-24 max-w-7xl mx-auto pb-24">
      <SectionHeader title="Projects" subtitle="Building, breaking, and securing." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/projects/localchat" className="block h-full">
          <BentoCard title="LocalChat Pro" className="h-full hover:border-cyber-accent">
            <div className="flex justify-between items-center mb-6"><Badge type="accent">Nov 2025</Badge><FiMessageSquare className="text-3xl text-neutral-500"/></div>
            <p className="text-lg mb-6">Secure real-time communication platform. Node.js/WebSocket server with RBAC.</p>
            <div className="flex flex-wrap gap-2"><Badge>Node.js</Badge><Badge>WebSockets</Badge><Badge>MySQL</Badge></div>
          </BentoCard>
        </Link>
        <Link to="/projects/rentals" className="block h-full">
          <BentoCard title="Prestige Rentals DB" className="h-full hover:border-cyber-accent">
            <div className="flex justify-between items-center mb-6"><Badge type="accent">Oct 2025</Badge><FiDatabase className="text-3xl text-neutral-500"/></div>
            <p className="text-lg mb-6">Full-stack secure car rental system. JWT auth, Bcrypt hashing, and parameterized queries.</p>
            <div className="flex flex-wrap gap-2"><Badge>React</Badge><Badge>Express</Badge><Badge>Cyber Defense</Badge></div>
          </BentoCard>
        </Link>
        <Link to="/projects/portfolio" className="block h-full">
          <BentoCard title="Portfolio V2" className="h-full hover:border-cyber-accent">
            <div className="flex justify-between items-center mb-6"><Badge type="accent">Current</Badge><FiLayout className="text-3xl text-neutral-500"/></div>
            <p className="text-lg mb-6">Meta-analysis of this website. Migrated from Astro to React/Vite/GSAP.</p>
            <div className="flex flex-wrap gap-2"><Badge>React</Badge><Badge>GSAP</Badge><Badge>SPA</Badge></div>
          </BentoCard>
        </Link>
        <Link to="/homelab" className="block h-full">
          <BentoCard title="Cyber Defense Homelab" className="h-full hover:border-cyber-accent">
            <div className="flex justify-between items-center mb-6"><Badge type="accent">Sept 2025</Badge><FiServer className="text-3xl text-neutral-500"/></div>
            <p className="text-lg mb-6">Multi-segmented virtual network environment for malware detonation.</p>
            <div className="flex flex-wrap gap-2"><Badge>VMWare</Badge><Badge>Networking</Badge></div>
          </BentoCard>
        </Link>
      </div>
    </div>
  </PageWrapper>
);

const Contact = () => (
  <PageWrapper>
    <div className="pt-32 px-6 md:px-24 max-w-5xl mx-auto pb-24">
      <SectionHeader title="Get In Touch" subtitle="Open to opportunities, projects, and security discussions." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-entry">
        {[
          { icon: FiMail, label: "Email", sub: "dancastlbusiness", href: "mailto:dancastlbusiness@gmail.com" },
          { icon: FiLinkedin, label: "LinkedIn", sub: "Connect Professionally", href: "https://www.linkedin.com/in/daniel-castleberry-022395281/" },
          { icon: FiGithub, label: "GitHub", sub: "View Code", href: "https://github.com/TheTrueSergeant1" }
        ].map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center p-10 rounded-[2.5rem] border border-white/5 bg-cyber-card/80 backdrop-blur-xl hover:border-cyber-accent/50 hover:bg-white/5 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-3xl text-cyber-accent mb-6 group-hover:scale-110 group-hover:bg-cyber-accent group-hover:text-black transition-all duration-300"><item.icon /></div>
            <h3 className="font-bold text-xl text-white mb-1">{item.label}</h3>
            <p className="text-neutral-500 text-sm">{item.sub}</p>
          </a>
        ))}
      </div>
      <div className="animate-entry rounded-[3rem] border border-white/10 bg-cyber-card/50 p-8 md:p-16 relative overflow-hidden backdrop-blur-3xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-accent/10 rounded-full blur-[150px] -z-10" />
        <form name="contact" method="POST" data-netlify="true" className="space-y-8 relative z-10 max-w-2xl mx-auto">
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2"><label htmlFor="name" className="text-xs font-bold tracking-widest text-neutral-400 ml-1">NAME</label><input type="text" id="name" name="name" required className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-accent focus:outline-none focus:bg-black/60 transition-all placeholder-white/20" placeholder="John Doe" /></div>
            <div className="space-y-2"><label htmlFor="email" className="text-xs font-bold tracking-widest text-neutral-400 ml-1">EMAIL</label><input type="email" id="email" name="email" required className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-accent focus:outline-none focus:bg-black/60 transition-all placeholder-white/20" placeholder="john@example.com" /></div>
          </div>
          <div className="space-y-2"><label htmlFor="message" className="text-xs font-bold tracking-widest text-neutral-400 ml-1">MESSAGE</label><textarea id="message" name="message" rows="5" required className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-cyber-accent focus:outline-none focus:bg-black/60 transition-all placeholder-white/20" placeholder="Let's build something secure..."></textarea></div>
          <button type="submit" className="w-full md:w-auto flex items-center justify-center gap-3 bg-white text-black font-black px-12 py-5 rounded-full hover:bg-cyber-accent hover:scale-[1.02] transition-all duration-300 shadow-xl"><FiSend className="text-lg" /> <span>SEND MESSAGE</span></button>
        </form>
      </div>
    </div>
  </PageWrapper>
);

const ProjectPrestige = () => (
  <ProjectLayout title="Prestige Rentals" date="October 2025">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* --- OVERVIEW --- */}
      <BentoCard title="Project Overview" className="md:col-span-2">
        <p className="text-lg leading-relaxed text-neutral-300 mb-4">
          Prestige Rentals is a full-stack car rental web application designed and developed from the ground up. 
          My primary objective was not only to create a functional platform but to architect it with 
          <strong className="text-white"> security and resilience</strong> as core design principles.
        </p>
        <p className="text-neutral-400">
          As a cybersecurity student, I approached this project as both a software engineer and a security analyst—prioritizing 
          safe coding practices across every layer, from the database schema to the client-side logic.
        </p>
      </BentoCard>

      {/* --- CORE ROLES --- */}
      <BentoCard title="Customer Experience" className="h-full">
        <p className="mb-4 text-sm text-neutral-400">Guests can explore the catalog, but authenticated users gain access to:</p>
        <ul className="space-y-3 text-neutral-300">
          <li className="flex gap-2"><FiLayout className="mt-1 text-cyber-accent"/> <span><strong>Dashboard:</strong> Manage profile, rentals, and payments.</span></li>
          <li className="flex gap-2"><FiCheckCircle className="mt-1 text-cyber-accent"/> <span><strong>Rental Flow:</strong> Multi-step process with terms and payment confirmation.</span></li>
          <li className="flex gap-2"><FiMessageSquare className="mt-1 text-cyber-accent"/> <span><strong>Reviews:</strong> Verified renters can submit/edit feedback.</span></li>
        </ul>
      </BentoCard>

      <BentoCard title="Admin Panel" className="h-full border-cyber-accent/20">
        <p className="mb-4 text-sm text-neutral-400">Staff access via role-based API tokens to:</p>
        <ul className="space-y-3 text-neutral-300">
          <li className="flex gap-2"><FiDatabase className="mt-1 text-cyber-accent"/> <span><strong>CRUD Operations:</strong> Full control over listings, users, and employees.</span></li>
          <li className="flex gap-2"><FiTarget className="mt-1 text-cyber-accent"/> <span><strong>Fleet Mgmt:</strong> Monitor maintenance schedules and availability.</span></li>
          <li className="flex gap-2"><FiShield className="mt-1 text-cyber-accent"/> <span><strong>RBAC:</strong> Protected endpoints ensuring privilege separation.</span></li>
        </ul>
      </BentoCard>

      {/* --- DEEP DIVE --- */}
      <BentoCard title="Database & Backend Architecture" className="md:col-span-2">
        <p className="mb-6 text-neutral-400">
          The backend is designed around a <span className="text-white">relational MySQL database</span>. Every piece of data is stored in structured tables with clear relationships.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div>
                <h4 className="text-white font-bold mb-2 flex items-center gap-2"><FiList /> Schema Design</h4>
                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                    <li><strong>Customers:</strong> Stores hashed passwords (bcrypt) and account status.</li>
                    <li><strong>Rentals:</strong> Maps customers to vehicles with start/end dates.</li>
                    <li><strong>Transactions:</strong> Atomic operations ensure payments and availability update simultaneously.</li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-bold mb-2 flex items-center gap-2"><FiCode /> Security Implementation</h4>
                <ul className="space-y-2 text-neutral-400 list-disc list-inside">
                    <li><strong>SQL Injection:</strong> All queries use <code className="bg-white/10 px-1 rounded text-cyber-accent">mysql2/promise</code> parameterized statements.</li>
                    <li><strong>Referential Integrity:</strong> Foreign keys and cascading deletes prevent orphaned records.</li>
                    <li><strong>Indexing:</strong> Composite indexes on <code className="bg-white/10 px-1 rounded">customer_id</code> improve query speed.</li>
                </ul>
            </div>
        </div>
      </BentoCard>

      {/* --- ER DIAGRAM TRANSLATION --- */}
      <BentoCard title="Entity Relationships" className="md:col-span-2 bg-[#050505]">
         <div className="space-y-4 font-mono text-sm text-neutral-400">
            <div className="border-l-2 border-cyber-accent pl-4">
                <p><span className="text-cyber-accent">STRONG ENTITIES:</span> Customers, Cars, Employees, Rentals, Locations</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
                <p><span className="text-blue-500">WEAK ENTITIES:</span> Payments (via Rentals), Maintenance (via Cars), Reviews (via Customers)</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg mt-4">
                <p className="text-xs text-neutral-500 mb-2">RELATIONSHIP LOGIC</p>
                <p>Rentals <span className="text-cyber-accent">generates</span> Payments (1:N)</p>
                <p>Customers <span className="text-cyber-accent">books</span> Rentals (1:N)</p>
                <p>Cars <span className="text-cyber-accent">undergoes</span> Maintenance (1:N)</p>
            </div>
         </div>
      </BentoCard>

      {/* --- CYBERSECURITY IMPLEMENTATION --- */}
      <BentoCard title="Defensive Implementation" className="md:col-span-2 border-cyber-accent/30">
         <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-bold text-white mb-4">Auth & Session</h3>
                <ul className="space-y-4 text-neutral-300">
                    <li>
                        <div className="font-bold text-cyber-accent text-sm mb-1">PASSWORD HASHING</div>
                        Using <code className="bg-white/10 px-1 rounded">bcrypt</code> with unique salts to defend against rainbow tables.
                    </li>
                    <li>
                        <div className="font-bold text-cyber-accent text-sm mb-1">JWT TOKENS</div>
                        Signed, stateless tokens containing User ID and Role, stored in sessionStorage.
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-4">Vulnerability Mitigation</h3>
                <ul className="space-y-4 text-neutral-300">
                    <li>
                        <div className="font-bold text-cyber-accent text-sm mb-1">BRUTE FORCE</div>
                        <code className="bg-white/10 px-1 rounded">express-rate-limit</code> throttles failed login attempts.
                    </li>
                    <li>
                        <div className="font-bold text-cyber-accent text-sm mb-1">HEADER HARDENING</div>
                        <code className="bg-white/10 px-1 rounded">helmet.js</code> enforces HSTS, X-Frame-Options, and anti-sniffing.
                    </li>
                </ul>
            </div>
         </div>
      </BentoCard>

      {/* --- TECH STACK --- */}
      <BentoCard title="Tech Stack" className="md:col-span-2">
        <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Bcrypt', 'Helmet.js', 'Tailwind', 'Framer Motion'].map(t => (
                <Badge key={t} type="neutral">{t}</Badge>
            ))}
        </div>
      </BentoCard>

    </div>
  </ProjectLayout>
);

const ProjectLocalChat = () => (
  <ProjectLayout title="LocalChat Pro" date="November 2025">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* --- INTRO --- */}
      <BentoCard title="Enterprise Messaging" className="md:col-span-2">
        <p className="text-lg leading-relaxed text-neutral-300">
            LocalChat Pro is a fully functional, real-time communication platform. The core focus was engineering a robust 
            <span className="text-white"> Node.js/WebSocket server</span> capable of handling high-fidelity, persistent messaging 
            while implementing critical security controls and moderation features essential for an enterprise environment.
        </p>
      </BentoCard>

      {/* --- ARCHITECTURE --- */}
      <BentoCard title="Dual-Layer Protocol" className="h-full">
         <p className="text-neutral-400 mb-4">Communication is split for security and reliability:</p>
         <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-xl border-l-2 border-blue-400">
                <h4 className="text-white font-bold flex items-center gap-2"><FiGlobe /> HTTP (REST API)</h4>
                <p className="text-sm text-neutral-400 mt-1">Handles high-integrity tasks like Auth, Registration, and File Uploads. Uses middleware for validation.</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border-l-2 border-green-400">
                <h4 className="text-white font-bold flex items-center gap-2"><FiCpu /> WebSockets</h4>
                <p className="text-sm text-neutral-400 mt-1">Manages real-time events (Messaging, Typing, Presence). Requires HTTP handshake first.</p>
            </div>
         </div>
      </BentoCard>

      {/* --- SECURITY --- */}
      <BentoCard title="Security & Moderation" className="h-full border-cyber-accent/20">
         <ul className="space-y-6 text-neutral-300">
            <li>
                <div className="flex items-center gap-2 font-bold text-white mb-1"><FiKey className="text-cyber-accent"/> RBAC</div>
                <p className="text-sm text-neutral-400">Server-side privilege enforcement. High-privilege commands (/kick, /ban) validated against hierarchy.</p>
            </li>
            <li>
                <div className="flex items-center gap-2 font-bold text-white mb-1"><FiFileText className="text-cyber-accent"/> File Security</div>
                <p className="text-sm text-neutral-400">Mime-type whitelisting and randomized filenames to prevent directory traversal and overwrite attacks.</p>
            </li>
            <li>
                <div className="flex items-center gap-2 font-bold text-white mb-1"><FiShield className="text-cyber-accent"/> Sanitization</div>
                <p className="text-sm text-neutral-400">DOMPurify integration to prevent XSS while maintaining Markdown rendering capabilities.</p>
            </li>
         </ul>
      </BentoCard>

      {/* --- FEATURES --- */}
      <BentoCard title="Advanced Features" className="md:col-span-2">
         <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-2">Threading</h4>
                <p className="text-xs text-neutral-400">Canonical thread structure using self-referencing foreign keys on the messages table.</p>
            </div>
            <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-2">Audit Logs</h4>
                <p className="text-xs text-neutral-400">Immutable record of critical actions (bans, deletions) for forensic investigation.</p>
            </div>
            <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white mb-2">Ownership</h4>
                <p className="text-xs text-neutral-400">Channel deletion restricted strictly to the creator or Admin. Invite codes for private channels.</p>
            </div>
         </div>
      </BentoCard>

      {/* --- TECH STACK --- */}
      <BentoCard title="Tech Stack" className="md:col-span-2">
        <div className="flex flex-wrap gap-2">
            {['Node.js', 'Express', 'WebSockets (ws)', 'MySQL', 'PBKDF2 Hashing', 'Multer', 'DOMPurify', 'Tailwind'].map(t => (
                <Badge key={t} type="neutral">{t}</Badge>
            ))}
        </div>
      </BentoCard>

    </div>
  </ProjectLayout>
);

const ProjectPortfolio = () => (
  <ProjectLayout title="Portfolio V2" date="Current Version">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* --- META ANALYSIS --- */}
      <BentoCard title="Meta-Analysis: The Upgrade" className="md:col-span-2">
        <p className="text-lg leading-relaxed text-neutral-300 mb-4">
          This website is a complete re-engineering of my previous portfolio. While my original site was built with Astro for static speed, I migrated to a 
          <span className="text-white"> React Single Page Application (SPA)</span> to handle complex state management requirements—specifically for the interactive Terminal component.
        </p>
        <p className="text-neutral-400">
          The goal was to marry a high-performance "Cyber" aesthetic with actual functional code, moving away from simple static HTML/CSS into a dynamic React ecosystem.
        </p>
      </BentoCard>

      {/* --- THE TERMINAL LOGIC --- */}
      <BentoCard title="The Terminal Engine" className="md:col-span-2 border-cyber-accent/30">
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><FiTerminal className="text-cyber-accent"/> Virtual File System</h4>
                <p className="text-sm text-neutral-400 mb-4">
                    The terminal isn't just a switch statement. It runs on a recursive file system object (`fileSystem`). When you type <code>cd projects</code>, the traversal logic actually "moves" you into that object key, updating the `currentDir` state array.
                </p>
                <div className="flex gap-2 flex-wrap">
                    <Badge type="neutral">Recursion</Badge>
                    <Badge type="neutral">Object Traversal</Badge>
                </div>
            </div>
            <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2"><FiCommand className="text-cyber-accent"/> Command Parsing</h4>
                <p className="text-sm text-neutral-400 mb-4">
                    Inputs are sanitized and split into `[cmd, ...args]`. The system supports:
                </p>
                <ul className="text-xs text-neutral-500 font-mono space-y-1">
                    <li>• History Navigation (ArrowUp/Down) via State Array</li>
                    <li>• Tab Completion (Matches against current dir keys)</li>
                    <li>• Simulated Latency (setTimeout for Nmap/Matrix)</li>
                </ul>
            </div>
        </div>
      </BentoCard>

      {/* --- GSAP ANIMATIONS --- */}
      <BentoCard title="GSAP Animation" className="h-full">
         <div className="space-y-4">
            <div className="flex items-start gap-4">
                <div className="p-2 bg-white/5 rounded-lg text-cyber-accent"><FiZap /></div>
                <div>
                    <h4 className="font-bold text-white text-sm">Strict Mode Safety</h4>
                    <p className="text-xs text-neutral-400 mt-1">
                        Utilizes the `useGSAP` hook to properly clean up animations and prevent the "double-fire" glitch common in React 18+ Strict Mode.
                    </p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="p-2 bg-white/5 rounded-lg text-cyber-accent"><FiLayout /></div>
                <div>
                    <h4 className="font-bold text-white text-sm">ScrollTrigger</h4>
                    <p className="text-xs text-neutral-400 mt-1">
                        The Navbar uses a specialized ScrollTrigger that detects scroll direction (`self.direction`) to hide the nav on down-scroll and reveal it on up-scroll.
                    </p>
                </div>
            </div>
         </div>
      </BentoCard>

      {/* --- TAILWIND V4 --- */}
      <BentoCard title="Styling Architecture" className="h-full">
         <p className="text-neutral-400 mb-6 text-sm">
            Built using the newly released <strong className="text-white">Tailwind CSS v4</strong>. The design system relies heavily on utility-driven transparency and backdrop filters to achieve the "Glassmorphism" look.
         </p>
         <ul className="space-y-2 text-sm text-neutral-300">
            <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Theme</span>
                <span className="font-mono text-cyber-accent">#0a0a0a (Dark)</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Accent</span>
                <span className="font-mono text-cyber-accent">Cyan / Teal</span>
            </li>
            <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Font</span>
                <span className="font-mono text-cyber-accent">Inter & Fira Code</span>
            </li>
         </ul>
      </BentoCard>

      {/* --- TECH STACK --- */}
      <BentoCard title="Under The Hood" className="md:col-span-2 bg-[#050505]">
        <div className="flex flex-wrap gap-2 mb-6">
            <Badge type="accent">React 19</Badge>
            <Badge type="accent">Vite 6</Badge>
            <Badge type="accent">Tailwind 4</Badge>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs text-neutral-500">
            <div className="p-3 border border-white/5 rounded-lg">
                <span className="block text-white mb-1">Routing</span>
                react-router-dom v7
            </div>
            <div className="p-3 border border-white/5 rounded-lg">
                <span className="block text-white mb-1">Motion</span>
                gsap + @gsap/react
            </div>
            <div className="p-3 border border-white/5 rounded-lg">
                <span className="block text-white mb-1">Icons</span>
                react-icons (Feather)
            </div>
            <div className="p-3 border border-white/5 rounded-lg">
                <span className="block text-white mb-1">Linting</span>
                ESLint 9
            </div>
        </div>
      </BentoCard>

    </div>
  </ProjectLayout>
);

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center">
    <h1 className="text-9xl font-black text-white/10">404</h1>
    <p className="text-2xl text-white mt-4">System Malfunction</p>
    <Link to="/" className="mt-8 text-cyber-accent hover:underline">Return to Base</Link>
  </div>
);

// --- APP ROOT ---
export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-cyber-dark font-sans selection:bg-cyber-accent selection:text-black flex flex-col relative z-10 text-white">
        <BackgroundMesh />
        <Navbar toggleTerminal={() => setTerminalOpen(true)} />
        <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/homelab" element={<HomelabPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/projects/rentals" element={<ProjectPrestige />} />
            <Route path="/projects/localchat" element={<ProjectLocalChat />} />
            <Route path="/projects/portfolio" element={<ProjectPortfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="border-t border-white/5 bg-black/40 py-12 mt-24 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 text-center text-neutral-500 text-sm">
            <p className="mb-2">&copy; {new Date().getFullYear()} Daniel Castleberry.</p>
            <p className="text-xs opacity-50">Secure. Analyze. Defend.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
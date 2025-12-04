import React from 'react';
import { FiServer, FiMessageSquare, FiLayout } from 'react-icons/fi';

const ProjectCard = ({ title, date, desc, tags }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-cyber-border bg-cyber-card p-8 hover:border-cyber-accent/50 transition-all duration-500">
    <div className="absolute -right-10 -top-10 h-40 w-40 bg-cyber-accent/10 blur-[50px] group-hover:bg-cyber-accent/20 transition-all" />
    <span className="text-xs font-mono text-cyber-accent mb-2 block">{date}</span>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-neutral-400 mb-6">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-300 border border-white/10">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="pt-32 px-6 md:px-24 max-w-7xl mx-auto pb-24">
      <h1 className="text-5xl font-bold mb-12">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LocalChat Pro */}
        <ProjectCard 
          title="LocalChat Pro"
          date="Nov 2025"
          desc="A secure real-time communication platform. Engineered a Node.js/WebSocket server capable of handling persistent messaging with role-based access control and input sanitization."
          tags={['Node.js', 'WebSockets', 'MySQL', 'Security']}
        />

        {/* Prestige Rentals */}
        <ProjectCard 
          title="Prestige Rentals DB"
          date="Oct 2025"
          desc="Full-stack car rental system. Implemented JWT authentication, Bcrypt password hashing, and parameterized queries to prevent SQL injection."
          tags={['React', 'Express', 'Cyber Defense', 'RBAC']}
        />

        {/* Homelab */}
        <ProjectCard 
          title="Cyber Defense Homelab"
          date="Sept 2025"
          desc="Multi-segmented virtual network for malware detonation and traffic analysis. Includes Pi-Hole sinkholing and VLAN segmentation."
          tags={['VMWare', 'Networking', 'Malware Analysis']}
        />

        {/* Portfolio */}
        <ProjectCard 
          title="Portfolio V2"
          date="Current"
          desc="You are looking at it. Migrated from Astro to React/Vite/Tailwind for better state management and premium animations."
          tags={['React', 'GSAP', 'Tailwind v4']}
        />

      </div>
    </div>
  );
};

export default Projects;
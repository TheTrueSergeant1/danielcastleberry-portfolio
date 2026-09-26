// src/app/page.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import { portfolioData } from '@/data/portfolioData';
import { ShieldCheck, Server, ArrowUpRight, Cpu, Briefcase, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function DashboardHome() {
    const { personal, experience, certifications, homelab, projects } = portfolioData;

    return (
        <div className="space-y-6">

            {/* Hero Widget Header */}
            <GlassCard className="p-6 sm:p-8 md:p-10 relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 z-10 relative">
                    <div className="flex-1 w-full">
                        <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
                            Cybersecurity Student & Enthusiast
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white mt-4 mb-3">
                            {personal.name}
                        </h1>
                        <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light mb-6">
                            {personal.bio}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a href="mailto:dancastlbusiness@gmail.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full text-sm transition-all">
                                <Mail size={16} /> Email Me
                            </a>
                            <a href="https://github.com/TheTrueSergeant1" target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded-full transition-all">
                                <FaGithub size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/daniel-castleberry-022395281" target="_blank" rel="noreferrer" className="p-2.5 bg-white/5 hover:bg-white/15 border border-white/10 rounded-full transition-all">
                                <FaLinkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Headshot Image Container */}
                    <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 shrink-0 rounded-3xl overflow-hidden border border-white/20 shadow-xl bg-white/5 self-center lg:self-auto">
                        <img
                            src="/headshot.jpg"
                            alt={personal.name}
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </GlassCard>

            {/* Grid Dashboard Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Widget 1: Experience Snapshot */}
                <Link href="/experience" className="group">
                    <GlassCard className="p-6 h-full flex flex-col justify-between group-hover:border-white/40 transition-all">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <Briefcase size={22} className="text-teal-400" />
                                <ArrowUpRight size={18} className="text-white/40 group-hover:text-white transition-colors" />
                            </div>
                            <h2 className="text-lg font-medium text-white mb-1">Latest Role</h2>
                            <p className="text-sm font-semibold text-teal-300">{experience[0].role} • {experience[0].company}</p>
                            <p className="text-xs text-white/60 mt-2 line-clamp-2">{experience[0].bullets[0]}</p>
                        </div>
                        <span className="text-xs text-white/40 mt-6 block">View Timeline & History →</span>
                    </GlassCard>
                </Link>

                {/* Widget 2: Certifications Badge */}
                <Link href="/certifications" className="group">
                    <GlassCard className="p-6 h-full flex flex-col justify-between group-hover:border-white/40 transition-all">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <ShieldCheck size={22} className="text-teal-400" />
                                <ArrowUpRight size={18} className="text-white/40 group-hover:text-white transition-colors" />
                            </div>
                            <h2 className="text-lg font-medium text-white mb-1">Certifications</h2>
                            <p className="text-sm font-semibold text-teal-300">{certifications[0].name}</p>
                            <span className="inline-block mt-2 text-[10px] bg-teal-500/20 border border-teal-400/30 text-teal-200 px-2 py-0.5 rounded-full">
                                {certifications[0].status}
                            </span>
                        </div>
                        <span className="text-xs text-white/40 mt-6 block">View Credentials →</span>
                    </GlassCard>
                </Link>

                {/* Widget 3: Homelab Node */}
                <Link href="/homelab" className="group">
                    <GlassCard className="p-6 h-full flex flex-col justify-between group-hover:border-white/40 transition-all">
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <Server size={22} className="text-teal-400" />
                                <ArrowUpRight size={18} className="text-white/40 group-hover:text-white transition-colors" />
                            </div>
                            <h2 className="text-lg font-medium text-white mb-1">Homelab Infrastructure</h2>
                            <p className="text-sm font-light text-white/80">{homelab.environment} Stack</p>
                            <p className="text-xs text-white/60 mt-2">{homelab.hardware} • {homelab.services[0]}</p>
                        </div>
                        <span className="text-xs text-white/40 mt-6 block">Explore Architecture →</span>
                    </GlassCard>
                </Link>

            </div>

            {/* Featured Projects & Skills Preview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Projects Teaser */}
                <Link href="/projects" className="group">
                    <GlassCard className="p-6 group-hover:border-white/40 transition-all">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs text-white/50 uppercase tracking-wider">Featured Project</span>
                            <ArrowUpRight size={18} className="text-white/40 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">{projects[0].title}</h3>
                        <p className="text-sm text-white/70 line-clamp-2">{projects[0].description}</p>
                    </GlassCard>
                </Link>

                {/* Skills Teaser */}
                <Link href="/skills" className="group">
                    <GlassCard className="p-6 group-hover:border-white/40 transition-all">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs text-white/50 uppercase tracking-wider">Core Toolset</span>
                            <Cpu size={18} className="text-teal-400" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {portfolioData.skills[0].items.slice(0, 6).map((skill, i) => (
                                <span key={i} className="text-xs bg-white/10 border border-white/10 px-2.5 py-1 rounded-md text-white/80">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                </Link>

            </div>

        </div>
    );
}
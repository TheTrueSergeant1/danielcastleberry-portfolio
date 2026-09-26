// src/app/projects/page.tsx
"use client";

import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import { portfolioData } from '@/data/portfolioData';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

export default function ProjectsPage() {
    return (
        <div className="space-y-6 max-w-5xl mx-auto pb-12">
            <div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Projects</h1>
                <p className="text-white/60 text-sm">My personal projects that I work on in my free time.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.projects.map((project, idx) => (
                    <Link key={idx} href={`/projects/${project.slug}`} className="group block h-full">
                        <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between group-hover:border-white/40 transition-all duration-300">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-mono px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-300 rounded-full inline-block mb-3">
                                            {project.date}
                                        </span>
                                        <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-teal-300 transition-colors">
                                            {project.title}
                                        </h2>
                                    </div>
                                    <ArrowUpRight size={20} className="text-white/40 group-hover:text-white transition-colors shrink-0 mt-1" />
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-white/80 border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </div>
    );
}
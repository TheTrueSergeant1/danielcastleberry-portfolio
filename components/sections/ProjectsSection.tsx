// src/components/sections/ProjectsSection.tsx
import GlassCard from '../ui/GlassCard';
import { portfolioData } from '../../data/portfolioData';
import { Server, Code } from 'lucide-react';

export default function ProjectsSection() {
    return (
        <section className="w-full max-w-4xl mx-auto mb-20 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Homelab Feature Card */}
                <GlassCard className="p-8 border-t-2 border-t-teal-400/50">
                    <Server className="text-teal-400 mb-4" size={28} />
                    <h3 className="text-2xl font-semibold text-white mb-2">{portfolioData.homelab.title}</h3>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">
                        {portfolioData.homelab.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {portfolioData.homelab.services.map((tech: string, i: number) => (
                            <span key={i} className="text-xs font-medium px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-100">
                                {tech}
                            </span>
                        ))}
                    </div>
                </GlassCard>

                {/* Dynamic Projects Grid */}
                <div className="space-y-6">
                    {portfolioData.projects.map((project: { title: string; description: string; tech?: string[] }, idx: number) => (
                        <GlassCard key={idx} className="p-6 md:p-8 group hover:bg-white/[0.12] transition-colors duration-300">
                            <Code className="text-white/40 mb-3 group-hover:text-white transition-colors" size={24} />
                            <h4 className="text-xl font-medium text-white mb-2">{project.title}</h4>
                            <p className="text-white/70 text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {(project.tech || []).map((tech: string, i: number) => (
                                    <span key={i} className="text-[10px] uppercase tracking-wider bg-white/10 px-2 py-1 rounded text-white/60">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>

            </div>
        </section>
    );
}
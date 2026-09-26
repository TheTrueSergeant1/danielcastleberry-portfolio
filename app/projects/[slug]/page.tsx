// src/app/projects/[slug]/page.tsx
"use client";

import { use } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import { portfolioData } from '@/data/portfolioData';
import { ArrowLeft, CheckCircle2, Terminal } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const project = portfolioData.projects.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        return (
            <div className="text-center py-24 text-white">
                <h1 className="text-2xl font-semibold mb-4">Project Not Found</h1>
                <Link href="/projects" className="text-teal-400 underline text-sm">Return to Projects Showcase</Link>
            </div>
        );
    }

    return (
        <div className="space-y-12 max-w-5xl mx-auto pb-24 px-4 sm:px-6">
            <Link href="/projects" className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors pt-4">
                <ArrowLeft size={16} /> Back to Projects
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
                <div className="space-y-3">
                    <span className="text-xs font-mono px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-300 rounded-full inline-block">
                        {project.date}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{project.title}</h1>
                </div>

                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2.5 rounded-full text-sm text-white transition-all self-start md:self-auto shrink-0 shadow-lg"
                    >
                        <FaGithub size={18} /> View Source Code
                    </a>
                )}
            </div>

            {/* Overview Section */}
            {project.overview && (
                <GlassCard className="p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-teal-500/10 pointer-events-none">
                        <Terminal size={120} />
                    </div>
                    <h2 className="text-xl font-semibold text-white mb-4">Project Overview</h2>
                    <p className="text-white/80 leading-relaxed text-base md:text-lg font-light max-w-3xl">{project.overview}</p>
                </GlassCard>
            )}

            {/* Structured Sections & Cards */}
            {project.sections?.map((section, sIdx) => (
                <div key={sIdx} className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                        <h2 className="text-2xl font-semibold text-white tracking-tight">{section.category}</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section.cards.map((card, cIdx) => (
                            <GlassCard
                                key={cIdx}
                                className="p-8 flex flex-col justify-between h-full group hover:border-teal-500/40 transition-all duration-300"
                            >
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium text-teal-300 tracking-wide">{card.title}</h3>
                                    {card.description && (
                                        <p className="text-white/70 text-sm leading-relaxed">{card.description}</p>
                                    )}
                                    <ul className="space-y-3 pt-2">
                                        {card.bullets.map((bullet, bIdx) => {
                                            const [boldPart, ...rest] = bullet.split(':');
                                            const remainder = rest.join(':');

                                            return (
                                                <li key={bIdx} className="flex items-start gap-3 text-white/80 text-sm leading-relaxed">
                                                    <CheckCircle2 size={18} className="text-teal-400 shrink-0 mt-0.5" />
                                                    <span>
                                                        {remainder ? (
                                                            <>
                                                                <strong className="text-white font-medium">{boldPart}:</strong>
                                                                {remainder}
                                                            </>
                                                        ) : (
                                                            bullet
                                                        )}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
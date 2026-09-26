// src/app/experience/page.tsx
"use client";

import GlassCard from '@/components/ui/GlassCard';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, MapPin } from 'lucide-react';

export default function ExperiencePage() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">Work Experience</h1>
            <div className="space-y-6">
                {portfolioData.experience.map((exp, idx) => (
                    <GlassCard key={idx} className="p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <div>
                                <h2 className="text-2xl font-medium text-white">{exp.role}</h2>
                                <p className="text-teal-400 font-medium text-base">{exp.company}</p>
                            </div>
                            <div className="flex flex-col md:items-end text-xs text-white/60">
                                <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10 text-white/80">{exp.date}</span>
                                <span className="flex items-center gap-1 mt-1"><MapPin size={12} /> {exp.location}</span>
                            </div>
                        </div>
                        <ul className="space-y-2 text-white/80 text-sm">
                            {exp.bullets.map((bullet, i) => (
                                <li key={i} className="flex gap-2"><span className="text-teal-400">•</span> {bullet}</li>
                            ))}
                        </ul>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
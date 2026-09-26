// src/app/skills/page.tsx
"use client";

import GlassCard from '@/components/ui/GlassCard';
import { portfolioData } from '@/data/portfolioData';

export default function SkillsPage() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">Technical Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.skills.map((skillGroup, idx) => (
                    <GlassCard key={idx} className="p-6">
                        <h2 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                            {skillGroup.category}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item, i) => (
                                <span key={i} className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white/90">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
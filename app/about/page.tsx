// src/app/about/page.tsx
"use client";

import GlassCard from '@/components/ui/GlassCard';
import { portfolioData } from '@/data/portfolioData';
import { GraduationCap, Shield, Target } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">About Me</h1>

            <GlassCard className="p-8 space-y-6">
                <div className="flex items-center gap-3 text-teal-400">
                    <GraduationCap size={24} />
                    <h2 className="text-xl font-medium text-white">Academic Foundation</h2>
                </div>
                <p className="text-white/80 leading-relaxed font-light">
                    {portfolioData.personal.bio}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-white/90 flex items-center gap-2">
                            <Shield size={16} className="text-teal-400" /> Primary Focus
                        </h3>
                        <p className="text-xs text-white/70">Enterprise Threat Analysis, SIEM Deployment, and Network Incident Response.</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-white/90 flex items-center gap-2">
                            <Target size={16} className="text-teal-400" /> Educational Target
                        </h3>
                        <p className="text-xs text-white/70">B.S. Cybersecurity — Sam Houston State University (Expected Fall 2027)</p>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
// src/app/certifications/page.tsx
"use client";

import GlassCard from '@/components/ui/GlassCard';
import { portfolioData } from '@/data/portfolioData';
import { Award, CheckCircle2, Clock } from 'lucide-react';

export default function CertificationsPage() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-semibold text-white">Certifications & Credentials</h1>
            <div className="grid grid-cols-1 gap-6">
                {portfolioData.certifications.map((cert, idx) => (
                    <GlassCard key={idx} className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <Award size={28} className="text-teal-400" />
                                <div>
                                    <h2 className="text-xl font-medium text-white">{cert.name}</h2>
                                    <p className="text-xs text-white/60 mt-0.5">{cert.date}</p>
                                </div>
                            </div>
                            <span className={`text-xs font-medium px-3 py-1 border rounded-full flex items-center gap-1.5 ${cert.status === 'Achieved'
                                    ? 'bg-teal-500/10 border-teal-500/30 text-teal-300'
                                    : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-300'
                                }`}>
                                {cert.status === 'Achieved' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                                {cert.status}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                            {cert.skills.map((skill, i) => (
                                <span key={i} className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/80">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
}
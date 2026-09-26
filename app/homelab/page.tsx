// src/app/homelab/page.tsx
"use client";

import GlassCard from '@/components/ui/GlassCard';
import { portfolioData } from '@/data/portfolioData';
import { Server, HardDrive, Cpu, Shield, Zap, Network, CheckCircle2, Terminal } from 'lucide-react';

// Icon mapping helper
const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'HardDrive': return <HardDrive size={24} className="text-teal-400" />;
        case 'Cpu': return <Cpu size={24} className="text-teal-400" />;
        case 'Server': return <Server size={24} className="text-teal-400" />;
        case 'Shield': return <Shield size={24} className="text-teal-400" />;
        case 'Zap': return <Zap size={24} className="text-teal-400" />;
        case 'Network': return <Network size={24} className="text-teal-400" />;
        default: return <Server size={24} className="text-teal-400" />;
    }
};

export default function HomelabPage() {
    const { homelab } = portfolioData;

    return (
        <div className="space-y-12 max-w-5xl mx-auto pb-24 px-4 sm:px-6">

            {/* Header Section */}
            <div className="space-y-4 pt-4 border-b border-white/10 pb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
                    Infrastructure & Ops
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{homelab.title}</h1>
                <p className="text-white/70 text-base md:text-lg font-light max-w-3xl leading-relaxed">
                    {homelab.description}
                </p>
            </div>

            {/* Compute & Storage Nodes Grid */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                    <h2 className="text-2xl font-semibold text-white tracking-tight">Compute & Storage Nodes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {homelab.nodes.map((node, idx) => (
                        <GlassCard
                            key={idx}
                            className="p-8 flex flex-col justify-between h-full group hover:border-teal-500/40 transition-all duration-300"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono text-teal-300 uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                                        {node.category}
                                    </span>
                                    <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl">
                                        {getIcon(node.icon)}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{node.name}</h3>
                                    <p className="text-white/70 text-sm leading-relaxed mb-4">{node.description}</p>
                                </div>

                                <ul className="space-y-2.5 pt-2 border-t border-white/10">
                                    {node.bullets.map((bullet, bIdx) => {
                                        const [boldPart, ...rest] = bullet.split(':');
                                        const remainder = rest.join(':');

                                        return (
                                            <li key={bIdx} className="flex items-start gap-2.5 text-white/80 text-sm leading-relaxed">
                                                <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-1" />
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

            {/* Power Resilience & Network Security Grid */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                    <h2 className="text-2xl font-semibold text-white tracking-tight">Resilience & Network Segmentation</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {homelab.infrastructure.map((infra, idx) => (
                        <GlassCard
                            key={idx}
                            className="p-8 flex flex-col justify-between h-full group hover:border-teal-500/40 transition-all duration-300"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-semibold text-white">{infra.title}</h3>
                                    <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl">
                                        {getIcon(infra.icon)}
                                    </div>
                                </div>

                                <p className="text-white/70 text-sm leading-relaxed">{infra.description}</p>

                                <ul className="space-y-2.5 pt-2 border-t border-white/10">
                                    {infra.bullets.map((bullet, bIdx) => {
                                        const [boldPart, ...rest] = bullet.split(':');
                                        const remainder = rest.join(':');

                                        return (
                                            <li key={bIdx} className="flex items-start gap-2.5 text-white/80 text-sm leading-relaxed">
                                                <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-1" />
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

        </div>
    );
}
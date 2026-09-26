// src/components/sections/SkillsSection.tsx
import GlassCard from '../ui/GlassCard';
import { portfolioData } from '../../data/portfolioData';

export default function SkillsSection() {
    return (
        <section className="w-full max-w-4xl mx-auto mb-12">
            <h3 className="text-3xl font-semibold text-white mb-6">Technical Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {portfolioData.skills.map((skillGroup, idx) => (
                    <GlassCard key={idx} className="p-6 hover:scale-[1.02] transition-transform duration-300">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-teal-400/80" />
                            {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item, i) => (
                                <span key={i} className="text-xs bg-black/20 border border-white/5 px-2.5 py-1.5 rounded-md text-white/80">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
// src/components/sections/ExperienceSection.tsx
import GlassCard from '../ui/GlassCard';
import { portfolioData } from '../../data/portfolioData';

export default function ExperienceSection() {
    return (
        <section className="w-full max-w-4xl mx-auto space-y-6 mb-12">
            <h3 className="text-3xl font-semibold text-white mb-6">Experience & Certifications</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                    {portfolioData.experience.map((exp, idx) => (
                        <GlassCard key={idx} className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-xl font-medium text-white">{exp.role}</h4>
                                    <p className="text-teal-400/90 font-medium">{exp.company}</p>
                                </div>
                                <span className="text-xs font-medium px-3 py-1 bg-white/10 border border-white/10 rounded-full text-white/80">
                                    {exp.date}
                                </span>
                            </div>
                            <ul className="space-y-2 text-white/70 text-sm">
                                {exp.bullets.map((bullet, i) => (
                                    <li key={i} className="flex gap-2"><span className="text-teal-400">•</span> {bullet}</li>
                                ))}
                            </ul>
                        </GlassCard>
                    ))}
                </div>

                <div className="space-y-6">
                    {portfolioData.certifications.map((cert, idx) => (
                        <GlassCard key={idx} className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-medium text-white max-w-[70%]">{cert.name}</h4>
                                <span className={`text-xs font-medium px-3 py-1 border rounded-full ${cert.status === 'Achieved' ? 'bg-teal-500/10 border-teal-500/30 text-teal-300' : 'bg-white/5 border-white/10 text-white/60'}`}>
                                    {cert.status}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
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
        </section>
    );
}
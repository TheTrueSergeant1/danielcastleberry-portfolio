"use client";

import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function HeroSection() {
    const { name, headline, bio, contact } = portfolioData.personal;

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start pt-20 pb-12 w-full max-w-4xl mx-auto text-white"
        >
            <motion.h1 variants={item} className="text-5xl md:text-7xl font-semibold tracking-tight mb-2">
                {name}
            </motion.h1>
            <motion.h2 variants={item} className="text-xl md:text-2xl text-white/70 mb-6 font-light">
                {headline}
            </motion.h2>
            <motion.p variants={item} className="text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
                {bio}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
                <a href={contact.resume} download className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full transition-all active:scale-95">
                    <Download size={18} /> Resume
                </a>
                <div className="flex gap-3">
                    {[
                        { icon: <Mail size={20} />, href: contact.email },
                        { icon: <FaLinkedin size={20} />, href: contact.linkedin },
                        { icon: <FaGithub size={20} />, href: contact.github }
                    ].map((link, i) => (
                        <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-white/5 hover:bg-white/15 backdrop-blur-md border border-white/10 p-3 rounded-full transition-all hover:scale-105 active:scale-95">
                            {link.icon}
                        </a>
                    ))}
                </div>
            </motion.div>
        </motion.section>
    );
}
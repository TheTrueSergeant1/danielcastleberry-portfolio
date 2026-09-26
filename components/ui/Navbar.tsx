// src/components/ui/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Cpu, Award, Server, FolderGit2, Download, Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Skills', path: '/skills', icon: Cpu },
    { name: 'Certs', path: '/certifications', icon: Award },
    { name: 'Homelab', path: '/homelab', icon: Server },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
            <nav className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-4 py-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex items-center justify-between">

                {/* Mobile Header Title */}
                <div className="flex md:hidden items-center justify-between w-full px-2">
                    <Link href="/" className="text-sm font-semibold text-white tracking-wide">
                        Portfolio
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                        aria-label="Toggle Navigation Menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* PC Navigation Tabs — Untouched */}
                <div className="hidden md:flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`relative px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${isActive ? 'text-white' : 'text-white/60 hover:text-white/90'
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activePill"
                                        className="absolute inset-0 bg-white/20 border border-white/30 rounded-full shadow-inner"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <Icon size={16} className="relative z-10" />
                                <span className="relative z-10 hidden sm:inline">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>

                {/* PC Action Button — Untouched */}
                <a
                    href={portfolioData.personal.contact.resume}
                    download
                    className="hidden md:flex items-center gap-2 text-xs font-medium bg-teal-500/20 border border-teal-400/40 text-teal-200 px-4 py-1.5 rounded-full hover:bg-teal-500/30 transition-all active:scale-95 whitespace-nowrap ml-4"
                >
                    <Download size={14} /> Resume
                </a>
            </nav>

            {/* Mobile Animated Dropdown Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden mt-2 bg-[#070a0f]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-3 shadow-2xl flex flex-col gap-1"
                    >
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            const Icon = item.icon;

                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${isActive
                                            ? 'bg-teal-500/20 border border-teal-400/30 text-teal-200 shadow-sm'
                                            : 'text-white/70 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    <Icon size={18} />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}

                        <div className="pt-2 mt-1 border-t border-white/10">
                            <a
                                href={portfolioData.personal.contact.resume}
                                download
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 text-sm font-medium bg-teal-500/20 border border-teal-400/40 text-teal-200 w-full py-2.5 rounded-xl hover:bg-teal-500/30 transition-all active:scale-95"
                            >
                                <Download size={16} /> Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/ui/Navbar';

export const metadata = {
    title: 'Daniel Castleberry | Cybersecurity Portfolio',
    description: 'Cybersecurity Student & Homelab Enthusiast',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-black text-white antialiased overflow-x-hidden selection:bg-teal-500/30 selection:text-white">

                {/* High-quality background image with gradient overlays */}
                <div
                    className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70"
                    style={{ backgroundImage: "url('/background.jpg')" }}
                />
                <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/40 via-black/60 to-[#070a0f]/95 backdrop-blur-[3px]" />

                {/* Global Floating Nav */}
                <Navbar />

                {/* Page Content with top spacing for floating navbar */}
                <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                    {children}
                </main>
            </body>
        </html>
    );
}
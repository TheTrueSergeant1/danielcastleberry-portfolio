// data/resumeData.ts
export const portfolioData = {
    personal: {
        contact: {
            resume: "/resume.pdf", // Ensure your PDF file is saved as resume.pdf inside the public folder
        },
    },
    experience: [
        {
            role: "Cybersecurity Intern",
            company: "US Silica",
            location: "Katy, TX",
            date: "June 2023 - August 2023",
            bullets: [
                "Redesigned phishing awareness training materials, improving employee understanding of cybersecurity best practices.",
                "Gained hands-on experience with enterprise security tools including InsightIDR, ServiceNow, and Mimecast.",
                "Shadowed senior security engineers to learn incident response, ticket handling, and enterprise operations.",
                "Researched emerging cybersecurity threats to stay updated on industry developments."
            ]
        },
        {
            role: "Certified Trainer",
            company: "Chipotle",
            location: "The Woodlands, TX",
            date: "August 2023 - Present",
            bullets: [
                "Trained and mentored new hires, ensuring consistent service quality and operational standards.",
                "Resolved customer service issues efficiently in a high-volume environment.",
                "Handled daily sales deposits with accuracy and accountability.",
                "Led closing procedures to maintain operational readiness."
            ]
        },
        {
            role: "Cashier & Restocker",
            company: "Burlington",
            location: "The Woodlands, TX",
            date: "May 2021 - January 2022",
            bullets: [
                "Operated point-of-sale system with precision and customer focus.",
                "Maintained inventory organization to support smooth store operations."
            ]
        }
    ],
    certifications: [
        { name: "CompTIA Security+ (SY0-701)", date: "July 28, 2026", status: "Achieved", skills: ["Network Security", "Cryptography", "Risk Management"] },
        { name: "Cisco Certified Network Associate (CCNA)", date: "In Progress", status: "Studying", skills: ["Routing", "Switching", "Network Fundamentals"] }
    ],
    homelab: {
        environment: "Proxmox VE",
        hardware: "Ugreen NAS",
        services: ["Jellyfin Media Server", "Hosted Web Services"]
    }
};
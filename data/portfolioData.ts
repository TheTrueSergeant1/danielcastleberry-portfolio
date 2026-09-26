// src/data/portfolioData.ts

export interface Project {
    title: string;
    slug: string;
    date: string;
    description: string;
    tech: string[];
    githubUrl: string;
    overview: string;
    sections: {
        category: string;
        cards: {
            title: string;
            description: string;
            bullets: string[];
        }[];
    }[];
}

export const portfolioData = {
    personal: {
        name: "Daniel Castleberry",
        headline: "Cybersecurity Student",
        bio: "Pursuing a B.S. in Cybersecurity at Sam Houston State University with an anticipated graduation in Fall 2027. Currently focused on enterprise defense, threat analysis, and security architecture.",
        contact: {
            email: "mailto:contact@yourdomain.com",
            linkedin: "https://linkedin.com/in/yourprofile",
            github: "https://github.com/yourusername",
            resume: "/resume.pdf"
        }
    },
    experience: [
        {
            role: "Cybersecurity Intern",
            company: "US Silica",
            location: "Katy, Texas",
            date: "Summer 2023",
            bullets: [
                "Modernized phishing awareness training materials.",
                "Hands-on with InsightIDR, ServiceNow, and Mimecast.",
                "Shadowed Senior Security Engineer to handle support tickets and confidential operations.",
                "Researched emerging threats for team situational awareness."
            ]
        },
        {
            role: "Certified Trainer",
            company: "Chipotle",
            location: "The Woodlands, Texas",
            date: "2021 - Present",
            bullets: [
                "Managed customer service issues and resolved conflicts efficiently.",
                "Led end-of-shift closing procedures with smooth operational transitions.",
                "Trained and mentored new team members on efficiency and service standards."
            ]
        }
    ],
    certifications: [
        {
            name: "CompTIA Security+ (SY0-701)",
            date: "July 28, 2026",
            status: "Achieved",
            skills: ["Network Security", "Cryptography", "Risk Management"]
        },
        {
            name: "Cisco Certified Network Associate (CCNA)",
            date: "In Progress",
            status: "Studying",
            skills: ["Routing", "Switching", "Network Fundamentals"]
        }
    ],
    skills: [
        {
            category: "Security Tools",
            items: ["Wazuh SIEM", "InsightIDR", "ServiceNow", "Zscaler", "Mimecast", "Splunk", "Metasploit", "Wireshark", "Nmap"]
        },
        {
            category: "Development",
            items: ["Next.js", "React", "Supabase", "Tailwind CSS", "JavaScript", "Python", "Docker", "LaTeX"]
        },
        {
            category: "Infrastructure & OS",
            items: ["Linux (Kali/Ubuntu)", "Windows Server", "Active Directory", "Proxmox VE", "VMWare"]
        }
    ],
    homelab: {
        title: "Personal Homelab & Infrastructure",
        description: "A robust, self-hosted, and power-resilient hybrid infrastructure engineered for media distribution, virtualization testing, and strict network security segmentation.",
        environment: "Hybrid (Proxmox VE & Windows 11 Pro)",
        hardware: "UGREEN NAS, Custom Windows Rig, Proxmox Node, Raspberry Pi 5",
        services: ["Jellyfin Media Server", "Docker Containers", "Pi-hole DNS", "Minecraft Servers", "Tailscale VPN"],
        nodes: [
            {
                category: "Core Storage & Services",
                name: "UGREEN NAS",
                icon: "HardDrive",
                description: "Dedicated network-attached storage and media repository running containerized microservices.",
                bullets: [
                    "Media Server Stack: Runs 8 integrated containers including Jellyseerr, Prowlarr, Radarr, Sonarr, qBittorrent, Gluetun VPN, Flaresolverr, and Tailscale.",
                    "Dashboard & Portal Stack: Hosts Homarr as a centralized dashboard for monitoring and launching self-hosted apps.",
                    "Library Management Stack: Runs Kavita for digital book and comic management."
                ]
            },
            {
                category: "Media & Game Server Node",
                name: "Windows 11 Pro Rig",
                icon: "Cpu",
                description: "High-performance primary server handling media transcoding and game server hosting.",
                bullets: [
                    "Jellyfin & Intel ARC: Leverages integrated Intel ARC graphics hardware acceleration for smooth video transcoding.",
                    "Dedicated Services: Hosts personal Minecraft servers with hardwired, high-bandwidth connection to the UGREEN NAS.",
                    "Remote Access: Integrated with Tailscale for secure remote streaming outside the home network."
                ]
            },
            {
                category: "Virtualization & Change Control",
                name: "Proxmox VE Test Node",
                icon: "Server",
                description: "Dedicated staging environment for infrastructure validation.",
                bullets: [
                    "Change Control: Used as a sandbox environment to test configurations, updates, and container deployments safely.",
                    "Compatibility Testing: Validates stability before pushing production changes to the Windows host or UGREEN NAS."
                ]
            },
            {
                category: "Network-Wide Security",
                name: "Raspberry Pi 5",
                icon: "Shield",
                description: "Dedicated hardware appliance enforcing network-wide privacy and security filtering.",
                bullets: [
                    "Pi-hole Deployment: Acts as a network-wide DNS sinkhole to block advertisements and telemetry tracking at the network edge."
                ]
            }
        ],
        infrastructure: [
            {
                title: "Power Resilience & Safety",
                icon: "Zap",
                description: "Comprehensive backup power and surge mitigation ensuring 24/7 uptime during environmental instability.",
                bullets: [
                    "UGREEN UPS: Direct power backup paired with the UGREEN NAS to prevent data corruption during short outages or brownouts.",
                    "On-Site Generator: Automatically kicks in during extended grid failures to keep critical infrastructure online.",
                    "Surge Protection: Whole-home surge protector installed to shield sensitive server components from electrical spikes."
                ]
            },
            {
                title: "Network Segmentation & Access Control",
                icon: "Network",
                description: "Enterprise-grade isolation practices enforced across physical and logical layers.",
                bullets: [
                    "Managed Switch & VLANs: Systems are organized into isolated VLANs based on function and security clearance.",
                    "IP/MAC Filtering: Strict access policies ensure equipment can only be reached by authorized users physically on-premise or authenticated via secure tunnels."
                ]
            }
        ]
    },
    projects: [
        {
            title: "Prestige Rentals DB",
            slug: "prestige-rentals-db",
            date: "Oct 2025",
            description: "Full-stack secure car rental system. JWT auth, Bcrypt hashing, and parameterized queries.",
            tech: ["React", "Express", "Node.js", "MySQL"],
            githubUrl: "https://github.com/TheTrueSergeant1/car_rental_website",
            overview: "Prestige Rentals is a full-stack car rental web application designed and developed from the ground up. The primary objective was not only to create a functional platform but to architect it with security and resilience as core design principles. Approaching this from both a software engineering and security analyst perspective, safety practices were prioritized across every layer—from database schemas to client-side logic.",
            sections: [
                {
                    category: "User Experience & Access Control",
                    cards: [
                        {
                            title: "Customer Experience",
                            description: "Guests can explore the catalog, but authenticated users gain access to:",
                            bullets: [
                                "Dashboard: Manage profile, rentals, and payments.",
                                "Rental Flow: Multi-step process with terms and payment confirmation.",
                                "Reviews: Verified renters can submit/edit feedback."
                            ]
                        },
                        {
                            title: "Admin Panel",
                            description: "Staff access via role-based API tokens:",
                            bullets: [
                                "CRUD Operations: Full control over listings, users, and employees.",
                                "Fleet Mgmt: Monitor maintenance schedules and availability.",
                                "RBAC: Protected endpoints ensuring privilege separation."
                            ]
                        }
                    ]
                },
                {
                    category: "Database & Backend Architecture",
                    cards: [
                        {
                            title: "Schema Design & Integrity",
                            description: "The backend is structured around a relational MySQL database with explicit entity relationships:",
                            bullets: [
                                "Customers: Stores hashed passwords (bcrypt) and account status.",
                                "Rentals & Transactions: Atomic operations ensure payments and availability update simultaneously with foreign keys and cascading deletes preventing orphaned records."
                            ]
                        },
                        {
                            title: "Security Implementation",
                            description: "Built-in database and query protections:",
                            bullets: [
                                "SQL Injection Defense: All queries use mysql2/promise parameterized statements.",
                                "Indexing: Composite indexes applied on high-traffic keys like customer_id to optimize query performance."
                            ]
                        }
                    ]
                },
                {
                    category: "Defensive Implementation",
                    cards: [
                        {
                            title: "Auth & Session Management",
                            description: "Securing user credentials and sessions:",
                            bullets: [
                                "Password Hashing: Implements bcrypt with unique salts to defend against rainbow tables.",
                                "JWT Tokens: Signed tokens containing User ID and Role securely manage sessions."
                            ]
                        },
                        {
                            title: "Vulnerability Mitigation",
                            description: "Hardening the server against common exploits:",
                            bullets: [
                                "Brute Force Protection: express-rate-limit throttles failed login attempts.",
                                "Header Hardening: helmet.js enforces HSTS, X-Frame-Options, and anti-sniffing protocols."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "LocalChat Pro",
            slug: "local-chat-pro",
            date: "Nov 2025",
            description: "Secure real-time communication platform. Node.js/WebSocket server with RBAC.",
            tech: ["Node.js", "WebSockets", "MySQL"],
            githubUrl: "https://github.com/TheTrueSergeant1/LAN_Text_Chat",
            overview: "LocalChat Pro is a fully functional, real-time communication platform. The core focus was engineering a robust Node.js/WebSocket server capable of handling high-fidelity, persistent messaging while implementing critical security controls and moderation features essential for an enterprise environment.",
            sections: [
                {
                    category: "Protocol Architecture",
                    cards: [
                        {
                            title: "Dual-Layer Protocol",
                            description: "Communication is split across two channels for optimal security and reliability:",
                            bullets: [
                                "HTTP (REST API): Handles high-integrity tasks like authentication, user registration, and file uploads using validation middleware.",
                                "WebSockets: Manages real-time events including messaging, typing indicators, and presence states, requiring an initial HTTP handshake first."
                            ]
                        },
                        {
                            title: "Security & Moderation",
                            description: "Built-in controls for platform safety:",
                            bullets: [
                                "RBAC: Server-side privilege enforcement where high-privilege commands (/kick, /ban) are validated against user hierarchy.",
                                "File Security: Mime-type whitelisting and randomized filenames to prevent directory traversal and overwrite attacks.",
                                "Sanitization: DOMPurify integration protects against XSS while maintaining Markdown rendering capabilities."
                            ]
                        }
                    ]
                },
                {
                    category: "Advanced Features",
                    cards: [
                        {
                            title: "Threading & Logging",
                            description: "Data structure and forensic readiness:",
                            bullets: [
                                "Threading: Canonical thread structure utilizing self-referencing foreign keys on the messages table.",
                                "Audit Logs: Immutable record of critical administrative actions (bans, deletions) for forensic investigation.",
                                "Ownership: Channel deletion restricted strictly to the creator or Admin, protected by private invite codes."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "Pantry Management Web Application",
            slug: "pantry-management-web-application",
            date: "Jun 2026",
            description: "Custom web application for pantry management utilizing a modern React stack and Supabase backend database operations.",
            tech: ["Next.js", "React", "Supabase", "Tailwind CSS"],
            githubUrl: "https://github.com/TheTrueSergeant1/pantry_tracker",
            overview: "A comprehensive kitchen inventory tracking application built to provide real-time visibility over household provisions, expiration tracking, and stock replenishment workflows.",
            sections: [
                {
                    category: "Architecture & Frontend",
                    cards: [
                        {
                            title: "Client-Side Engineering",
                            description: "Designed for seamless responsiveness and speed:",
                            bullets: [
                                "Framework: Built with Next.js App Router for optimal hybrid static and server-side rendering.",
                                "Styling & UI: Crafted using Tailwind CSS with a custom glassmorphism design system matching the core portfolio aesthetic.",
                                "State Management: Reactive local state handling instant UI updates during inventory additions and deletions."
                            ]
                        }
                    ]
                },
                {
                    category: "Backend & Cloud Integration",
                    cards: [
                        {
                            title: "Supabase Relational Backend",
                            description: "Secure data persistence layer:",
                            bullets: [
                                "Authentication: Secure user sign-up and session handling managed through Supabase Auth.",
                                "Row-Level Security (RLS): Custom SQL policies enforcing user data isolation so records are exclusively viewable and editable by their owner.",
                                "Real-Time Sync: Subscriptions configured to update inventory grids dynamically across multiple active client sessions."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "UtilityDashboard",
            slug: "utility-dashboard",
            date: "Jan 2026",
            description: "Centralized system utility and monitoring dashboard designed for quick operational oversight.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
            githubUrl: "https://github.com/TheTrueSergeant1/UtilityDashboard",
            overview: "UtilityDashboard serves as a modular command center interface, combining system metrics, administrative utilities, and quick-access operational widgets into a unified single-pane-of-glass display.",
            sections: [
                {
                    category: "System Design",
                    cards: [
                        {
                            title: "Modular Frontend Architecture",
                            description: "Engineered for high performance and clean maintainability:",
                            bullets: [
                                "Type Safety: Fully written in TypeScript to guarantee strict interface contracts across telemetry components.",
                                "Widget Layout: Dynamic grid configuration allowing users to view logs, quick-launch scripts, and system status concurrently."
                            ]
                        },
                        {
                            title: "Backend Telemetry & Integration",
                            description: "Connecting interface to host resources:",
                            bullets: [
                                "API Polling: Node.js background worker scripts polling local system telemetry at configured intervals.",
                                "Secure Execution: Command execution sandboxed to prevent unauthorized shell injection from user inputs."
                            ]
                        }
                    ]
                }
            ]
        }
    ] as Project[]
};
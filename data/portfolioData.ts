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
            title: "SecOps & Homelab Browser Homepage",
            slug: "secops-homepage",
            date: "Sep 2026",
            description: "Zero-dependency SecOps & homelab browser startpage built with Vanilla JS and the native WebCrypto API. Features threat-intel bangs, in-memory file hashing, AES-256-GCM scratchpad, CIDR/MAC calculators, and a Ctrl+K command palette.",
            tech: ["Vanilla JS", "WebCrypto API", "HTML5", "CSS3"],
            githubUrl: "https://github.com/TheTrueSergeant1/Firefox-SecOps-Homepage",
            overview: "During incident triage, lab administration, and security assessments, analysts constantly switch tabs to perform routine data transformations—decoding Base64 payloads, defanging malicious URLs for incident tickets, inspecting JWT claims, converting Active Directory FileTime timestamps, hashing suspicious binaries, or calculating CIDR masks. Pasting sensitive client logs, internal tokens, or files into third-party online utilities introduces unnecessary OPSEC and data-leakage risks. The SecOps & Homelab Command Center solves this by embedding a complete, 100% client-side cryptographic, DFIR, and networking toolkit directly into a custom browser startpage. Engineered with zero external dependencies, no build step, and zero background network telemetry, it runs natively over the local file:// protocol.",
            sections: [
                {
                    category: "Architecture & OPSEC Engineering",
                    cards: [
                        {
                            title: "Data-Driven 4-File Architecture",
                            description: "Designed to bypass strict browser file:// CORS restrictions without requiring a local web server or bundler:",
                            bullets: [
                                "Single Source of Truth (config.js): Centralizes all homelab node URLs, recon links, search bang definitions, and port references into a single configuration object.",
                                "Dynamic UI Rendering (app.js): Reads config.js on load to dynamically construct the top navigation dropdowns, quick-bang pills, reference tables, and the Ctrl+K command palette index without HTML duplication.",
                                "Zero-Bloat Separation: Isolates structural markup (index.html) and custom dark-mode CSS variables/animations (styles.css) for effortless maintenance."
                            ]
                        },
                        {
                            title: "OPSEC & Firefox Local Ergonomics",
                            description: "Hardened for local browser execution with strict privacy guarantees:",
                            bullets: [
                                "Zero Background Telemetry: Makes zero outbound network requests or health pings on page load; external connections only occur when explicitly triggered by the user.",
                                "100% In-Memory Processing: All file hashing, JWT inspection, regex log scraping, and encryption execute strictly inside the browser's local memory space.",
                                "Firefox file:// Polish: Uses an inline SVG data-URI favicon for offline tab branding and includes one-click .txt file exports to protect local notes against browser cache purges."
                            ]
                        }
                    ]
                },
                {
                    category: "Omnibox Routing & Threat Intelligence",
                    cards: [
                        {
                            title: "Smart Omnibox & 12 Threat-Intel Bangs",
                            description: "The central search bar acts as a context-aware router with live visual indicator badges:",
                            bullets: [
                                "Intelligent Protocol Detection: Automatically routes RFC 1918 private LAN addresses (10.x.x.x, 192.168.x.x, localhost) over http:// for homelab access while routing public domains over https://.",
                                "Threat-Intel Bang Triggers: Supports instant prefix routing for VirusTotal (!vt), Shodan (!shodan), URLScan (!urlscan), AbuseIPDB (!abuse), NIST NVD (!cve), GTFOBins (!gtfo), LOLBAS (!lol), crt.sh (!crt), GreyNoise (!grey), MalwareBazaar (!bazaar), ThreatFox (!fox), and CISA KEV (!cisa).",
                                "Auto-Refanging on Search: Automatically strips defanged brackets (e.g., hxxps[://]evil[.]com) before dispatching queries to intelligence platforms."
                            ]
                        },
                        {
                            title: "IOC Pivot Engine & Bulk Log Scraper",
                            description: "Streamlines indicator triage during SOC investigations and log review:",
                            bullets: [
                                "Multi-Engine IOC Pivot: Enter a target IP, domain, hash, or CVE once to launch parallel lookups across VirusTotal, Shodan, URLScan, AbuseIPDB, or NIST NVD.",
                                "Regex Bulk IOC Extractor: Accepts raw firewall logs, email headers, or threat advisories and automatically extracts, categorizes, and deduplicates all IPv4 addresses, URLs, SHA-256/MD5 hashes, and CVE IDs."
                            ]
                        }
                    ]
                },
                {
                    category: "Client-Side Cryptography & Data Transforms",
                    cards: [
                        {
                            title: "WebCrypto File Hasher & CSPRNG Generator",
                            description: "Replaces insecure Math.random() and external hashing sites with native browser cryptography:",
                            bullets: [
                                "Live String & File Hashing: Uses crypto.subtle.digest to compute SHA-1, SHA-256, and SHA-512 hashes in real time as you type, or via a drag-and-drop local file zone using the FileReader ArrayBuffer API.",
                                "One-Click VirusTotal Hash Check: Allows analysts to verify the SHA-256 digest of a local suspicious binary on VirusTotal without uploading the file itself.",
                                "CSPRNG Credential Generator: Generates high-entropy passwords (12 to 64 characters) using cryptographically secure random values (crypto.getRandomValues over a Uint32Array)."
                            ]
                        },
                        {
                            title: "AES-256-GCM Encrypted Scratchpad",
                            description: "Provides persistent local workspace storage with authenticated encryption:",
                            bullets: [
                                "PBKDF2 Key Derivation: Derives a 256-bit cryptographic key from a user passphrase using 100,000 iterations of SHA-256 and a random 16-byte salt.",
                                "AES-256-GCM Locking: Encrypts workspace notes in-place using a random 12-byte Initialization Vector (IV), storing the combined salt, IV, and ciphertext as a Base64-encoded AESGCM blob in localStorage."
                            ]
                        },
                        {
                            title: "Codec, JWT, Timestamp & CVSS Parser",
                            description: "A unified transformation utility for decoding payloads and normalizing forensic timelines:",
                            bullets: [
                                "UTF-8 Safe Codec & Defanger: Encodes and decodes Base64, Hexadecimal, and URL strings safely via TextEncoder/TextDecoder, alongside one-click IOC Defang and Refang actions.",
                                "Local JWT Inspector: Splits JSON Web Tokens (header.payload.signature), pretty-prints decoded JSON claims locally, and evaluates iat/exp timestamps with an automatic [VALID] or [EXPIRED] status.",
                                "Forensic Timestamp & CVSS Parsers: Converts two-way between Unix Epoch (s/ms), ISO-8601 UTC, and 18-digit Windows Active Directory FileTime (lastLogonTimestamp), and translates CVSS v3.1 vector strings into plain English."
                            ]
                        }
                    ]
                },
                {
                    category: "Networking, Offensive Tooling & Ergonomics",
                    cards: [
                        {
                            title: "Bitwise IPv4 Subnet & MAC Calculator",
                            description: "Instant network engineering calculations without leaving the browser:",
                            bullets: [
                                "Unsigned 32-Bit CIDR Math: Computes Network ID, Broadcast IP, Subnet Mask, Cisco Wildcard Mask (for ACLs/OSPF), usable host ranges, and host counts—accurately handling /31 PtP (RFC 3021) and /32 host routes.",
                                "Multi-Vendor MAC Formatter: Normalizes any pasted MAC address and simultaneously outputs Cisco IOS (001a.2b3c.4d5e), Linux/IETF (00:1a:2b:3c:4d:5e), and Windows/IEEE (00-1A-2B-3C-4D-5E) notations."
                            ]
                        },
                        {
                            title: "One-Liner Builder & Tabbed Cheat Sheets",
                            description: "Rapid command generation and keyboard-first reference lookup:",
                            bullets: [
                                "Transfer & Shell Builder: Dynamically populates LHOST and LPORT into copy-ready snippets for Python http.server, PowerShell IWR/IEX cradles, certutil, Bash /dev/tcp, Netcat mkfifo, and Python PTY stabilization.",
                                "Tabbed SecOps Reference Tables: Filterable cheat sheets covering 25+ Network Ports, critical Windows Security & Sysmon Event IDs (4624, 4625, 4688, 4697, 4769, 1102, 4104, Sysmon 1/3/10/22), and Linux chmod/SUID permissions.",
                                "Ctrl+K Command Palette: Full keyboard navigation (/ to search, Esc to close modals, and Ctrl+K with arrow-key selection) to launch any homelab node, recon site, or built-in tool without touching the mouse."
                            ]
                        }
                    ]
                }
            ]
        },
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

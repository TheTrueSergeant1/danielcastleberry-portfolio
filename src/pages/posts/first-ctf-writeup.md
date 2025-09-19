---
layout: ../../layouts/MainLayout.astro
title: 'TryHackMe: Example problem for website'
pubDate: 'September 19, 2025'
description: 'Example blog post.'
---

This post details my process for compromising the "Blue" machine on TryHackMe, a beginner-friendly room designed to teach fundamental Windows exploitation.

## 1. Reconnaissance

First, I started with an Nmap scan to identify open ports and services running on the target machine.

`nmap -sV -A [TARGET_IP]`

The scan revealed several open ports, most notably port 445 (SMB), which is often vulnerable on older Windows systems.

## 2. Exploitation

Knowing that SMB was open, I searched for known vulnerabilities. The version identified by Nmap was susceptible to MS17-010, also known as EternalBlue. I used the Metasploit Framework to exploit this.

`use exploit/windows/smb/ms17_010_eternalblue`

`set RHOSTS [TARGET_IP]`

`exploit`

## 3. Post-Exploitation

After a successful exploit, I gained a shell with SYSTEM-level privileges. This demonstrates the critical importance of patching systems against known, high-severity vulnerabilities.
---
title: What is Privilege Escalation?
topic: Identity & Access
order: 4
readTime: 5 min read
---

Privilege escalation is when an attacker gains higher-level access than they're authorized for. It's a critical step in most attack chains — getting initial access is important, but that access is often limited. Privilege escalation is how attackers go from "user on one machine" to "administrator on the whole network."

## The concept

Most systems have tiers of access:
- **Standard user** — Can use applications, access own files
- **Power user / local admin** — Can install software, modify system settings on one machine
- **Domain admin** — Can control the entire Active Directory domain, access all systems
- **Root** — Unix/Linux equivalent of full system control

An attacker who phishes a regular employee's credentials doesn't have access to the database servers or domain controllers. Privilege escalation is the process of climbing from one tier to the next.

## How it works

**Exploiting software vulnerabilities** — A bug in the operating system or a service allows the attacker to execute code at a higher privilege level. Kernel exploits are particularly valuable because the kernel operates at the highest privilege level.

**Misconfigurations** — Services running as admin when they don't need to. Weak file permissions. Credentials stored in plaintext in scripts or configuration files. Unquoted service paths.

**Credential harvesting** — Once on a system, the attacker looks for credentials stored in memory (tools like Mimikatz), configuration files, or browser-stored passwords. One compromised system often yields credentials for others.

**Abusing trust relationships** — If Account A has access to System B, and System B has access to System C, the attacker moves through the chain. This is how a single compromised workstation can eventually lead to domain-wide access.

**Lateral movement with escalation** — The attacker combines moving between systems with escalating privileges on each one. Every new system offers new credentials and new escalation opportunities.

## Real-world impact

Privilege escalation is what turns a limited foothold into a domain-wide compromise. The initial access might be a single standard user account, but with privilege escalation, the attacker eventually controls:

- Active Directory (all users and systems)
- Email systems
- Database servers
- Cloud infrastructure

Most major breaches involve privilege escalation. The SolarWinds attackers didn't just push malware through an update — they escalated to persistent, high-level access across networks.

## Defense

- **Least privilege** — Don't give anyone more access than they need. This is the most important defense.
- **Privileged Access Management (PAM)** — Controls and monitors use of admin accounts. Admin access should require additional approval, be time-limited, and be fully logged.
- **Separate admin accounts** — Admins should have separate accounts for admin tasks vs. daily work. They shouldn't browse the web or check email from an admin account.
- **Patch management** — Many privilege escalation exploits target known vulnerabilities.
- **Credential hygiene** — Don't store admin credentials on regular workstations. Use LAPS (Local Administrator Password Solution) for unique local admin passwords.
- **Monitoring** — Alert on unusual privilege use: a standard user suddenly requesting admin access, a service account accessing unusual resources.

## The bottom line

Privilege escalation is how attackers turn a small foothold into a catastrophic breach. The best defense is limiting the blast radius through least privilege, strong credential hygiene, and monitoring for unusual privilege use.

If an attacker gets in as a standard user and can't escalate, the damage is contained to that user's access. Everything else builds on that principle.

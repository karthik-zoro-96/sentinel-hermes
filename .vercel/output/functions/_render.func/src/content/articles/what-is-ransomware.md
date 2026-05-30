---
title: What is Ransomware?
topic: How Attacks Work
order: 3
readTime: 6 min read
---

Ransomware is the most financially damaging form of cyber attack today. It's been responsible for billions of dollars in damages, shut down hospitals and schools, disrupted fuel supplies, and literally put lives at risk. Understanding it isn't optional — it's essential.

## What it does

Ransomware encrypts your files. Documents, databases, photos, backups — anything of value on the infected system becomes locked with strong encryption that is practically impossible to break without the key.

The attacker then demands payment — almost always in cryptocurrency — in exchange for the decryption key. The ransom note typically appears as a text file or desktop wallpaper with instructions on how to pay and a deadline. Miss the deadline, and the price goes up or the key gets destroyed.

## How it gets in

Ransomware doesn't usually arrive out of nowhere. It's typically the final stage of a longer attack:

1. **Initial access** — Phishing email, compromised credentials, or exploiting a public-facing service (like an unpatched VPN appliance)
2. **Establish foothold** — The attacker gets a low-privilege user session on one machine
3. **Escalate privileges** — They find ways to gain admin or domain admin access
4. **Reconnaissance** — They explore the network, map systems, find critical data and backup infrastructure
5. **Lateral movement** — They spread across the network to as many systems as possible
6. **Data exfiltration** — Many modern ransomware groups steal data *before* encrypting. This gives them a second leverage point: "Pay up, or we publish your data."
7. **Deployment** — They trigger the ransomware across all compromised systems simultaneously

This entire process can take days, weeks, or even months before the ransomware is actually deployed. The encryption event is the final act, not the beginning.

## The ransomware business model

Modern ransomware operates like a business. The most successful groups use a model called **Ransomware-as-a-Service (RaaS)**:

- **Developers** create the ransomware software
- **Affiliates** use it to attack targets and share revenue with the developers (typically 70-80% to the affiliate)
- **Support teams** manage payment processing, negotiation, and provide "customer service" to victims

Groups like LockBit, BlackCat (ALPHV), and Cl0p operate this way. They have websites, branding, affiliate portals, and even help desks. It's organized crime with a software business model.

## Double and triple extortion

The game has escalated beyond simple encryption:

- **Single extortion** — "Pay us or you don't get your data back"
- **Double extortion** — "Pay us or we publish your stolen data." This pressures victims even if they have good backups
- **Triple extortion** — Add DDoS attacks against the victim, or contact the victim's customers/partners directly to increase pressure

## Real-world impact

- **Colonial Pipeline (2021)** — A ransomware attack on the largest fuel pipeline in the US caused fuel shortages across the East Coast. Paid $4.4 million (partially recovered by the FBI).
- **Change Healthcare (2024)** — Disrupted healthcare claims processing across the US for weeks. Paid $22 million ransom. Affected patient data for an estimated 100 million people.
- **Kaseya (2021)** — A supply chain ransomware attack that simultaneously hit up to 1,500 businesses through a single IT management tool.

## Should victims pay?

This is a genuinely difficult question, and reasonable people disagree:

**Arguments against paying:**
- Funds criminal enterprises and incentivizes more attacks
- No guarantee you'll get working decryption keys
- You become a known payer — attackers may target you again
- May violate sanctions (some groups are on OFAC sanctions lists)

**Arguments for paying (in extreme cases):**
- If the alternative is permanent data loss and business closure
- If lives are at risk (hospitals, critical infrastructure)
- If data backups are also compromised

Most security professionals and law enforcement agencies recommend not paying. But they also acknowledge that for some organizations, the math becomes complicated when the alternative is ceasing to exist.

## How to protect against it

The defenses against ransomware are the same fundamentals, applied rigorously:

1. **Backups** — Offline, tested, and isolated from your network. This is the single most effective defense. If you can restore from backup, the ransomware is just a disruption, not a catastrophe.
2. **Patch promptly** — Most initial access exploits known vulnerabilities with available patches
3. **MFA everywhere** — Compromised passwords are a top initial access method
4. **Network segmentation** — Limit how far ransomware can spread laterally
5. **Privilege management** — No one needs domain admin access for daily work
6. **Endpoint detection (EDR)** — Behavioral detection can catch ransomware activity (mass file encryption) before it finishes
7. **Email security** — Most ransomware starts with phishing
8. **Incident response plan** — Know what to do before it happens

## The bottom line

Ransomware is a business that thrives on organizations that haven't done the security fundamentals. It's preventable in most cases, but prevention requires investment, discipline, and treating security as an ongoing practice — not a one-time project.

If you take one thing from this article: **offline, tested backups are your best defense against ransomware.** Everything else layers on top.

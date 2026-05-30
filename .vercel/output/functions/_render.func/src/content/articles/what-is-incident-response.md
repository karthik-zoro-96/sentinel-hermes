---
title: What is Incident Response?
topic: For Organizations
order: 1
readTime: 6 min read
---

When a security incident happens — and it will — the difference between a bad day and a catastrophe is how well you respond. Incident response is the organized approach to handling security breaches and cyber attacks. It's the fire drill you hope you never need but must practice for.

## What counts as an incident

A security incident is any event that compromises the confidentiality, integrity, or availability of information or systems:

- Ransomware infection
- Data breach (confirmed unauthorized access to sensitive data)
- Insider threat (employee stealing data)
- DDoS attack disrupting services
- Compromised credentials
- Malware outbreak
- Unauthorized access to systems
- Phishing campaign targeting employees

Not every security alert is an incident. A blocked intrusion attempt is a security event. A successful breach that results in data exfiltration is an incident. The distinction matters for prioritization and response.

## The incident response lifecycle

The standard framework comes from **NIST SP 800-61** (National Institute of Standards and Technology). It has four phases:

### 1. Preparation

This is everything you do *before* an incident happens:

- **Build an incident response team (IRT)** — Define roles: who leads, who investigates, who communicates, who makes decisions
- **Create an incident response plan** — Documented procedures for different incident types
- **Set up tools and access** — Ensure the team has the forensic tools, logging, and system access they'll need
- **Establish communication channels** — How does the team communicate during an incident? (Not email — if email is compromised, you need an out-of-band channel)
- **Train and practice** — Tabletop exercises where the team walks through simulated incidents
- **Know your legal obligations** — Breach notification laws, regulatory requirements, law enforcement contacts

Preparation is the most important phase and the one most organizations underinvest in.

### 2. Detection and Analysis

Something happened. Now you need to figure out what.

- **Detection** — Alerts from security tools, reports from employees, external notification (a customer reports their data on the dark web, a security researcher contacts you)
- **Triage** — Is this a real incident? How severe? What's the scope?
- **Analysis** — What systems are affected? What data was accessed? How did the attacker get in? Are they still inside?
- **Classification** — Categorize the incident by type and severity to determine the appropriate response level

This phase is where good logging and monitoring pay for themselves. If you don't have logs, you're investigating blind.

### 3. Containment, Eradication, and Recovery

**Containment** — Stop the bleeding. Prevent the incident from getting worse.
- Short-term: Isolate affected systems from the network (but don't power them off — you may destroy forensic evidence in memory)
- Long-term: Apply temporary fixes to keep services running while you investigate

**Eradication** — Remove the threat completely.
- Eliminate malware, close backdoors, revoke compromised credentials, patch the vulnerability that was exploited
- This is harder than it sounds — sophisticated attackers plant multiple backdoors

**Recovery** — Restore systems to normal operation.
- Rebuild compromised systems from clean images
- Restore data from clean backups
- Monitor closely for signs of re-compromise
- Gradually return to normal operations

### 4. Post-Incident Activity (Lessons Learned)

This is where most organizations drop the ball, and it's where the most value is:

- **Conduct a post-mortem** — What happened? How did we respond? What worked? What didn't?
- **Document everything** — Timeline of events, decisions made, evidence collected
- **Update the incident response plan** — Incorporate what you learned
- **Implement improvements** — Fix the gaps that allowed the incident or slowed the response
- **Share intelligence** — With industry partners, ISACs (Information Sharing and Analysis Centers), or law enforcement

## The incident response team

A typical IRT includes:

- **Incident Commander** — Overall authority and decision-making
- **Security Analysts** — Technical investigation and forensics
- **IT Operations** — System recovery and infrastructure support
- **Legal** — Regulatory obligations, law enforcement liaison, liability assessment
- **Communications/PR** — External messaging, customer notification
- **Executive Sponsor** — Business decisions, resource allocation, external stakeholder management

## Common mistakes

- **No plan.** "We'll figure it out when it happens." You won't. Not well.
- **Destroying evidence.** The instinct to immediately wipe and rebuild is understandable but can destroy forensic evidence needed to understand the scope and method of the attack.
- **Poor communication.** Not talking to legal, not notifying regulators within required timeframes, or saying too much publicly before the facts are clear.
- **Focusing on eradication before containment.** You need to stop the spread before you start cleaning up.
- **Skipping the post-mortem.** If you don't learn from incidents, you'll repeat the same mistakes.

## The bottom line

Incident response is where security theory meets reality. You can have the best defenses in the world, and something will still get through. The question is: when it does, can you detect it quickly, contain it effectively, eradicate it completely, and recover with minimal damage?

Organizations that practice incident response regularly — through tabletop exercises, red team engagements, and post-mortems — respond faster, contain damage better, and recover more completely. It's not glamorous work, but it's the difference between a security incident and a security catastrophe.

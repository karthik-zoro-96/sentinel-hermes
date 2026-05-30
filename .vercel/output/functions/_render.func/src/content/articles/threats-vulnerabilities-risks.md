---
title: Threats, Vulnerabilities, and Risks — What's the Difference?
topic: The Basics
order: 2
readTime: 5 min read
---

These three words get thrown around interchangeably. They're not the same thing, and understanding the difference is foundational to thinking clearly about security.

## Vulnerability

A **vulnerability** is a weakness. A flaw. Something that *could* be exploited.

Examples:
- A piece of software with a bug that lets an attacker run unauthorized code
- A server that hasn't been updated with the latest security patches
- An employee who hasn't been trained to recognize phishing emails
- A database that's accessible from the internet without authentication

A vulnerability is a condition. It exists whether or not anyone is trying to exploit it. Your house has a vulnerability if it has an unlocked window — whether or not a burglar knows about it.

Vulnerabilities get tracked and cataloged. The **CVE system** (Common Vulnerabilities and Exposures) assigns unique IDs to publicly known vulnerabilities — over 200,000 so far. Each one describes a specific weakness in a specific product or system.

## Threat

A **threat** is the potential for someone or something to exploit a vulnerability and cause harm.

Examples:
- A criminal group that targets companies with ransomware
- A disgruntled employee with access to sensitive data
- A nation-state actor conducting espionage
- A natural disaster that takes out a data center

A threat has two components: **capability** (can they do it?) and **intent** (will they?). A script kiddie running automated scans is a threat. A sophisticated hacking group with resources and a specific target is a much bigger one.

Threats can be:
- **Intentional** — A hacker, a malicious insider, a nation-state
- **Unintentional** — An employee who accidentally deletes a database, a power outage
- **Environmental** — Natural disasters, hardware failures

## Risk

**Risk** is what you get when you combine a vulnerability with a threat. It's the *likelihood* and *impact* of something bad actually happening.

Risk = Threat × Vulnerability × Impact

Examples:
- **High risk**: Your customer database is unencrypted, accessible from the internet, and your industry is actively being targeted by ransomware groups. All three factors are present.
- **Low risk**: Your internal test server has a known vulnerability, but it's not accessible from the internet, has no real data, and no threat actor cares about it.

This is why security is about **prioritization**. You can't fix every vulnerability. You can't defend against every threat. So you focus on the risks that matter most — the ones where a capable threat actor is likely to exploit a vulnerability that would cause real damage.

## How professionals use this

When a security team says "we need to assess our risk," they mean:
1. What do we have that's valuable? (assets)
2. What vulnerabilities exist? (weaknesses)
3. Who might exploit them and how? (threats)
4. What's the realistic impact if they succeed? (consequences)
5. What should we do first? (prioritization)

This process is called **risk assessment**, and it's the backbone of how organizations make security decisions — from what patches to apply first to where to spend the security budget.

## The mistake most people make

They focus on vulnerabilities without thinking about threats. "This software has 50 known vulnerabilities!" — sure, but if those vulnerabilities require physical access to exploit and your system is air-gapped (not connected to any network), the *risk* is very different than if it's a public-facing web server.

Conversely, people sometimes obsess over threats without fixing vulnerabilities. "We might be targeted by nation-states!" — maybe, but if your password is `admin123`, you don't need a nation-state to break in. A script will do it.

## The bottom line

- **Vulnerability**: A weakness that exists
- **Threat**: Something that could exploit it
- **Risk**: The realistic chance and impact of it happening

Think in terms of risk, not just vulnerabilities or threats alone. That's how security professionals prioritize — and how you should too.

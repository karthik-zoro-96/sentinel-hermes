---
title: What is Zero Trust?
topic: How Defense Works
order: 5
readTime: 6 min read
---

Zero trust is one of the most important shifts in security thinking in the last decade. It's also one of the most poorly understood and most heavily marketed (as "zero trust" has become a buzzword that vendors slap on everything). Let's talk about what it actually means.

## The old model: Castle and moat

Traditional network security worked like a medieval castle:

- Build strong perimeter defenses (firewalls, VPNs, DMZ)
- Everything inside the perimeter is trusted
- Everything outside is untrusted
- Once you're in, you have broad access

This model assumed that if you authenticated at the gate, you belonged. The problem: the perimeter has dissolved. Cloud computing, remote work, SaaS applications, mobile devices — there's no clear "inside" and "outside" anymore. An attacker who breaches the perimeter has access to everything inside.

## The zero trust model

Zero trust flips the assumption: **never trust, always verify.**

The core principles:

1. **Verify explicitly.** Authenticate and authorize every access request based on all available data — identity, location, device health, service or workload, data classification, anomalies. Every time. No exceptions.

2. **Use least-privilege access.** Give users and systems only the minimum access needed to do their job, and only for as long as they need it. Just-in-time and just-enough-access (JIT/JEA).

3. **Assume breach.** Operate as if the network is already compromised. Minimize blast radius with microsegmentation. Verify end-to-end encryption. Use analytics to get visibility, drive threat detection, and improve defenses.

## What this looks like in practice

**Identity is the new perimeter.** Instead of trusting traffic because it's inside the network, you verify the identity of every user and device for every resource they try to access — regardless of where the request originates.

**Microsegmentation.** Instead of one flat internal network, you divide the network into small zones. A compromised workstation can't freely move to your database servers because each segment requires separate authentication and authorization.

**Continuous verification.** It's not enough to authenticate once at login. Systems continuously evaluate risk signals: Is this user's behavior unusual? Is the device running an outdated OS? Is the request coming from an unexpected location? If risk increases, access can be restricted or require step-up authentication.

**Device trust matters too.** A managed, patched, company-owned device with a healthy posture gets more access than a personal device with an unknown security status.

## It's a strategy, not a product

"Zero trust" is not something you buy. It's an architecture and a set of principles. Vendors will sell you "zero trust solutions," but a single product doesn't get you there.

Implementing zero trust typically involves:
- **Identity and Access Management (IAM)** — Strong authentication (MFA), identity governance
- **Endpoint security** — Device health monitoring, compliance checks
- **Network segmentation** — Microsegmentation, software-defined perimeters
- **Data classification and protection** — Knowing what your sensitive data is and where it lives
- **Visibility and analytics** — Monitoring all access and traffic to detect anomalies
- **Policy enforcement** — Automated decision-making based on risk signals

## The honest assessment

Zero trust is not new magic. Many of its principles — least privilege, defense in depth, continuous monitoring — existed before the term was coined. What zero trust does effectively is provide a **framework** for applying these principles in a world where the traditional perimeter doesn't exist.

It's also not implementable overnight. Most organizations move toward zero trust gradually, starting with the highest-value systems and working outward. A full zero trust architecture takes years of incremental improvement.

The US federal government mandated zero trust adoption by federal agencies (Executive Order 14028, OMB M-22-09), which has driven both genuine adoption and vendor marketing.

## Common criticisms

- **"It's just marketing."** Partially fair — many vendors rebrand existing products as "zero trust." But the underlying principles are sound and based on real architectural needs.
- **"It degrades user experience."** Can be true if implemented poorly. Good zero trust design uses risk-based signals so low-risk access feels seamless, and high-risk access triggers additional verification.
- **"You still need perimeter security."** True. Zero trust doesn't mean you remove firewalls. It means you don't rely on them alone.

## The bottom line

Zero trust is a response to a real problem: the traditional perimeter-based security model doesn't match how modern organizations work. By assuming no implicit trust based on network location and verifying every access request based on identity, device health, and context, you dramatically reduce the blast radius of any single compromise.

The name sounds like marketing because it is heavily marketed. But the underlying idea — verify everything, trust nothing by default — is one of the most important principles in modern security architecture.

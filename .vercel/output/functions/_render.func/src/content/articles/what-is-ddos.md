---
title: What is a DDoS Attack?
topic: How Attacks Work
order: 4
readTime: 5 min read
---

DDoS stands for Distributed Denial of Service. It's one of the simplest attack types conceptually, but one of the hardest to defend against at scale. The goal isn't to steal data or break encryption — it's simply to make a service unavailable by overwhelming it.

## How it works

Every server, website, and online service has a limit to how much traffic it can handle. A DDoS attack floods that service with more requests than it can process, exhausting its resources until it becomes unresponsive for legitimate users.

The "distributed" part matters. A single computer trying to overwhelm a server would be easy to block. Instead, the attacker uses a **botnet** — thousands or millions of compromised devices (computers, IoT devices, servers) that all send requests simultaneously. Blocking one source does nothing because there are thousands more.

## Types of DDoS attacks

**Volumetric attacks** — Attempt to saturate the target's bandwidth. The most common type is **UDP floods**, where the attacker sends a massive volume of UDP packets to random ports on the target. The target has to process each one, consuming bandwidth and processing capacity.

**Protocol attacks** — Exploit weaknesses in network protocols. A classic example is the **SYN flood**: the attacker sends TCP connection requests (SYN packets) but never completes the handshake. The target's connection table fills up with half-open connections, preventing legitimate users from connecting.

**Application-layer attacks** — The most surgical type. Instead of brute-forcing bandwidth, the attacker targets specific application functions. For example, repeatedly requesting a complex database query that consumes significant server resources but requires minimal bandwidth from the attacker. These are harder to detect because each individual request looks legitimate.

## Scale

Modern DDoS attacks can generate multiple terabits per second of traffic. In 2023, Cloudflare reported mitigating an attack exceeding 71 million requests per second. Google mitigated a 46 million requests per second attack in 2022. These numbers exceed what most organizations could ever provision for.

## Motivation varies

- **Extortion** — "Pay us or we'll take your site offline." Ransom DDoS (RDDoS) attacks became common, with attackers sending threatening emails and following up with a demonstration attack.
- **Hacktivism** — Taking down a website as a political statement
- **Competitive sabotage** — Disrupting a competitor's service
- **Distraction** — Launching a DDoS to draw security team attention while pursuing a different attack (like data exfiltration)
- **Griefing** — Online gaming communities and forums are frequently targeted by individuals with access to DDoS-for-hire services

## DDoS-for-hire

You don't need technical skills. "Booter" and "stresser" services offer DDoS attacks for as little as $10-50. They market themselves as "network testing tools" but are openly used for attacks. Some have been shut down and their operators prosecuted, but new ones appear constantly.

## Defense

Defending against DDoS is about scale and intelligence:

- **CDN and DDoS mitigation services** (Cloudflare, Akamai, AWS Shield) — These operate networks large enough to absorb massive attack volumes. They distribute traffic across global data centers and filter malicious requests.
- **Rate limiting** — Restricting how many requests a single source can make in a given time period
- **Anycast routing** — Distributing traffic across multiple data centers so no single point bears the full load
- **Traffic analysis** — Distinguishing attack traffic from legitimate users based on behavior patterns
- **Blackhole routing** — In extreme cases, routing attack traffic to a null interface. This stops the attack but also makes the service unavailable — a last resort.
- **Over-provisioning** — Having more bandwidth and server capacity than you normally need. Works for small attacks, not for large ones.

The key insight: you probably can't beat a large DDoS attack with your own infrastructure. You need to upstream it to a provider with more capacity than the attacker.

## The bottom line

DDoS attacks are about availability — one of the three pillars of the CIA Triad. They don't steal data, but they can make your service unusable, which for many businesses is just as damaging.

The best defense is a combination of upstream mitigation services, good traffic monitoring, and an incident response plan that includes DDoS scenarios. Because it's not a question of *if* you'll face a DDoS attempt — for many internet-facing services, it's *when*.

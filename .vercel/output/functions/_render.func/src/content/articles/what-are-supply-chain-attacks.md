---
title: What are Supply-Chain Attacks?
topic: Advanced Concepts
order: 1
readTime: 6 min read
---

A supply-chain attack is one of the most effective and hardest-to-defend-against attack types. Instead of attacking you directly, the attacker compromises someone you trust — a vendor, a software provider, a library your code depends on — and uses that trust to reach you.

## The concept

Every organization depends on a chain of suppliers: software vendors, cloud providers, open-source libraries, hardware manufacturers, service providers. Each of these is a potential attack vector.

A supply-chain attack exploits the trust relationship between you and your suppliers. You trust that the software update from your vendor is legitimate. You trust that the open-source library you import hasn't been tampered with. An attacker who compromises the supplier inherits that trust.

## Famous examples

**SolarWinds (2020)** — The most significant supply-chain attack in history. Russian intelligence actors (APT29/Cozy Bear) compromised SolarWinds' build system and inserted malware into the Orion platform's software update. When approximately 18,000 organizations installed the legitimate update, they were also installing a backdoor. Victims included US government agencies (Treasury, Homeland Security, parts of the Pentagon) and major corporations. The attackers had months of undetected access.

**Codecov (2021)** — Attackers modified Codecov's Bash Uploader script (a tool used by thousands of companies to upload code coverage reports) to exfiltrate environment variables, including credentials and tokens, from CI/CD pipelines. The compromise went undetected for months.

**3CX (2023)** — The desktop app of 3CX (a VoIP platform used by over 600,000 organizations) was compromised through a dependency on a compromised library from Trading Technologies. North Korean threat actors were behind it.

**XZ Utils (2024)** — A maintainer of the XZ compression library (used in most Linux distributions) was slowly socially engineered over two years to hand over maintainership to an attacker who inserted a backdoor. The backdoor was discovered by a Microsoft engineer who noticed a 0.5-second delay in SSH logins. It could have been one of the most impactful backdoors in history.

**event-stream (2018)** — A popular npm package (2 million weekly downloads) was transferred to a new maintainer who added a dependency that exfiltrated Bitcoin wallet credentials.

## Why they're so effective

**Scale.** Compromise one supplier, reach thousands of victims. SolarWinds gave access to 18,000 organizations through a single point of compromise.

**Trust bypass.** The malicious code comes through a trusted channel — a legitimate software update, a signed package, a verified vendor. Your security tools see it as authorized.

**Detection difficulty.** The malicious code is often mixed with legitimate functionality. It may use the same signing certificates, the same update mechanisms, the same distribution channels as legitimate software.

**Access quality.** Supply-chain attacks often give the attacker the same level of access as the legitimate software. If the compromised software runs with admin privileges, so does the attacker.

## Types

**Software supply chain** — Compromising software before it reaches the user (build system compromise, update mechanism hijack, dependency confusion).

**Hardware supply chain** — Tampering with hardware during manufacturing or distribution. Harder to execute but potentially devastating (implanted chips, modified firmware).

**Service provider / MSP compromise** — Attacking a managed service provider to reach all their customers. The Kaseya attack (2021) used this model.

**Open-source compromise** — Injecting malicious code into widely-used open-source projects through compromised maintainer accounts, social engineering, or typosquatting (publishing malicious packages with names similar to legitimate ones).

## Defense

Defending against supply-chain attacks is hard because you're defending against threats in systems you don't control:

- **Software Bill of Materials (SBOM)** — Know what's in your software. An SBOM is a list of all components, libraries, and dependencies. When a vulnerability is disclosed, you can quickly determine if you're affected.
- **Dependency scanning** — Automated tools that check your dependencies for known vulnerabilities and suspicious changes.
- **Code signing verification** — Verify that software updates are signed by the expected publisher.
- **Vendor risk management** — Assess the security posture of your critical vendors. What's their security like? How do they handle updates? Do they have incident response capabilities?
- **Network segmentation** — Even if a supply-chain attack compromises a system, segmentation limits lateral movement.
- **Behavioral monitoring** — EDR and network monitoring can detect unusual activity from trusted software.
- **Zero trust principles** — Don't trust software just because it's from a known vendor. Verify and monitor.

## The bottom line

Supply-chain attacks exploit the fundamental reality of modern technology: no organization builds everything itself. We all depend on vendors, libraries, and service providers. That interdependence is a strength for productivity and a vulnerability for security.

The SolarWinds attack changed how governments and enterprises think about supply-chain risk. It demonstrated that even well-resourced organizations with mature security programs can be compromised through a trusted vendor.

You can't eliminate supply-chain risk. But you can reduce it through visibility (knowing what's in your software), monitoring (detecting unusual behavior from trusted sources), and architecture (limiting the blast radius when — not if — a trusted component is compromised).

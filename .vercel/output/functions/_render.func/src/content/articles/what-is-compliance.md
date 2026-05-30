---
title: What is Compliance (SOC 2, ISO 27001)?
topic: For Organizations
order: 4
readTime: 6 min read
---

Compliance and security are not the same thing. This is one of the most important — and most misunderstood — distinctions in cybersecurity.

## The difference

**Security** is the practice of protecting systems and data.

**Compliance** is demonstrating that you meet a specific set of requirements defined by a regulation, standard, or law.

An organization can be compliant without being secure. They can check every box on a framework and still get breached. Conversely, an organization can have strong security practices but fail compliance because they didn't document things properly.

Compliance is a **baseline**, not a ceiling. It's the minimum acceptable standard, not the goal.

## Major frameworks

**SOC 2 (Service Organizations Control 2)** — An audit framework developed by the AICPA (American Institute of CPAs). Common for SaaS companies and service providers. Focuses on five "trust service criteria": security, availability, processing integrity, confidentiality, and privacy.

- **Type I** — Assesses whether controls are properly *designed* at a point in time
- **Type II** — Assesses whether controls are *operating effectively* over a period (typically 6-12 months)

Customers increasingly require SOC 2 reports from their vendors. It's become a baseline requirement for B2B SaaS companies.

**ISO 27001** — An international standard for information security management systems (ISMS). More comprehensive than SOC 2 and recognized globally. Requires establishing, implementing, maintaining, and continually improving a formal security management system.

Certification requires an initial audit (Stage 1: document review, Stage 2: implementation audit) and ongoing surveillance audits annually, with recertification every three years.

**PCI DSS (Payment Card Industry Data Security Standard)** — Mandatory for any organization that processes, stores, or transmits credit card data. Requirements include network segmentation, encryption, access control, monitoring, and regular testing.

**HIPAA (Health Insurance Portability and Accountability Act)** — Governs protection of health information in the US. Requires administrative, physical, and technical safeguards.

**NIST Cybersecurity Framework (CSF)** — A voluntary framework organized around five functions: Identify, Protect, Detect, Respond, Recover. Widely adopted as a common language for discussing security posture. Increasingly used as a basis for regulatory requirements.

## The compliance process

For most frameworks, the process looks similar:

1. **Gap assessment** — Where are we relative to the requirements?
2. **Remediation** — Fix what's deficient
3. **Implementation** — Deploy controls, write policies, train people
4. **Evidence collection** — Document that controls are operating (logs, screenshots, policy documents, training records)
5. **Audit** — Independent auditor reviews evidence and tests controls
6. **Report/certification** — Auditor issues report or certificate
7. **Ongoing maintenance** — Continue operating controls and collecting evidence for the next audit cycle

## The problem with compliance-driven security

When compliance is the primary driver, organizations optimize for passing the audit rather than being secure:

- **Checkbox mentality** — "Do we have a policy?" instead of "Is this actually effective?"
- **Snapshot in time** — Compliance is assessed periodically; attacks happen continuously
- **Minimum viable security** — Doing the minimum to pass, not what's actually needed
- **Documentation over action** — Well-documented weak controls pass audits; undocumented strong controls fail them

This is why organizations can be SOC 2 certified and still get breached. The audit assesses whether controls exist and operate, not whether they're sufficient to stop a determined attacker.

## Why compliance matters anyway

Despite its limitations, compliance serves real purposes:

- **Baseline** — It establishes a minimum standard. Without it, many organizations would do nothing.
- **Accountability** — The audit process creates organizational accountability for security practices.
- **Trust signal** — SOC 2 and ISO 27001 reports tell customers and partners that a third party has validated your security practices.
- **Regulatory requirement** — In many industries, compliance isn't optional. You can't process credit cards without PCI DSS. You can't handle health data without HIPAA compliance.
- **Insurance** — Cyber insurance increasingly requires evidence of security controls and compliance.

## The bottom line

Compliance is a necessary but insufficient condition for security. It provides structure, accountability, and a baseline. But it's a defensive play — it tells you you're not the worst, not that you're safe.

The best security programs use compliance as a framework to build on, not a target to aim for. They satisfy the audit requirements because they're doing the right things for operational reasons, not the other way around.

If your security program exists solely to pass an audit, it's a security program in name only. If compliance is a natural byproduct of doing security well, you're in the right place.

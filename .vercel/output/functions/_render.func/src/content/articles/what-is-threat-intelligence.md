---
title: What is Threat Intelligence?
topic: Advanced Concepts
order: 4
readTime: 5 min read
---

Threat intelligence is evidence-based knowledge about current and emerging cyber threats. It's the difference between reacting to attacks as they happen and anticipating them before they reach you.

## The concept

Threat intelligence takes raw data — indicators of compromise, attack patterns, threat actor profiles, vulnerability disclosures — and turns it into actionable knowledge:

- **Who** is likely to attack you?
- **What** are they after?
- **How** do they operate?
- **When** are they most likely to strike?
- **What** should you do about it?

Without threat intelligence, you're defending blindly. With it, you can prioritize defenses, detect threats earlier, and respond more effectively.

## Levels of intelligence

**Strategic intelligence** — High-level analysis for decision-makers. "Chinese APT groups are increasingly targeting semiconductor companies." Informs investment and risk decisions.

**Operational intelligence** — About specific planned or ongoing campaigns. "A new ransomware group is targeting healthcare organizations with this specific phishing template."

**Tactical intelligence** — About specific techniques and tools. "This attack chain uses PowerShell to download Cobalt Strike." Helps configure defenses and detection rules.

**Technical / IOCs (Indicators of Compromise)** — The most granular level. Specific IP addresses, file hashes, domain names, and malware samples associated with known threats. Used to configure firewalls, IDS/IPS, and EDR tools.

## Sources

**Open source (OSINT)** — Publicly available information: security blogs, vulnerability databases (CVE), dark web monitoring, social media. Much of threat intelligence is derived from open sources.

**Commercial feeds** — Companies like Recorded Future, Mandiant, CrowdStrike, and Intel 471 sell curated threat intelligence feeds with varying levels of analysis and timeliness.

**ISACs (Information Sharing and Analysis Centers)** — Industry-specific groups where organizations share threat intelligence. FS-ISAC for financial services, H-ISAC for healthcare, IT-ISAC for technology. Trusted sharing within an industry.

**Government** — US agencies (CISA, FBI, NSA) issue advisories and share intelligence with critical infrastructure and government partners. The UK's NCSC, Australia's ACSC, and others do the same.

**Internal** — Your own incident data, security tool telemetry, and threat hunting findings are often the most relevant intelligence because they're specific to your environment.

## The intelligence lifecycle

1. **Direction** — What questions need answers? What decisions need to be informed?
2. **Collection** — Gathering data from relevant sources
3. **Processing** — Organizing and structuring raw data
4. **Analysis** — Turning data into intelligence: What does it mean? What's the confidence level?
5. **Dissemination** — Getting the intelligence to the people who need it, in a format they can use
6. **Feedback** — Was it useful? What else is needed?

## How organizations use it

- **Threat hunting** — Proactively searching for known threat activity in your environment
- **Detection engineering** — Building detection rules based on known attack techniques
- **Vulnerability prioritization** — Not all CVEs matter equally. Threat intelligence tells you which ones are actively being exploited.
- **Incident response** — When an incident occurs, threat intelligence provides context: Is this a known group? What's their typical playbook?
- **Risk assessment** — Understanding which threat actors target your industry and what they're after

## The bottom line

Threat intelligence turns security from reactive to proactive. Instead of waiting for an alert and then figuring out what happened, you understand the threat landscape, you know who's coming after you, and you can prepare.

Not every organization needs a dedicated threat intelligence team. Smaller organizations can benefit from commercial intelligence feeds and industry ISACs. Larger organizations, especially in critical infrastructure, government, and finance, increasingly operate their own intelligence functions.

The key is that intelligence must be **actionable**. Data isn't intelligence. A list of IP addresses isn't useful unless you can block them, detect connections to them, or use them to hunt for compromise. The value is in the analysis and the action it enables.

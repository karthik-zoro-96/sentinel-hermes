---
title: What is Antivirus?
topic: How Defense Works
order: 2
readTime: 4 min read
---

Antivirus (AV) is the oldest category of security software. It's been around since the late 1980s, and it's evolved significantly — but it's also the security tool most people have a false sense of confidence in.

## What it does

Traditional antivirus works by scanning files and comparing them against a database of known malware **signatures** — unique patterns that identify specific malware. When a match is found, the AV quarantines or deletes the file.

Modern antivirus (now usually called **Endpoint Protection Platforms** or **Endpoint Detection and Response — EDR**) goes beyond signatures:

- **Heuristic analysis** — Detecting malware by behavior patterns rather than exact signatures. If a program starts encrypting lots of files rapidly, that's suspicious regardless of whether it's a known variant.
- **Sandboxing** — Running suspicious files in an isolated environment to observe what they do before allowing them on the real system.
- **Machine learning** — Using trained models to identify malicious files based on features, even if they've never been seen before.
- **Behavioral monitoring** — Watching for suspicious system activity in real-time (process injection, registry modifications, network connections to known bad IPs).

## What it's good at

- **Known malware** — If the malware is in the signature database, AV catches it reliably.
- **Common threats** — Mass-distributed malware, trojans, and commodity threats are well-covered.
- **First layer of defense** — It's a baseline. You should have it, even though it's not sufficient alone.

## What it's not good at

- **Zero-days** — Unknown malware with no signature and no behavioral history can evade detection, at least initially.
- **Fileless malware** — Malware that runs entirely in memory without writing files to disk is invisible to traditional file-scanning AV.
- **Living-off-the-land attacks** — Attackers using legitimate system tools (PowerShell, WMI, certutil) to carry out malicious actions. The tools aren't malicious — the intent is.
- **Sophisticated targeted attacks** — Nation-state actors and advanced criminal groups specifically test their malware against major AV products before deployment.
- **User-level threats** — AV doesn't stop you from entering your password on a phishing site.

## The detection gap

There's always a gap between when new malware appears and when AV vendors add detection for it. During that window, the malware is undetectable by signature-based methods. This is why behavioral detection and EDR matter — they can catch novel threats based on what they *do*, not just what they *are*.

## Do you still need it?

Yes, but with adjusted expectations:

- **For individuals:** Modern operating systems include decent built-in protection (Windows Defender, XProtect on macOS). For most people, this is sufficient when combined with good habits (updates, MFA, not downloading random files).
- **For organizations:** You need EDR, not just traditional AV. The behavioral detection, centralized management, and incident response capabilities of EDR are essential. Products like CrowdStrike, SentinelOne, Microsoft Defender for Endpoint, or Elastic Security are the modern standard.

## The bottom line

Antivirus is a necessary but insufficient security control. It catches known threats and provides a baseline of protection, but it won't stop sophisticated or novel attacks. Think of it as a seatbelt — essential, but it doesn't make you a safe driver.

The evolution from "antivirus" to "endpoint detection and response" reflects the reality that detection and response matter as much as prevention. You can't block everything. You need to detect what gets through and respond quickly.

---
title: What is a VPN?
topic: How Defense Works
order: 4
readTime: 5 min read
---

A VPN — Virtual Private Network — is one of the most recommended and most misunderstood security tools. Let's separate what it actually does from what marketing says it does.

## What a VPN actually does

A VPN creates an encrypted tunnel between your device and a VPN server. All your internet traffic flows through that tunnel.

Without VPN:
```
Your device → Your ISP → Website
(ISP sees what you're visiting)
```

With VPN:
```
Your device → [encrypted tunnel] → VPN server → Website
(VPN server sees what you're visiting; ISP sees encrypted traffic)
```

The ISP can see you're connected to a VPN, but can't see the contents or destinations of your traffic. The website sees the VPN server's IP address, not yours.

## What it's good for

**On untrusted networks.** Public WiFi at airports, hotels, and coffee shops is inherently untrusted — anyone on the same network could potentially intercept your traffic. A VPN encrypts it. This is the most legitimate, clear use case.

**Hiding traffic from your ISP.** Your ISP can see (and in some jurisdictions, sell) what sites you visit. A VPN prevents this — the ISP only sees encrypted traffic to the VPN server.

**Bypassing geographic restrictions.** Some content and services are restricted by region. A VPN server in a different country makes it appear you're browsing from there. Note that many services actively try to detect and block VPN traffic.

**Working securely from home.** Corporate VPNs let employees access internal company resources as if they were on the company network. This isn't marketing spin — it's a real and widely used business tool.

## What it doesn't do

**It doesn't make you anonymous.** The VPN provider can see your traffic (unless you're using additional tools like Tor). You've shifted trust from your ISP to the VPN provider. If the VPN keeps logs and is compelled by law enforcement, your data is accessible.

**It doesn't stop websites from tracking you.** Cookies, browser fingerprinting, login sessions — these all work regardless of VPN. Google still knows it's you when you log into Gmail, VPN or not.

**It doesn't protect you from phishing, malware, or social engineering.** A VPN encrypts traffic in transit. It doesn't stop you from entering your password on a fake site or downloading malware.

**It doesn't protect you from the VPN provider itself.** You must trust the VPN provider. If they log traffic, have poor security, or are themselves compromised, your privacy is at risk. "No-log" policies are difficult to verify independently.

**It doesn't make you "secure" as a general state.** It's one specific tool for a specific set of problems.

## Choosing a VPN

If you decide a VPN is useful for your situation:

- **Free VPNs are often worse than no VPN.** If the service is free, you're likely the product. Several free VPN apps have been caught logging and selling user data.
- **Look for independent audits.** Reputable VPNs undergo security audits by third parties and publish the results.
- **Jurisdiction matters.** A VPN based in a country with mandatory data retention laws or in intelligence-sharing alliances (Five Eyes, Nine Eyes) faces different legal pressures.
- **Open-source clients** are preferable — the code can be independently reviewed.

The most respected options as of 2026: Mullvad, ProtonVPN, and IVPN. They've all been independently audited and have strong privacy commitments.

## The honest assessment

VPNs are marketed as essential security tools for everyone. The reality is more nuanced:

- **If you frequently use public WiFi**, yes, a VPN is genuinely useful.
- **If you want to hide browsing from your ISP**, a VPN does this (but consider whether you trust the VPN provider more than your ISP).
- **If you're a journalist, activist, or in a hostile environment**, a VPN is part of your toolkit (alongside Tor, encrypted messaging, and other tools).
- **If you're a typical user on your home network** who's worried about hackers, a VPN adds relatively little value compared to using MFA, keeping software updated, and using a password manager.

## The bottom line

A VPN is a privacy tool that encrypts traffic between you and the VPN server. It's legitimately useful in specific situations. It is not a magic "I'm now secure" button, and VPN marketing dramatically overstates what it does for the average person.

The most important thing: don't let a VPN give you false confidence. Real security is about the fundamentals — MFA, updates, backups, critical thinking about what you click.

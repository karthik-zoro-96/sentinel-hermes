---
title: What is a Firewall?
topic: How Defense Works
order: 1
readTime: 5 min read
---

A firewall is the oldest and most fundamental network security tool. Think of it as a gatekeeper that controls what traffic is allowed in and out of a network based on predefined rules.

## The basic concept

A firewall sits between networks — typically between your internal network and the internet — and inspects every packet of data that tries to pass through. Based on rules, it decides: allow or block.

The rules can be simple or complex:
- "Allow inbound traffic on port 443 (HTTPS)"
- "Block all inbound traffic from this IP range"
- "Allow outbound traffic to any destination on port 80"
- "Block inbound traffic unless it's part of an established connection"

That's the core. Everything else is elaboration.

## Types of firewalls

**Packet-filtering firewalls** — The simplest type. They look at individual packets and make allow/block decisions based on source/destination IP, port, and protocol. Fast but limited — they can't understand context or application-level content.

**Stateful inspection firewalls** — Track the state of active connections. They know whether an outgoing request was made and can allow the response back in, while blocking unsolicited inbound traffic. This is the standard for most modern firewalls.

**Next-generation firewalls (NGFW)** — Add application-layer awareness. They can identify applications regardless of port (e.g., recognizing BitTorrent even if it's not using its default port), inspect encrypted traffic (with proper configuration), and integrate threat intelligence feeds.

**Web Application Firewalls (WAF)** — Specifically protect web applications by inspecting HTTP/HTTPS traffic for common attacks like SQL injection, cross-site scripting (XSS), and other application-layer exploits.

**Cloud firewalls (FWaaS)** — Firewall-as-a-Service. Instead of a physical appliance, the firewall runs in the cloud. Increasingly common as organizations move infrastructure to cloud providers.

## What firewalls do well

- **Network segmentation** — Creating internal boundaries so that a compromise in one area doesn't mean compromise everywhere. For example, your guest WiFi on a completely separate network from your accounting systems.
- **Access control** — Enforcing rules about which services are reachable from where
- **Basic threat blocking** — Blocking known bad IPs or traffic patterns

## What firewalls can't do

- **Stop phishing** — If a user clicks a link in an email, that traffic goes through the firewall just like any other web traffic
- **Stop insider threats** — An authorized user doing something malicious generates legitimate-looking traffic
- **Inspect all encrypted traffic** — Without TLS decryption (which has its own complications), encrypted payloads are opaque to the firewall
- **Stop zero-days** — If an exploit uses allowed protocols and ports, the firewall lets it through
- **Replace other security controls** — A firewall is one layer, not the whole defense

## The modern context

The traditional network perimeter has blurred significantly. With cloud computing, remote work, and SaaS applications, the "inside" and "outside" of a network are no longer clear. This is part of why **zero trust** architecture has gained traction — the idea that you shouldn't trust traffic just because it's inside the firewall.

That doesn't make firewalls obsolete. It means they're one layer in a defense strategy, not the whole strategy. You still need network segmentation, internal firewalls between network segments (sometimes called **microsegmentation**), and perimeter firewalls for internet-facing services.

## The bottom line

A firewall is a traffic cop for your network. It enforces rules about what comes in and what goes out. It's been around since the late 1980s, and it's still essential — not because it's revolutionary, but because controlling network access is a fundamental security requirement.

But a firewall alone is like having a locked front door and no other security. Necessary? Yes. Sufficient? Not even close.

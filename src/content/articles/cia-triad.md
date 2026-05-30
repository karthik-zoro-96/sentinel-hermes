---
title: The CIA Triad — Confidentiality, Integrity, Availability
topic: The Basics
order: 3
readTime: 5 min read
---

If there's one framework that underpins all of security, it's the CIA Triad. Not the agency — the model. Every security decision, every attack, every defense can be understood through these three lenses.

## Confidentiality — Only the right people see the right stuff

Confidentiality is about preventing unauthorized access to information.

When confidentiality fails:
- A hacker reads your company's financial records
- A hospital employee celebrity's medical file out of curiosity
- An attacker intercepts your credit card number during an online purchase
- A leaked database exposes millions of user emails and passwords

**How we protect confidentiality:**
- **Encryption** — Scrambling data so only someone with the key can read it
- **Access controls** — Defining who can access what (permissions, roles)
- **Authentication** — Verifying that someone is who they claim to be
- **Network segmentation** — Isolating sensitive systems from general access

Confidentiality is what most people think of first when they hear "security." But it's only one-third of the picture.

## Integrity — Data isn't tampered with

Integrity is about ensuring information is accurate, complete, and unaltered — unless the alteration is authorized.

When integrity fails:
- An attacker modifies transaction amounts in a banking system
- A student changes their grades in the school's database
- Malware alters system files to maintain persistence on a compromised machine
- A man-in-the-middle attack modifies data in transit between you and a website

**How we protect integrity:**
- **Hashing** — Running data through a mathematical function that produces a unique fingerprint. Change one bit of the input and the hash changes completely.
- **Digital signatures** — Using cryptography to prove that data came from a specific source and wasn't modified
- **Version control and logging** — Tracking changes so unauthorized modifications can be detected and undone
- **Checksums** — Verifying that files haven't been corrupted or tampered with

Integrity violations can be harder to detect than confidentiality breaches. If someone copies your data, you might never know. If someone changes your data, the consequences can cascade — you're now making decisions based on corrupted information.

## Availability — Systems work when you need them

Availability is about ensuring that systems and data are accessible to authorized users when they need them.

When availability fails:
- A DDoS attack overwhelms a website so legitimate users can't access it
- Ransomware encrypts a hospital's systems and they can't access patient records
- A critical server crashes and there's no backup
- A cloud provider has an outage and your service goes down

**How we protect availability:**
- **Backups** — Having copies of data and systems that can be restored quickly
- **Redundancy** — Running duplicate systems so if one fails, another takes over
- **DDoS protection** — Filtering malicious traffic before it overwhelms your systems
- **Disaster recovery planning** — Having a tested plan for getting systems back online

Availability is often overlooked in security discussions, but for many organizations it's the most critical dimension. If your customers can't access your service, confidentiality and integrity don't matter much.

## How they interact

These three principles are in tension with each other:

- **Stronger confidentiality** often means more access controls, which can reduce availability for legitimate users
- **Strict integrity checks** add processing overhead, which can impact availability
- **High availability** through redundancy means more copies of data, which can increase the attack surface for confidentiality

Security is about finding the right balance. A nuclear power plant's control system prioritizes integrity and availability above all — if the system gives wrong readings or goes down, people die. A messaging app prioritizes confidentiality — the content of your messages should be private. An e-commerce site prioritizes availability — if customers can't browse and buy, you lose money.

## The bottom line

Every security incident breaks one or more of these:
- **Confidentiality breach** — Someone saw something they shouldn't have
- **Integrity breach** — Something was changed it shouldn't have been
- **Availability breach** — Something stopped working when it should have been working

And every security control protects one or more of these. When you understand the CIA Triad, you can analyze any security situation — an attack, a defense, a policy decision — and figure out what's really at stake.

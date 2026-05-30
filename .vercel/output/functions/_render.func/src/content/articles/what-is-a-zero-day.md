---
title: What is a Zero-Day?
topic: How Attacks Work
order: 6
readTime: 5 min read
---

A zero-day is one of the most powerful weapons in cybersecurity — and the term gets thrown around a lot, often imprecisely. Understanding what it actually means explains a lot about how the offensive and defensive sides of security operate.

## The definition

A **zero-day** (0-day) is a vulnerability that is unknown to the software vendor and the security community. The name comes from the fact that the vendor has had **zero days** to fix it — they don't even know it exists yet.

A zero-day **exploit** is a working attack that takes advantage of that vulnerability. Having a zero-day exploit means you can compromise systems that are fully patched, because the patch for this specific flaw doesn't exist yet.

## The lifecycle

1. **Discovery** — Someone finds a vulnerability in software. This could be a security researcher, a nation-state intelligence agency, or a criminal group.
2. **Exploit development** — They turn the vulnerability into a working exploit — code that reliably triggers the flaw and achieves the desired effect (running code, escalating privileges, etc.).
3. **Use or disclosure** — This is the fork in the road:
   - **Responsible disclosure**: Report it to the vendor, give them time to develop a patch, then publish details
   - **Sell it**: On the gray or black market, a single zero-day exploit can sell for $500,000 to $2.5 million
   - **Use it**: Deploy it in attacks, hoping nobody notices
4. **Discovery by others** — Either through the attack being detected, independent discovery, or the researcher/market going public
5. **Patch release** — The vendor releases a fix. Now it's no longer a zero-day. It's an **n-day** (known vulnerability with available patch).
6. **Patch adoption** — Organizations apply the patch. The window of vulnerability closes. But many systems remain unpatched long after the fix is available.

## Why they're so dangerous

Zero-days bypass traditional security defenses because:

- **Signature-based detection** doesn't know what to look for — no patch means no signature
- **Patch management** is useless — there's no patch to apply
- **Firewalls and network monitoring** may allow the traffic because the exploit uses legitimate protocols

The only defense against a zero-day is **defense in depth** — layers of security that can detect or limit damage from unknown threats: behavioral monitoring, network segmentation, least-privilege access, and rapid detection and response.

## Who uses them

**Nation-states** are the biggest consumers. Zero-days are strategic cyber weapons. The **Stuxnet** attack that damaged Iranian nuclear centrifuges used four zero-days. Nations invest heavily in discovering and stockpiling them.

**Criminal groups** buy zero-days on the black market when they can afford them, but most criminal operations rely on known (n-day) vulnerabilities because they're cheaper and easier to exploit.

**Security researchers** find them and typically disclose them responsibly — though some sell to brokers or governments.

## The zero-day market

A legitimate gray market exists. Companies like **Zerodium** publicly publish price lists for zero-day exploits:

- $2,500,000 — Full iOS remote jailbreak with persistence
- $1,500,000 — Android remote exploit with persistence
- $1,000,000 — WhatsApp RCE (remote code execution)
- $500,000 — Windows local privilege escalation

Governments are the primary buyers. The US, Israel, UK, Russia, China, and others all operate zero-day acquisition programs.

## The ethical tension

This creates a genuine dilemma:
- If a government stockpiles a zero-day instead of disclosing it, attackers (possibly other nations) could independently discover and exploit the same flaw
- If a researcher discloses a zero-day, users get patched — but the government loses a potential intelligence capability
- The same tool used for "national security" can be used against hospitals, journalists, and dissidents

There's no clean answer. The US has a **Vulnerability Equities Process (VEP)** — a framework for deciding whether to disclose or retain a zero-day — but how well it works in practice is debated.

## The bottom line

A zero-day represents the most asymmetric moment in cybersecurity: the attacker has a weapon the defender doesn't even know exists. They're rare, expensive, and typically reserved for high-value targets. But when deployed, they're nearly unstoppable.

The good news: most attacks don't use zero-days. They use known flaws that haven't been patched yet. That's why **prompt patching** remains one of the most effective things you can do — you may not be able to stop a zero-day, but you can close the window on the other 95% of attacks.

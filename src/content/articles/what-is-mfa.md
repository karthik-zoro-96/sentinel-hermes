---
title: What is Multi-Factor Authentication (MFA)?
topic: How Defense Works
order: 3
readTime: 5 min read
---

MFA is the single most effective security control that most people aren't using. It's not complicated, it's not expensive, and it stops the majority of attacks that rely on stolen credentials. If you take one actionable thing from this entire site, let it be this: **turn on MFA for everything that supports it.**

## The problem with passwords

Passwords have fundamental weaknesses:

- People choose weak and predictable passwords
- People reuse passwords across services
- Passwords get leaked in data breaches (billions are available on the dark web)
- Phishing attacks trick people into entering passwords on fake sites
- Keyloggers capture passwords as they're typed

A password alone is something you **know**. If someone else learns it, they are you — as far as the system is concerned.

## What MFA does

Multi-factor authentication requires **two or more** independent ways to verify your identity:

1. **Something you know** — Password, PIN
2. **Something you have** — Phone, hardware security key, smart card
3. **Something you are** — Fingerprint, face recognition, voice

The key word is **independent**. Two passwords don't count as multi-factor. A password plus a code from your phone does — because an attacker who has your password still can't generate the code from your phone.

## Common MFA methods

**SMS text message codes** — A one-time code is sent to your phone via text. Better than nothing, but vulnerable to **SIM swapping** (attacker convinces your carrier to transfer your number to their SIM card) and interception. Still widely used. Use it if it's the only option.

**Authenticator apps** (Google Authenticator, Authy, Microsoft Authenticator) — Generate time-based one-time passwords (TOTP) on your device. More secure than SMS because there's no network-dependent attack vector. This should be your default for any service that supports it.

**Push notifications** — Services like Duo or Microsoft Authenticator send a notification to your device. You approve or deny the login with a tap. Convenient but vulnerable to **MFA fatigue attacks** where the attacker sends repeated push requests until the user reflexively approves one.

**Hardware security keys** (YubiKey, Google Titan) — Physical devices you plug in or tap. The gold standard for MFA. They use cryptographic protocols (FIDO2/WebAuthn) that are phishing-resistant — the key won't authenticate to a fake website even if the user is tricked into trying. If you're serious about security, get a hardware key.

**Biometrics** — Fingerprint, face scan, iris scan. Increasingly common on phones and laptops. Generally reliable, but biometric data can't be changed (if your fingerprint is compromised, you don't get a new one).

## Why it matters

According to Microsoft, MFA **blocks 99.9% of automated account compromise attacks**. Google's research showed that using security keys stopped 100% of automated bot attacks and bulk phishing attacks.

When you hear about someone getting hacked and they didn't have MFA enabled, the sad truth is that the breach was almost always preventable.

## MFA attacks (yes, they exist)

MFA isn't unbreakable. Sophisticated attackers have developed techniques:

- **MFA fatigue** — Flood the victim with push notifications until they approve one out of frustration or confusion
- **SIM swapping** — Transfer the victim's phone number to an attacker-controlled SIM to intercept SMS codes
- **Real-time phishing proxies** — Tools like Evilginx sit between the victim and the real website, forwarding the MFA code in real-time as the user types it
- **Session hijacking** — Steal the authentication cookie after the user has completed MFA, bypassing it entirely

These attacks are real but require significantly more effort than simply using stolen credentials. MFA raises the bar from "anyone with your password" to "someone who also has physical access to one of your devices."

## What you should do

1. **Enable MFA on email first** — Your email is the gateway to password resets for everything else
2. **Then enable it on financial accounts, social media, cloud storage, and anywhere sensitive**
3. **Use an authenticator app instead of SMS** where possible
4. **Get a hardware security key** if you handle sensitive data or are a high-value target
5. **Register backup methods** so you don't get locked out if you lose your device

## The bottom line

MFA is the closest thing to a "silver bullet" in personal cybersecurity. It's not perfect, but it makes attacks orders of magnitude harder. The friction of entering a second factor is minimal. The security improvement is enormous.

If a service you use doesn't offer MFA, that's a data point about how seriously they take security — and whether you want to trust them with your data.

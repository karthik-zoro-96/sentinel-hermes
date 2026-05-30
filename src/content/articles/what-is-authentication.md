---
title: What is Authentication?
topic: Identity & Access
order: 1
readTime: 5 min read
---

Authentication is the process of proving you are who you claim to be. It's the front door of every secure system. Everything else in security — authorization, encryption, monitoring — depends on authentication working correctly.

## Authentication factors

There are three categories:

**Something you know** — Passwords, PINs, security questions. The most common factor. Also the weakest, because knowledge can be stolen, guessed, or tricked out of you.

**Something you have** — A phone receiving SMS codes, an authenticator app generating time-based codes, a hardware security key, a smart card. Stronger because an attacker needs physical access to your device.

**Something you are** — Biometrics: fingerprints, facial recognition, iris scans, voice patterns. Hard to fake (but not impossible — see below) and convenient for the user.

A system that requires only one factor is **single-factor authentication**. One password. That's it. This is the minimum and it's increasingly considered insufficient.

A system that requires two or more factors is **multi-factor authentication (MFA)** — we covered this in depth in a separate article. Refer to that for the full picture.

## How passwords actually work (server-side)

When you create an account, the server doesn't store your password. It stores a **hash** of your password — a one-way mathematical transformation.

```
Your password: "correct horse battery staple"
Hash produced: "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f"
```

When you log in, the server hashes the password you entered and compares it to the stored hash. If they match, you're in. If the database is breached, the attacker gets hashes, not passwords.

But here's the catch: **not all hashing is equal.**

- **Old hashing** (MD5, SHA-1) is fast and reversible with enough computing power. These are broken.
- **Proper hashing** (bcrypt, scrypt, Argon2) is deliberately slow and includes a random "salt" so the same password produces different hashes each time. This makes brute-force attacks impractical.

When a service tells you "your password was leaked in plaintext" — that means they were storing passwords without hashing (or with reversible encryption). This is unacceptable and indicates fundamental security incompetence.

## Password attacks

**Brute force** — Try every possible combination. Modern GPUs can try billions of hashes per second against weak hashing algorithms.

**Dictionary attack** — Try common passwords and variations. Quick and effective against human-chosen passwords.

**Credential stuffing** — Use username/password pairs from one breach to try logging into other services. Exploits password reuse. This is automated and incredibly common.

**Rainbow tables** — Pre-computed tables of password-to-hash mappings. Mitigated by salting.

**Phishing** — Trick the user into entering their password on a fake site. Bypasses all cryptographic protections.

## Modern approaches

**Passwordless authentication** — Eliminate passwords entirely. Methods include:
- **Magic links** — Email a one-time login link
- **WebAuthn / Passkeys** — Cryptographic credentials stored on your device, authenticated with biometrics or PIN. Supported by all major platforms. This is the future of authentication.
- **FIDO2 / hardware keys** — Physical devices that prove identity cryptographically

**Single Sign-On (SSO)** — Log in once with an identity provider (Google, Microsoft, Okta) and access multiple services without separate passwords. Convenient but creates a single point of failure — if your SSO account is compromised, everything connected to it is at risk.

**OAuth / OpenID Connect** — Protocols that let you authorize one application to access your data from another without sharing your password. When you click "Sign in with Google," you're using OAuth.

## The bottom line

Authentication is trust establishment. Every security decision the system makes after you log in depends on the assumption that you are who you claim to be. If authentication fails, everything built on top of it fails too.

The industry is moving away from passwords toward more secure and usable alternatives. Passkeys and hardware keys are the direction things are heading. But for now, unique strong passwords plus MFA remain the best practical approach for most people.

---
title: What are Credentials?
topic: Identity & Access
order: 2
readTime: 4 min read
---

Credentials are the digital keys to your identity. Understanding what they are, how they're stored, and why they get compromised is fundamental to understanding most security breaches.

## What counts as credentials

**Passwords** — The most common credential. Something you know.

**API keys** — Long random strings used by software to authenticate with other software. Like a password for machines. Often embedded in code, which is a problem when that code gets leaked to public repositories.

**Tokens** — Similar to API keys but often temporary. OAuth tokens, session tokens, JWT (JSON Web Tokens). They prove you've been authenticated without sending your password every time.

**SSH keys** — Pairs of cryptographic files used to authenticate to servers without passwords. Common in development and infrastructure.

**Certificates** — Digital documents that prove identity. Used in TLS/HTTPS, code signing, and device authentication.

**Recovery codes / backup codes** — One-time codes generated during MFA setup for use if you lose your primary authentication device.

## How credentials get compromised

**Data breaches** — The #1 source. Billions of username/password pairs are available from breaches. Haveibeenpwned.com tracks over 12 billion accounts across 700+ breaches.

**Phishing** — Trick users into entering credentials on fake sites. Still the most effective method.

**Brute force** — Trying many password combinations, especially against services without rate limiting.

**Credential stuffing** — Automated testing of breached credentials across multiple services. Exploits password reuse.

**Keyloggers and malware** — Software that captures credentials as they're typed or stored.

**Social engineering** — Manipulating people into revealing credentials directly.

**Accidental exposure** — Developers committing API keys or passwords to public GitHub repositories. Automated bots constantly scan GitHub for leaked credentials.

## Password storage (for service providers)

How you store passwords matters enormously:

**Plaintext** — Storing the actual password. Catastrophically bad. If the database is breached, every password is immediately exposed. Shockingly, this still happens.

**Encrypted** — Passwords are encrypted with a key. Better than plaintext but if the key is also compromised, all passwords are exposed.

**Hashed (with salt)** — The correct approach. Passwords are run through a one-way mathematical function. The same password always produces the same hash, so a random "salt" is added to make each hash unique. Bcrypt, scrypt, and Argon2 are the recommended algorithms.

When a breach occurs and passwords were properly hashed, attackers must brute-force each hash individually — slow and expensive. When passwords were stored in plaintext, they're immediately usable.

## What attackers do with stolen credentials

- **Account takeover** — Access your email, banking, social media
- **Lateral movement** — Use credentials from one system to access others
- **Sell them** — Stolen credentials are commodities. Pricing depends on the account type and freshness
- **Use as initial access** — Many breaches start with compromised credentials, which then enable malware installation and lateral movement

## The credential market

Stolen credentials are actively traded. Current dark web prices:
- Streaming service login: $1-5
- Social media account: $5-50
- Email account: $10-100
- Bank account credentials: $50-500
- Corporate VPN/remote access: $50,000+

The asymmetry is striking: your corporate VPN credentials might sell for more than your entire personal bank account.

## Best practices

**For users:**
- Unique passwords for every service (use a password manager)
- Enable MFA everywhere possible
- Never share credentials
- Check haveibeenpwned.com regularly

**For developers:**
- Never store passwords in plaintext
- Use bcrypt, scrypt, or Argon2 with appropriate work factors
- Never commit credentials to version control
- Rotate API keys regularly
- Implement rate limiting on authentication endpoints

**For organizations:**
- Monitor for leaked credentials (dark web monitoring)
- Implement MFA, especially for privileged accounts
- Use privileged access management (PAM) tools
- Regularly audit and rotate credentials

## The bottom line

Credentials are the most targeted asset in cybersecurity because they're the most direct path to access. Protecting them — your own and your organization's — is one of the most impactful things you can do.

The math is simple: unique passwords + MFA = you're ahead of 95% of users and protected against the majority of automated attacks. Everything else builds on that foundation.

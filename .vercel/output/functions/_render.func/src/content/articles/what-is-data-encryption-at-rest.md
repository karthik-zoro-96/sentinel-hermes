---
title: What is Data Encryption at Rest?
topic: Data & Privacy
order: 4
readTime: 4 min read
---

Encryption at rest protects data while it's stored — on hard drives, databases, backup tapes, or any storage medium. It's the last line of defense: if someone steals your physical storage or gains unauthorized access to your files, encrypted data remains unreadable without the key.

## Why it matters

Encryption in transit (HTTPS, TLS) protects data while it moves across networks. But data at rest is also at risk:

- Stolen laptops or phones
- Physically stolen hard drives or backup tapes
- Cloud storage misconfiguration exposing data to unauthorized access
- Database backups that end up in the wrong hands
- Decommissioned storage devices that weren't properly wiped

Without encryption at rest, any of these scenarios exposes raw, readable data.

## How it works

**Full-disk encryption** — Encrypts an entire storage volume. Examples: BitLocker (Windows), FileVault (macOS), LUKS (Linux). If a laptop is stolen, the data is protected as long as the decryption key (typically derived from the user's password) isn't also compromised.

**Database encryption** — Encrypts data within the database. Can be at the column level (encrypting specific sensitive fields like SSNs) or the entire database file.

**File-level encryption** — Individual files are encrypted. More granular but more complex to manage.

## Key management

The critical challenge with encryption at rest isn't the encryption itself — it's **key management**. The encryption keys must be:
- Stored separately from the encrypted data (what's the point of a lock if the key is taped to the door?)
- Accessible to authorized systems when needed
- Rotated regularly
- Protected with the same rigor as the data itself

Cloud providers offer managed key management services (AWS KMS, Google Cloud KMS, Azure Key Vault). For on-premises environments, **HSMs** (Hardware Security Modules) provide tamper-resistant key storage.

## The bottom line

Encryption at rest is a fundamental data protection control. It's required by most compliance frameworks (GDPR, PCI DSS, HIPAA) and is one of the most effective mitigations against data exposure from physical theft or unauthorized storage access.

If you're not encrypting sensitive data at at rest, you're relying on physical and network security alone — and both of those can fail.

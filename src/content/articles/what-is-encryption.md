---
title: What is Encryption?
topic: The Basics
order: 4
readTime: 5 min read
---

Encryption is the cornerstone of digital security. It's the reason you can send your credit card number over the internet without everyone along the way being able to read it. Understanding how it works — at least conceptually — explains a huge amount about how security actually functions.

## The core idea

Encryption is the process of taking readable data (**plaintext**) and transforming it into an unreadable format (**ciphertext**) using a mathematical function and a **key**. Only someone with the right key can reverse the process and recover the original data.

Think of it like a lockbox:
- You put a message inside (plaintext)
- You lock it with a key (encryption)
- Only someone with the right key can open it (decryption)

The security of the system depends entirely on the key. The algorithms (the mathematical methods) are typically public — they've been scrutinized by mathematicians and security researchers worldwide. What keeps the data secret is the key.

## Two main types

**Symmetric encryption** — Same key for encryption and decryption.

- You and I agree on a secret key
- I encrypt a message with that key and send it to you
- You decrypt it with the same key
- Examples: AES (Advanced Encryption Standard), ChaCha20

The challenge: how do we agree on the key in the first place? If I send you the key over the internet, someone could intercept it. This is called the **key distribution problem**, and it's a real practical challenge.

**Asymmetric encryption** — Different keys for encryption and decryption. You have a **key pair**:
- A **public key** that you share with everyone
- A **private key** that you keep secret

Someone encrypts a message with your public key. Only your private key can decrypt it. The two keys are mathematically related, but you can't derive the private key from the public key (at least, not with current computing power).

- Examples: RSA, ECC (Elliptic Curve Cryptography)

This solves the key distribution problem — you can share your public key openly because it can only encrypt, not decrypt.

## How HTTPS actually works

When you visit a website with HTTPS (the padlock in your browser), both types work together:

1. Your browser uses the website's **public key** (from its SSL/TLS certificate) to establish a secure connection
2. They use asymmetric encryption to agree on a temporary **symmetric key**
3. All the actual data transfer uses symmetric encryption with that temporary key

Why the two-step dance? Asymmetric encryption is mathematically intensive and slow. Symmetric encryption is fast. So they use the slow method briefly to solve the key distribution problem, then switch to the fast method for the bulk of the data transfer.

This is called a **hybrid cryptosystem**, and it's how most secure communication works in practice.

## Encryption at rest vs. in transit

**Encryption in transit** — Protecting data while it's being transmitted (HTTPS, VPN, TLS). This prevents someone from reading data as it travels across a network.

**Encryption at rest** — Protecting data while it's stored (encrypted hard drives, encrypted databases, encrypted backups). This protects against someone stealing physical storage or accessing files without authorization.

## What encryption can and can't do

**What it does:**
- Protects data confidentiality during transmission and storage
- Enables secure communication over insecure channels
- Forms the foundation of digital signatures, authentication, and many other security mechanisms

**What it doesn't do:**
- Protect against someone who has your key (if your password is weak and someone guesses it, encryption doesn't help)
- Protect against malware on your device (if your system is compromised, the attacker sees the decrypted data)
- Make you anonymous (content is hidden, but the fact that you're communicating with someone may not be)

## The quantum computing question

You'll hear about quantum computers "breaking encryption." Here's the honest state: quantum computers threaten current asymmetric encryption algorithms (especially RSA) because they can solve the math problems those algorithms rely on. Symmetric encryption (AES) is much more resistant — doubling the key size largely addresses the threat.

The field of **post-quantum cryptography** is already producing new algorithms designed to resist quantum attacks. Standards are being finalized. This is a real concern for data that needs to remain confidential for decades, but it's not an existential crisis — it's a managed transition.

## The bottom line

Encryption is math that keeps your data confidential. It's not magic, and it's not impervious — but properly implemented with strong keys and modern algorithms, it's the most reliable tool we have for protecting information in a connected world. Every time you see that padlock in your browser, encryption is doing its job.

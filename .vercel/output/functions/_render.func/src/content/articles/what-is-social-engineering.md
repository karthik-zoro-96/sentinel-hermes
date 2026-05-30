---
title: What is Social Engineering?
topic: How Attacks Work
order: 5
readTime: 5 min read
---

Every technical security system in the world has a common weakness: the human operating it. Social engineering is the art of manipulating people into doing things that compromise security — clicking links, revealing passwords, granting access, bypassing procedures.

It's not a side channel. It's **the** channel. Most major breaches involve some form of social engineering.

## Why it works

Social engineering exploits fundamental human psychology:

- **Trust** — We want to believe people are who they say they are
- **Helpfulness** — We're wired to assist people who seem to need help
- **Authority** — We comply with people who appear to have power
- **Fear** — We act quickly when we believe something bad will happen
- **Curiosity** — We click on things that interest us
- **Reciprocity** — When someone does something for us, we feel compelled to return the favor

Security tools can't patch these traits. They're features of human cognition, not bugs.

## Common techniques

**Pretexting** — Creating a fabricated scenario to steal information. The attacker calls posing as IT support: "Hi, this is Alex from IT. We're investigating suspicious login attempts on your account. Can you confirm your username and the code that was just sent to you?" The scenario is plausible, the request seems routine.

**Baiting** — Leaving infected USB drives in parking lots, lobbies, or break rooms. They're labeled something intriguing: "Salary Review 2025" or "Confidential." Someone picks one up and plugs it into their computer out of curiosity. This actually works more often than you'd think.

**Tailgating / Piggybacking** — Physically following an authorized person through a secured door. An attacker carrying coffee cups approaches a secure entrance: "Could you hold the door? My hands are full." Most people will.

**Quid pro quo** — Offering something in return for information. "We're conducting a security survey. If you answer a few questions about your system configuration, you'll receive a free security assessment."

**Watering hole** — Compromising a website that the target group frequents, rather than attacking the group directly. If you want to compromise a specific company's employees, compromise the industry blog or forum they all read.

## The Kevin Mitnick story

Kevin Mitnick was one of the most famous hackers in history, and he rarely needed to write code. His primary method was calling people and talking his way into what he needed. He'd call a company, pretend to be an employee or IT contractor, and talk his way into receiving credentials, access codes, and system documentation.

His book *The Art of Deception* is essentially a catalog of social engineering techniques. It's a recommended read for anyone in security because it shows how systematically human trust can be exploited.

## In the age of AI

Social engineering is getting more dangerous:

- **Deepfake voice** — AI can now clone someone's voice from a few seconds of audio. Attackers have used deepfake voice calls to impersonate CEOs and authorize wire transfers.
- **AI-generated phishing** — LLMs can produce phishing emails that are grammatically perfect, contextually relevant, and free of the spelling mistakes that previously made them easy to spot.
- **Automated targeting** — AI can scrape social media to build detailed profiles of targets, enabling highly personalized spear phishing at scale.

## How to defend

**For individuals:**
- Verify requests through independent channels. If your boss emails asking for a wire transfer, call them to confirm.
- Be skeptical of urgency. Legitimate emergencies involving security or money still benefit from verification.
- Don't share sensitive information via email, text, or phone unless you initiated the contact and can verify the recipient.
- If something feels off, trust that feeling.

**For organizations:**
- Security awareness training — not the checkbox annual kind, but ongoing, realistic programs with simulated phishing
- Clear procedures for verifying unusual requests (especially financial ones)
- A culture where people can report mistakes or suspicious interactions without fear
- Separation of duties — no single person should be able to authorize large transactions alone
- Physical security controls that make tailgating difficult (mantrap doors, badge requirements)

## The bottom line

Social engineering isn't a technology problem — it's a human problem. And it's the most effective attack method because it bypasses every technical control you've deployed and goes straight to the person who has the access the attacker wants.

Every security strategy that doesn't account for the human element has a gaping hole in it. The best defense combines training, culture, and processes — because you can't patch people, but you can make them more resilient.

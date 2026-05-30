# Cyberplain

Plain-language cybersecurity education — written by Sentinel, an AI that thinks about security so you don't have to start from scratch.

## What it is

32 articles covering cybersecurity fundamentals, threats, and defenses. No jargon, no hype — just clear explanations of topics like:
- What is phishing, malware, ransomware
- The CIA Triad, Zero Trust, MFA
- DDOS attacks, data breaches, supply chain attacks
- Encryption, authentication, compliance (GDPR)

Plus a live security news feed and an interactive knowledge graph that shows how concepts connect.

## Built with

- **Astro** — static site with SSR endpoints
- **Tailwind CSS** — dark-mode-only, GitHub-inspired palette
- **Hermes Agent** — full build: design, code, debugging, deployment
- **Vercel** — hosting
- **Buttondown** — email newsletter

## The site

- **cyberplain.ai** — homepage with featured articles and live news
- **cyberplain.ai/topics** — all 32 articles organized by category
- **cyberplain.ai/graph** — interactive knowledge graph
- **cyberplain.ai/about** — who built it and why

## Subscribe

Get new articles every Tuesday and Friday:
```
Every Tuesday & Friday — plain-language cybersecurity explained.
No hype. No jargon. Just the concepts that matter.
```

## Run locally

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

## Tech notes

- Static output + one SSR endpoint (subscribe form)
- Subscribe form → `/api/subscribe` → Vercel serverless → Buttondown API
- `BUTTONDOWN_API_KEY` env var required for the subscribe endpoint
- Live news fetched client-side from Hacker News API + Reddit r/netsec RSS
- Dark mode only — no toggle, no light mode
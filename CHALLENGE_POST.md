---

title: "I built cyberplain.ai with an AI agent — here's what actually went down"
date: 2026-05-30
tags: [hermes-agent, ai, cybersecurity, webdev]
canonical: https://dev.to/karthik_zoro_96/i-built-cyberplainai-with-an-ai-agent-heres-what-actually-went-down

---

*This post is part of the [Hermes Agent Challenge](https://dev.to/challenges/hermes-agent-2026-05-15)*

---

# I built cyberplain.ai with an AI agent — here's what actually went down

A few weeks ago I decided to build a cybersecurity education site. Not as a learning exercise — I'd been running cybersecurity projects for a while and knew the space. I needed something real that could actually help people who weren't experts yet.

I didn't hire a developer. I used an AI agent.

Here's the honest account of what that looked like.

## The project: cyberplain.ai

**cyberplain.ai** is a plain-language cybersecurity education site. 32 articles covering the fundamentals — phishing, malware, the CIA triad, zero trust, ransomware, compliance, and more. No jargon. No hype. Just clear explanations that don't assume you already know what the words mean.

There's also:
- A live security news feed (Hacker News + r/netsec)
- An interactive knowledge graph showing how concepts connect
- A subscribe form that delivers new articles every Tuesday and Friday

The design is dark-mode only, GitHub-inspired palette. Clean, readable, nothing flashy.

## What I started with

- An idea
- A reference site (explainme.ai — great execution, no fluff)
- Roughly zero time to build it myself

I needed someone to own the execution. Design, code, deployment, decisions — the whole thing.

I handed it to **Hermes Agent** and told it: "You're in charge. Build it."

## What Hermes Agent actually did

**Design decisions** — I said "inspiration is explainme.ai, but don't copy it." Hermes picked the color scheme (GitHub dark: #0d1117 background, #58a6ff accent), decided on a grid layout for articles, and set up the typography. It made the call to go dark-only, no toggle — which was the right call for this audience.

**Article content** — 32 articles, all written in a consistent voice. Sentinel's voice. Not a chatbot that sounds like it's reading Wikipedia — something that actually explains things like a person who understands security would explain them to a colleague over coffee.

**Architecture** — Astro for the framework, Tailwind for styling, Vercel for hosting. It picked the right tools for the job: static output with one serverless endpoint for the subscribe form.

**The tricky stuff** — There was a moment where the subscribe form wasn't working because the API key was hardcoded in client-side JavaScript. I flagged it. Hermes caught the issue, moved it server-side properly, and restructured the whole approach. That's the kind of thing you'd normally have to refactor twice before getting right — the agent caught it fast.

**Deployment** — Wired up to Vercel, configured the environment variables, connected the GitHub repo. Push to main = deploy.

## The honest parts

### What worked well

The agent moved fast. We had a working site — dark mode, 32 articles, live news, proper styling — within a few sessions. No hand-holding needed. I'd give it direction, it would execute, I'd verify, move on.

The design quality is genuinely good. The GitHub palette was a smart call — it reads as professional to the security crowd without being generic.

It handled the full stack: content, front-end, back-end endpoint, deployment. That's rare to see in one agent run.

### What wasn't smooth

I had to push back on some design choices. The first iteration was too close to the reference site — same layout, same visual patterns. "Inspired by" can turn into "a clone of" fast. I told it to make its own decisions and it did — the result is better for it.

Network access was inconsistent in the environment the agent ran in. Some things that should've been one-click (setting up the Buttondown welcome email) required manual work because the agent couldn't reach the API from its environment. That's not an agent problem — it's a networking constraint. But it meant I had to finish some things manually.

### What I'd do differently

Start with clearer constraints on the design direction upfront. "Make it your own" is good guidance but the agent performs best when the guardrails are explicit. Something like "dark palette, no emoji in headings, cards over lists" would've shaved off a revision cycle.

## The subscribe flow

One thing worth noting: the subscribe form posts to an SSR endpoint on Vercel, which calls the Buttondown API server-side. The API key never touches the browser.

```js
export async function POST({ request }) {
  const { email } = await request.json();
  const apiKey = import.meta.env.BUTTONDOWN_API_KEY;

  const res = await fetch('https://app.buttondown.email/api/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, tags: ['cyberplain'] }),
  });
  // ...
}
```

That's not groundbreaking, but it's the right pattern. AI agents can miss security details like this if you don't flag them.

## What I'd tell someone starting the same process

**You don't need to know how to code.** I know enough to verify that what the agent produces is reasonable, but I didn't write a line of this. The agent built it. I reviewed it.

**Be specific about what you don't want.** "Make it good" doesn't work. "Don't copy the reference site, don't use a theme toggle, don't add search" — those constraints actually helped.

**Stay involved in the decisions that matter.** Design direction, security patterns, content voice — those are things where your judgment beats the agent's defaults. The agent is great at execution. Your job is to make sure it's building the right thing.

## The result

32 articles. Live news. Interactive graph. Working subscribe form. Deployed at cyberplain.ai.

The whole thing took — a few hours of actual agent time across a few sessions, plus my own time for review and the manual email setup.

I'm not going to pretend the agent did everything. I made the decisions, I reviewed the output, I set up Buttondown manually because the environment blocked the API call. But the building? The agent handled it.

That's the real picture of what this kind of workflow looks like in practice. Not magic — just fast.

---

*cyberplain.ai is live. 32 articles, dark mode, every Tuesday and Friday.*

*Built with Hermes Agent.*
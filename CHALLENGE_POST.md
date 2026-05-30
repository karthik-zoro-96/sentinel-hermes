---

title: "I built Cyberplain with an AI agent — here's what actually went down"
date: 2026-05-30
tags: [hermes-agent, ai, cybersecurity, webdev]
canonical: https://dev.to/karthik_zoro_96/i-built-cyberplain-with-an-ai-agent-heres-what-actually-went-down

---

*This post is part of the [Hermes Agent Challenge](https://dev.to/challenges/hermes-agent-2026-05-15)*

---

# I built Cyberplain with an AI agent — here's what actually went down

A few weeks ago I decided to build a cybersecurity education site. I was a complete beginner in the space. I knew the terms — phishing, malware, zero trust — but not the depth behind them. I wanted to learn, and building something real felt like the fastest way to do that.

As a developer, I could have built the entire site myself. But I wanted to try something with Hermes—that was the goal. So instead of writing the code, I decided to see how far I could get by directing an AI agent to build the entire system.

Here's the honest account of what that looked like.

## The project: Cyberplain

**Cyberplain** is a plain-language cybersecurity education site. 32 articles covering the fundamentals — phishing, malware, the CIA triad, zero trust, ransomware, compliance, and more. No jargon. No hype. Just clear explanations that don't assume you already know what the words mean.

![Cyberplain Homepage - Sleek GitHub Dark Theme](/Users/karthikeyan/.gemini/antigravity/brain/b40ba88b-996e-4d8a-8d16-241e03f2eb39/media__1780137336695.png)
*(Caption: The main Cyberplain homepage featuring a sleek GitHub dark-mode design, "Today in Security" live news feed, interactive sidebar widgets, and newsletter subscribe form.)*

There's also:
- **A live security news feed** client-fetched directly from Hacker News and Reddit's r/netsec.
- **An interactive knowledge graph** showing how concepts connect, running on an HTML5 canvas with a custom spring-force physics simulation built by the agent.
- **A secure newsletter subscription form** that delivers new articles every Tuesday and Friday, powered by a live subscriber count badge showing the count in real time.

The design is dark-mode only, GitHub-inspired palette. Clean, readable, nothing flashy.

## What I started with

- An idea
- A reference site (explainme.ai — great execution, no fluff)
- Roughly zero time to build it myself

I needed someone to own the execution. Design, code, deployment, decisions — the whole thing.

I handed it to **Hermes Agent** and told it: "You're in charge. Build it."

## What Hermes Agent actually did

**Design decisions** — I said "inspiration is explainme.ai, but don't copy it." Hermes picked the color scheme (GitHub dark: #0d1117 background, #58a6ff accent), decided on a grid layout for articles, and set up the typography. It made the call to go dark-only, no toggle — which was the right call for this audience.

**Article content** — 32 articles, all written in a consistent voice. Sentinel's voice. Not a chatbot that sounds like it's reading Wikipedia — something that explains concepts the way someone who actually understands security would — clearly, without performing expertise.

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

Network access was inconsistent in the environment the agent ran in. Some things that should've been one-click (setting up the Buttondown welcome email) required manual work because the agent couldn't reach the API from its environment. That's a networking constraint, not an agent problem — but it meant I had to finish some things manually.

### What I'd do differently

Start with clearer constraints on the design direction upfront. "Make it your own" is good guidance but the agent performs best when the guardrails are explicit. Something like "dark palette, no emoji in headings, cards over lists" would've shaved off a revision cycle.

## The subscribe flow

One thing worth noting: the subscribe form posts to an SSR endpoint on Vercel, which calls the Buttondown API server-side. The API key never touches the browser—all communications with Buttondown are isolated within a secure Astro serverless endpoint.

We also wanted to display a live subscriber count badge below the subscribe form, just like you see on mature publications (e.g., *"25 people already learning"*). The agent set up a secure GET route that queries the Buttondown API server-side to fetch the active subscriber count without exposing the token, and updates the DOM client-side.

Here is the exact, final serverless endpoint (`src/pages/api/subscribe.js`) that handles both directions:

```js
export const prerender = false;

// GET: Fetch live active subscriber count from Buttondown API
export async function GET() {
  const apiKey = import.meta.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ count: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const res = await fetch('https://api.buttondown.com/v1/subscribers?status=active', {
      headers: { Authorization: `Token ${apiKey}` },
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ count: null }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify({ count: data.count }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ count: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// POST: Add new subscriber securely
export async function POST({ request }) {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Valid email required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = import.meta.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Server misconfiguration.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = await fetch('https://api.buttondown.com/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${apiKey}`,
      'Content-Type': 'application/json',
    },
    // Buttondown requires 'email_address' rather than 'email'
    body: JSON.stringify({ email_address: email, tags: ['cyberplain'] }),
  });

  // Handle already-subscribed scenario gracefully
  if (res.status === 400) {
    return new Response(JSON.stringify({ message: 'Already subscribed!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Could not subscribe. Please try again.' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ message: "You're in! 🎉" }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
```

That's not groundbreaking, but it's the right pattern. AI agents can miss security details like this, or misinterpret minor API payload keys (like sending `email` instead of Buttondown's expected `email_address`), but having a conversational partner to debug and fix it immediately makes all the difference.

Here is the welcome email that is triggered and delivered instantly in Sentinel's clear, plain-language voice:

![Welcome Email Delivered via Buttondown](/Users/karthikeyan/.gemini/antigravity/brain/b40ba88b-996e-4d8a-8d16-241e03f2eb39/media__1780137372718.png)
*(Caption: The welcome email received in Gmail after subscribing via the form, customized in a clean, professional security voice.)*

## What I'd tell someone starting the same process

**Be specific about what you don't want.** "Make it good" doesn't work. "Don't copy the reference site, don't use a theme toggle, don't add search" — those constraints actually helped.

**Stay involved in the decisions that matter.** Design direction, security patterns, content voice — those are things where your judgment beats the agent's defaults. The agent is great at execution. Your job is to make sure it's building the right thing.

**Give it a name early.** Even a working title shapes how the agent writes content and names things internally. "Sentinel" gave the whole project a consistent voice from the start.

## The result

32 articles. Live news. Interactive graph. Working subscribe form. Deployed at [Cyberplain](https://sentinel-hermes.vercel.app).

The whole thing took a few hours of actual agent time across a few sessions, plus my own time for review and the manual email setup.

The agent built it. I directed it — and that distinction matters.

If you want to see what the workflow produces end-to-end, go poke around at the [live site](https://sentinel-hermes.vercel.app) — feedback welcome.

---

*Cyberplain — 32 articles, dark mode, every Tuesday and Friday.*

*Built with Hermes Agent.*
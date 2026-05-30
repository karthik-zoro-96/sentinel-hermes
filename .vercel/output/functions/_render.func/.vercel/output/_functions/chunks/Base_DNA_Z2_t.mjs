import { T as createAstro, V as createComponent, J as addAttribute, aa as renderTemplate, a8 as renderSlot, a4 as renderHead, a2 as renderComponent } from './astro/server_BnJdSZNs.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const SITE = {
  title: "cyberplain",
  description: "Cybersecurity explained clearly. No hype, no jargon overload, no dumbing down."
};
const TOPICS = [
  {
    slug: "basics",
    title: "The Basics",
    description: "Start here. The foundational concepts.",
    emoji: "🧱",
    articles: [
      "what-is-cybersecurity",
      "threats-vulnerabilities-risks",
      "cia-triad",
      "what-is-encryption"
    ]
  },
  {
    slug: "attacks",
    title: "How Attacks Work",
    description: "Understanding the offense.",
    emoji: "⚔️",
    articles: [
      "what-is-phishing",
      "what-is-malware",
      "what-is-ransomware",
      "what-is-ddos",
      "what-is-social-engineering",
      "what-is-a-zero-day"
    ]
  },
  {
    slug: "defense",
    title: "How Defense Works",
    description: "The tools and practices that protect you.",
    emoji: "🛡️",
    articles: [
      "what-is-a-firewall",
      "what-is-antivirus",
      "what-is-mfa",
      "what-is-a-vpn",
      "what-is-zero-trust",
      "what-is-endpoint-detection"
    ]
  },
  {
    slug: "identity",
    title: "Identity & Access",
    description: "Who are you, and how does the system know?",
    emoji: "🔑",
    articles: ["what-is-authentication", "what-are-credentials", "what-is-identity-theft", "what-is-privilege-escalation"]
  },
  {
    slug: "data",
    title: "Data & Privacy",
    description: "What happens to your information.",
    emoji: "🔒",
    articles: ["what-is-a-data-breach", "what-is-the-dark-web", "what-is-gdpr", "what-is-data-encryption-at-rest"]
  },
  {
    slug: "organizations",
    title: "For Organizations",
    description: "How businesses handle security.",
    emoji: "🏢",
    articles: ["what-is-incident-response", "what-is-a-security-audit", "what-is-penetration-testing", "what-is-compliance"]
  },
  {
    slug: "advanced",
    title: "Advanced Concepts",
    description: "Deeper territory.",
    emoji: "🧠",
    articles: ["what-are-supply-chain-attacks", "what-is-cyber-warfare", "what-is-offensive-security", "what-is-threat-intelligence"]
  }
];

const $$Astro$1 = createAstro("https://cyberplain.ai");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/karthikeyan/hackzoo-owl/cyberplain/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://cyberplain.ai");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title = SITE.title, description = SITE.description } = Astro2.props;
  const fullTitle = title === SITE.title ? title : `${title} \u2014 ${SITE.title}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', `><meta property="og:type" content="website"><link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\u{1F6E1}\uFE0F</text></svg>">`, "", '</head> <body class="bg-bg text-text font-sans leading-relaxed min-h-screen flex flex-col selection:bg-accent/30"> <div id="progress-bar" class="fixed top-0 left-0 h-1 bg-accent z-[60] w-0 transition-all duration-75"></div> <!-- Header --> <header class="border-b border-border sticky top-0 z-50 bg-bg/80 backdrop-blur-md"> <div class="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-8"> <a href="/" class="text-lg font-bold text-text flex items-center gap-2 hover:no-underline shrink-0"> <span>\u{1F6E1}\uFE0F</span> <span>cyberplain</span> </a> <nav class="flex items-center gap-6 flex-wrap"> <a href="/topics" class="text-text-muted hover:text-text text-sm font-medium transition-colors">Topics</a> <a href="/graph" class="text-text-muted hover:text-text text-sm font-medium transition-colors">Graph</a> <a href="/about" class="text-text-muted hover:text-text text-sm font-medium transition-colors">About</a> </nav> </div> </header> <div class="flex-1"> ', ` </div> <!-- Footer --> <footer class="border-t border-border mt-16 py-12 text-center text-text-dim text-sm"> <p>Built and written by Sentinel.</p> <p class="mt-2 text-xs opacity-50">Cybersecurity education for everyone.</p> <p class="mt-4">\xA9 2026 cyberplain</p> </footer> <style>
      /* Smooth transitions for theme toggle */
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation-duration: 0.3s;
      }
      /* Copy button styling */
      .copy-btn {
        @apply absolute right-2 top-2 bg-bg-card border border-border rounded px-2 py-1 text-xs text-text-dim hover:text-text hover:border-accent transition-colors;
      }
      pre {
        @apply relative;
      }
    </style> <script>
      // Embed search index directly
      window.SEARCH_INDEX = [{\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"cia-triad\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"The CIA Triad \u2014 Confidentiality, Integrity, Availability\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"threats-vulnerabilities-risks\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"Threats, Vulnerabilities, and Risks \u2014 What's the Difference?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-are-credentials\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What are Credentials?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-are-supply-chain-attacks\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What are Supply-Chain Attacks?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-a-data-breach\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is a Data Breach?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-a-firewall\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is a Firewall?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-a-security-audit\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is a Security Audit?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-a-vpn\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is a VPN?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-a-zero-day\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is a Zero-Day?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-antivirus\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is Antivirus?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-authentication\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is Authentication?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-compliance\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is Compliance (SOC 2, ISO 27001)?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-cyber-warfare\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is Cyber Warfare?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-cybersecurity\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is Cybersecurity?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-data-encryption-at-rest\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is Data Encryption at Rest?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-ddos\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is a DDoS Attack?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-encryption\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is Encryption?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-endpoint-detection\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is Endpoint Detection and Response (EDR)?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-gdpr\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"title\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"What is GDPR?\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\": \\\\\\\\\\\\\\"what-is-identity-theft\\\\\\\\\\\\\\", \\\\\\\\\\\\\\"titl
  </body>
</html><\/script></body></html>`], ['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><meta property="og:title"', '><meta property="og:description"', `><meta property="og:type" content="website"><link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>\u{1F6E1}\uFE0F</text></svg>">`, "", '</head> <body class="bg-bg text-text font-sans leading-relaxed min-h-screen flex flex-col selection:bg-accent/30"> <div id="progress-bar" class="fixed top-0 left-0 h-1 bg-accent z-[60] w-0 transition-all duration-75"></div> <!-- Header --> <header class="border-b border-border sticky top-0 z-50 bg-bg/80 backdrop-blur-md"> <div class="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between gap-8"> <a href="/" class="text-lg font-bold text-text flex items-center gap-2 hover:no-underline shrink-0"> <span>\u{1F6E1}\uFE0F</span> <span>cyberplain</span> </a> <nav class="flex items-center gap-6 flex-wrap"> <a href="/topics" class="text-text-muted hover:text-text text-sm font-medium transition-colors">Topics</a> <a href="/graph" class="text-text-muted hover:text-text text-sm font-medium transition-colors">Graph</a> <a href="/about" class="text-text-muted hover:text-text text-sm font-medium transition-colors">About</a> </nav> </div> </header> <div class="flex-1"> ', ` </div> <!-- Footer --> <footer class="border-t border-border mt-16 py-12 text-center text-text-dim text-sm"> <p>Built and written by Sentinel.</p> <p class="mt-2 text-xs opacity-50">Cybersecurity education for everyone.</p> <p class="mt-4">\xA9 2026 cyberplain</p> </footer> <style>
      /* Smooth transitions for theme toggle */
      ::view-transition-old(root),
      ::view-transition-new(root) {
        animation-duration: 0.3s;
      }
      /* Copy button styling */
      .copy-btn {
        @apply absolute right-2 top-2 bg-bg-card border border-border rounded px-2 py-1 text-xs text-text-dim hover:text-text hover:border-accent transition-colors;
      }
      pre {
        @apply relative;
      }
    </style> <script>
      // Embed search index directly
      window.SEARCH_INDEX = [{\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"cia-triad\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"The CIA Triad \u2014 Confidentiality, Integrity, Availability\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"threats-vulnerabilities-risks\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"Threats, Vulnerabilities, and Risks \u2014 What's the Difference?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-are-credentials\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What are Credentials?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-are-supply-chain-attacks\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What are Supply-Chain Attacks?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-a-data-breach\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is a Data Breach?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-a-firewall\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is a Firewall?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-a-security-audit\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is a Security Audit?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-a-vpn\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is a VPN?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-a-zero-day\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is a Zero-Day?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-antivirus\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is Antivirus?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-authentication\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is Authentication?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-compliance\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is Compliance (SOC 2, ISO 27001)?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-cyber-warfare\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is Cyber Warfare?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-cybersecurity\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is Cybersecurity?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-data-encryption-at-rest\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is Data Encryption at Rest?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-ddos\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is a DDoS Attack?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-encryption\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is Encryption?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-endpoint-detection\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is Endpoint Detection and Response (EDR)?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-gdpr\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"title\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"What is GDPR?\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"summary\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}, {\\\\\\\\\\\\\\\\\\\\\\\\\\\\"slug\\\\\\\\\\\\\\\\\\\\\\\\\\\\": \\\\\\\\\\\\\\\\\\\\\\\\\\\\"what-is-identity-theft\\\\\\\\\\\\\\\\\\\\\\\\\\\\", \\\\\\\\\\\\\\\\\\\\\\\\\\\\"titl
  </body>
</html><\/script></body></html>`])), fullTitle, addAttribute(description, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/karthikeyan/hackzoo-owl/cyberplain/src/layouts/Base.astro", void 0);

export { $$Base as $, TOPICS as T };

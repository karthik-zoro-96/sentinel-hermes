/* empty css                                 */
import { V as createComponent, a2 as renderComponent, aa as renderTemplate, J as addAttribute, a0 as maybeRenderHead } from '../chunks/astro/server_BnJdSZNs.mjs';
import 'kleur/colors';
import { T as TOPICS, $ as $$Base } from '../chunks/Base_DNA_Z2_t.mjs';
import { g as getCollection } from '../chunks/_astro_content_aX_AAUo5.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Graph = createComponent(async ($$result, $$props, $$slots) => {
  const articles = await getCollection("articles");
  articles.map((a) => a.slug);
  const colors = ["#6c5ce7", "#e17055", "#00b894", "#fdcb6e", "#0984e3", "#e84393", "#00cec9"];
  TOPICS.map((t) => ({
    title: t.title,
    emoji: t.emoji,
    articles: t.articles
  }));
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Graph" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="max-w-[1200px] mx-auto px-6 py-8"> <main> <a href="/" class="inline-block mb-4 text-text-muted text-sm hover:text-text transition-colors">\u2190 Back home</a> <h1 class="text-2xl md:text-3xl font-bold mb-2">Topic Graph</h1> <p class="text-text-muted mb-8">How cybersecurity concepts connect. Click a node to explore.</p> <div class="relative w-full h-[550px] bg-bg-card border border-border rounded-xl overflow-hidden" id="graph-container"> <canvas id="graph-canvas" class="w-full h-full"></canvas> </div> <div class="mt-8"> <h3 class="text-sm uppercase tracking-widest text-text-dim font-semibold mb-3">Legend</h3> <div class="flex flex-wrap gap-2"> ', ' </div> </div> </main> </div> <script type="application/json" id="graph-data">\n    {"topics":[{"slug":"basics","title":"The Basics","articles":["what-is-cybersecurity","threats-vulnerabilities-risks","cia-triad","what-is-encryption"]},{"slug":"attacks","title":"How Attacks Work","articles":["what-is-phishing","what-is-malware","what-is-ransomware","what-is-ddos","what-is-social-engineering","what-is-a-zero-day"]},{"slug":"defense","title":"How Defense Works","articles":["what-is-a-firewall","what-is-antivirus","what-is-mfa","what-is-a-vpn","what-is-zero-trust","what-is-endpoint-detection"]},{"slug":"identity","title":"Identity & Access","articles":["what-is-authentication","what-are-credentials","what-is-identity-theft","what-is-privilege-escalation"]},{"slug":"data","title":"Data & Privacy","articles":["what-is-a-data-breach","what-is-the-dark-web","what-is-gdpr","what-is-data-encryption-at-rest"]},{"slug":"organizations","title":"For Organizations","articles":["what-is-incident-response","what-is-a-security-audit","what-is-penetration-testing","what-is-compliance"]},{"slug":"advanced","title":"Advanced Concepts","articles":["what-are-supply-chain-attacks","what-is-cyber-warfare","what-is-offensive-security","what-is-threat-intelligence"]}],"slugs":["cia-triad","threats-vulnerabilities-risks","what-are-credentials","what-are-supply-chain-attacks","what-is-a-data-breach","what-is-a-firewall","what-is-a-security-audit","what-is-a-vpn","what-is-a-zero-day","what-is-antivirus","what-is-authentication","what-is-compliance","what-is-cyber-warfare","what-is-cybersecurity","what-is-data-encryption-at-rest","what-is-ddos","what-is-encryption","what-is-endpoint-detection","what-is-gdpr","what-is-identity-theft","what-is-incident-response","what-is-malware","what-is-mfa","what-is-offensive-security","what-is-penetration-testing","what-is-phishing","what-is-privilege-escalation","what-is-ransomware","what-is-social-engineering","what-is-the-dark-web","what-is-threat-intelligence","what-is-zero-trust"],"colors":["#6c5ce7","#e17055","#00b894","#fdcb6e","#0984e3","#e84393","#00cec9"]}\n  <\/script>  '])), maybeRenderHead(), TOPICS.map((t, i) => renderTemplate`<span class="badge text-white"${addAttribute(`background:${colors[i % colors.length]}`, "style")}>${t.emoji} ${t.title}</span>`)) })}`;
}, "/Users/karthikeyan/hackzoo-owl/cyberplain/src/pages/graph.astro", void 0);

const $$file = "/Users/karthikeyan/hackzoo-owl/cyberplain/src/pages/graph.astro";
const $$url = "/graph";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Graph,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

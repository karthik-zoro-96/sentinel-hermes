/* empty css                                    */
import { V as createComponent, a0 as maybeRenderHead, J as addAttribute, aa as renderTemplate, T as createAstro, a2 as renderComponent } from '../../chunks/astro/server_BnJdSZNs.mjs';
import 'kleur/colors';
import { T as TOPICS, $ as $$Base } from '../../chunks/Base_DNA_Z2_t.mjs';
import { g as getCollection } from '../../chunks/_astro_content_aX_AAUo5.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  async function fetchHNNews() {
    try {
      const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
      const ids = await res.json();
      const top10 = ids.slice(0, 30);
      const stories = await Promise.all(
        top10.map(
          (id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((r) => r.json()).catch(() => null)
        )
      );
      const securityKeywords = [
        "vulnerability",
        "breach",
        "ransomware",
        "malware",
        "cve",
        "zero-day",
        "exploit",
        "patch",
        "security",
        "hack",
        "attack",
        "cyber",
        "phishing",
        "cve-",
        "data leak",
        "password",
        "authentication",
        "firewall",
        "malicious"
      ];
      return stories.filter((s) => s && s.title && s.url).filter((s) => {
        const title = s.title.toLowerCase();
        return securityKeywords.some((k) => title.includes(k));
      }).slice(0, 3).map((s) => ({
        title: s.title.length > 80 ? s.title.slice(0, 77) + "..." : s.title,
        url: s.url,
        source: "Hacker News",
        tag: s.title.toLowerCase().includes("patch") || s.title.toLowerCase().includes("fix") ? "PATCH" : "INCIDENT",
        color: s.title.toLowerCase().includes("patch") || s.title.toLowerCase().includes("fix") ? "bg-accent/20 text-accent-light" : "bg-danger/20 text-danger",
        date: getRelativeTime(s.time)
      }));
    } catch {
      return [];
    }
  }
  async function fetchRedditNews() {
    try {
      const res = await fetch("https://www.reddit.com/r/netsec.json?limit=15");
      const data = await res.json();
      return data.data.children.slice(0, 10).map((item) => ({
        title: item.data.title.length > 80 ? item.data.title.slice(0, 77) + "..." : item.data.title,
        url: item.data.url.startsWith("/r/") ? `https://reddit.com${item.data.permalink}` : item.data.url,
        source: "r/netsec",
        tag: item.data.link_flair_text || (item.data.title.toLowerCase().includes("patch") ? "PATCH" : "INCIDENT"),
        color: item.data.link_flair_text === "Patch" || item.data.title.toLowerCase().includes("patch") ? "bg-accent/20 text-accent-light" : "bg-danger/20 text-danger",
        date: getRelativeTime(Math.floor(item.data.created_utc))
      }));
    } catch {
      return [];
    }
  }
  function getRelativeTime(timestamp) {
    const diff = Math.floor(Date.now() / 1e3) - timestamp;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    if (diff < 172800) return "Yesterday";
    return `${Math.floor(diff / 86400)}d ago`;
  }
  const [hnNews, redditNews] = await Promise.all([fetchHNNews(), fetchRedditNews()]);
  const allNews = [...hnNews, ...redditNews].slice(0, 6);
  const newsItems = allNews.length > 0 ? allNews : [
    { title: "Cybersecurity news is loading...", tag: "INCIDENT", color: "bg-accent/20 text-accent-light", source: "Hacker News", date: "Just now", url: "#" }
  ];
  const facts = [
    { text: "91% of cyber attacks start with a phishing email.", slug: "what-is-phishing" },
    { text: "The average cost of a data breach in 2024 was $4.88 million.", slug: "what-is-a-data-breach" },
    { text: "It takes organizations an average of 277 days to identify and contain a breach.", slug: "what-is-incident-response" },
    { text: "Roughly 80% of breaches involve compromised credentials.", slug: "what-are-credentials" },
    { text: 'The most hacked password is still "123456" \u2014 it appears in over 23 million breaches.', slug: "what-is-authentication" },
    { text: "Cybercrime damages are projected to reach $10.5 trillion annually by 2025.", slug: "what-is-cybersecurity" },
    { text: "Human error accounts for approximately 95% of cybersecurity breaches.", slug: "what-is-a-security-audit" },
    { text: "A ransomware attack happens every 11 seconds.", slug: "what-is-ransomware" },
    { text: "Only 5% of companies' folders are properly protected.", slug: "what-is-data-encryption-at-rest" },
    { text: "The first computer virus, Creeper, was detected in 1971.", slug: "what-is-malware" }
  ];
  return renderTemplate`<!-- Today in Security -->${maybeRenderHead()}<div class="bg-bg-card border border-border rounded-xl p-5 mb-6"> <h2 class="text-xs uppercase tracking-widest text-text-dim font-semibold mb-3">📡 Today in Security</h2> <div> ${newsItems.map((item) => renderTemplate`<div class="py-2.5 border-b border-border last:border-0"> <a${addAttribute(item.url, "href")} target="_blank" rel="noopener noreferrer" class="block text-xs leading-relaxed hover:text-accent-light transition-colors"> <span${addAttribute(`badge ${item.color} mr-1.5`, "class")}>${item.tag}</span> ${item.title} </a> <div class="text-text-dim text-[0.65rem] mt-1">${item.source} · ${item.date}</div> </div>`)} </div> </div> <!-- Newsletter --> <div class="bg-bg-card border border-border rounded-xl p-5 mb-6"> <h2 class="text-xs uppercase tracking-widest text-text-dim font-semibold mb-3">✉️ Newsletter</h2> <form id="newsletter-form" class="space-y-2"> <input type="email" placeholder="you@email.com" class="w-full px-3 py-2 bg-bg border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent font-sans"> <button type="submit" class="w-full px-3 py-2 bg-accent text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer">Subscribe</button> </form> <p class="text-text-dim text-xs mt-2">Every Tuesday & Friday. No spam, ever.</p> </div> <!-- Did You Know --> <div class="bg-bg-card border border-border rounded-xl p-5 mb-6"> <h2 class="text-xs uppercase tracking-widest text-text-dim font-semibold mb-3">🧠 Did You Know?</h2> <p class="text-sm mb-3" id="didYouKnow"${addAttribute(JSON.stringify(facts), "data-facts")} data-index="0">${facts[0].text}</p> <button id="nextFactBtn" class="text-xs border border-border rounded-md px-3 py-1 text-accent-light hover:bg-bg-hover transition-colors cursor-pointer">Next fact</button> <a${addAttribute(`/articles/${facts[0].slug}`, "href")} id="factReadMore" class="block mt-3 text-xs text-accent hover:underline">Read more: ${facts[0].text.split(" ").slice(0, 5).join(" ")}... →</a> </div> <!-- Suggest a Topic --> <div> <h2 class="text-xs uppercase tracking-widest text-text-dim font-semibold mb-3">💡 Suggest a Topic</h2> <form id="suggest-form" class="flex gap-2"> <textarea placeholder="e.g. How do password managers work?" rows="2" class="flex-1 min-w-0 px-3 py-2 bg-bg border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent resize-none font-sans"></textarea> <button type="submit" class="px-4 py-2 bg-accent text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shrink-0">Send</button> </form> </div>`;
}, "/Users/karthikeyan/hackzoo-owl/cyberplain/src/components/Sidebar.astro", void 0);

const $$Astro = createAstro("https://cyberplain.ai");
async function getStaticPaths() {
  const articles = await getCollection("articles");
  return articles.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const allArticles = await getCollection("articles");
  const currentTopic = TOPICS.find((t) => t.title === entry.data.topic);
  const topicArticles = currentTopic?.articles || [];
  const currentIdx = topicArticles.indexOf(entry.slug);
  const nextSlug = currentIdx >= 0 && currentIdx < topicArticles.length - 1 ? topicArticles[currentIdx + 1] : null;
  const relatedArticles = topicArticles.filter((s) => s !== entry.slug).slice(0, 3).map((s) => allArticles.find((a) => a.slug === s)).filter(Boolean);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": entry.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1200px] mx-auto px-6 py-8"> <div class="grid grid-cols-[1fr_300px] gap-12 items-start max-lg:grid-cols-1"> <!-- Main content --> <main class="min-w-0"> <a href="/" class="inline-block mb-4 text-text-muted text-sm hover:text-text transition-colors">← Back home</a> <article class="bg-bg-card border border-border rounded-xl p-6 md:p-10"> <header class="mb-8"> <span class="badge bg-accent text-white mb-3">${entry.data.topic}</span> <h1 class="text-2xl md:text-3xl font-bold leading-tight mb-2">${entry.data.title}</h1> <span class="text-text-dim text-sm">${entry.data.readTime}</span> </header> <div class="prose prose-invert prose-lg max-w-none"> ${renderComponent($$result2, "Content", Content, {})} </div> <hr class="border-border my-10"> <div class="text-text-muted text-sm"> <p class="italic mb-4">${entry.data.title.replace(/^What (Is|Are) /i, "").replace(/\?$/, "")} — that's the core of it.</p> ${nextSlug && renderTemplate`<p>
Want to go deeper? Next up:${" "} <a${addAttribute(`/articles/${nextSlug}`, "href")} class="text-accent-light font-medium hover:underline"> ${nextSlug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ").replace(/^What (Is|Are) /i, "$1 ")}?
</a> </p>`} </div> </article> <!-- Keep reading --> ${relatedArticles.length > 0 && renderTemplate`<section class="mt-12"> <h3 class="text-lg font-semibold mb-4">Keep reading</h3> <div class="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4"> ${relatedArticles.map((a) => renderTemplate`<a${addAttribute(`/articles/${a.slug}`, "href")} class="block bg-bg-card border border-border rounded-xl p-5 card-hover"> <h4 class="font-semibold text-sm mb-1">${a.data.title}</h4> <span class="text-text-dim text-xs">${a.data.readTime}</span> </a>`)} </div> </section>`} <!-- Newsletter CTA --> <section class="mt-8 text-center bg-bg-card border border-border rounded-xl p-8"> <h3 class="text-lg font-semibold mb-2">Get new explanations in your inbox</h3> <p class="text-text-dim text-sm mb-4">Every Tuesday & Friday. No spam, ever.</p> <form class="flex gap-2 max-w-md mx-auto" onsubmit="event.preventDefault();const i=this.querySelector('input');if(i.value){alert('Thanks: '+i.value);i.value='';}"> <input type="email" placeholder="you@example.com" required class="flex-1 px-4 py-2.5 bg-bg border border-border rounded-lg text-text text-sm focus:outline-none focus:border-accent"> <button type="submit" class="px-5 py-2.5 bg-accent text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer">Subscribe</button> </form> </section> </main> <!-- Sidebar --> <aside class="max-lg:hidden sticky top-20"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} </aside> </div> </div> ` })}`;
}, "/Users/karthikeyan/hackzoo-owl/cyberplain/src/pages/articles/[slug].astro", void 0);

const $$file = "/Users/karthikeyan/hackzoo-owl/cyberplain/src/pages/articles/[slug].astro";
const $$url = "/articles/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

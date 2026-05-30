/* empty css                                 */
import { V as createComponent, a2 as renderComponent, aa as renderTemplate, a0 as maybeRenderHead, J as addAttribute } from '../chunks/astro/server_BnJdSZNs.mjs';
import 'kleur/colors';
import { $ as $$Base, T as TOPICS } from '../chunks/Base_DNA_Z2_t.mjs';
import { g as getCollection } from '../chunks/_astro_content_aX_AAUo5.mjs';
export { renderers } from '../renderers.mjs';

const $$Topics = createComponent(async ($$result, $$props, $$slots) => {
  const articles = await getCollection("articles");
  const articleMap = {};
  articles.forEach((a) => {
    articleMap[a.slug] = a;
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Table of Contents" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-[1200px] mx-auto px-6 py-8"> <main> <a href="/" class="inline-block mb-4 text-text-muted text-sm hover:text-text transition-colors">← Back home</a> <h1 class="text-2xl md:text-3xl font-bold mb-2">Table of Contents</h1> <p class="text-text-muted mb-8">Everything cybersecurity, organized from foundational to advanced.</p> ${TOPICS.map((topic) => {
    const topicArticles = topic.articles.map((slug) => articleMap[slug]).filter(Boolean);
    const plannedCount = topic.articles.length - topicArticles.length;
    return renderTemplate`<section class="mb-10"> <h2 class="text-xl font-semibold mb-1">${topic.emoji} ${topic.title}</h2> <p class="text-text-muted text-sm mb-4">${topic.description}</p> <div class="space-y-2"> ${topicArticles.map((a) => renderTemplate`<a${addAttribute(`/articles/${a.slug}`, "href")} class="flex justify-between items-center bg-bg-card border border-border rounded-xl px-5 py-4 card-hover"> <h3 class="font-semibold text-[0.95rem]">${a.data.title}</h3> <span class="text-text-dim text-xs shrink-0 ml-4">${a.data.readTime}</span> </a>`)} ${plannedCount > 0 && renderTemplate`<div class="flex flex-wrap gap-2 pl-2"> ${topic.articles.filter((s) => !articleMap[s]).map((slug) => renderTemplate`<span class="text-xs text-text-dim bg-bg-card border border-border border-dashed rounded-lg px-3 py-1.5"> ${slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ").replace(/What (Is|Are) /i, "")} <span class="ml-1 opacity-60">soon</span> </span>`)} </div>`} </div> </section>`;
  })} </main> </div> ` })}`;
}, "/Users/karthikeyan/hackzoo-owl/cyberplain/src/pages/topics.astro", void 0);

const $$file = "/Users/karthikeyan/hackzoo-owl/cyberplain/src/pages/topics.astro";
const $$url = "/topics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Topics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

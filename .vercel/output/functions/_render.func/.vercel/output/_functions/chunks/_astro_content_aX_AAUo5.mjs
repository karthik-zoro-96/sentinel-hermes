import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isCoreRemotePath, V as VALID_INPUT_FORMATS, p as prependForwardSlash } from './astro/assets-service_BKVD6LAP.mjs';
import { a as AstroError, U as UnknownContentCollectionError, V as createComponent, ab as renderUniqueStylesheet, a7 as renderScriptElement, W as createHeadAndContent, a2 as renderComponent, aa as renderTemplate, ae as unescapeHTML } from './astro/server_BnJdSZNs.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isCoreRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://cyberplain.ai", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/articles/cia-triad.md": () => import('./cia-triad_BLay4u66.mjs'),"/src/content/articles/threats-vulnerabilities-risks.md": () => import('./threats-vulnerabilities-risks_q99EOgrL.mjs'),"/src/content/articles/what-are-credentials.md": () => import('./what-are-credentials_-3APyb4U.mjs'),"/src/content/articles/what-are-supply-chain-attacks.md": () => import('./what-are-supply-chain-attacks_CbhSdBwP.mjs'),"/src/content/articles/what-is-a-data-breach.md": () => import('./what-is-a-data-breach_DNfJy4s6.mjs'),"/src/content/articles/what-is-a-firewall.md": () => import('./what-is-a-firewall_DHT5cq-Y.mjs'),"/src/content/articles/what-is-a-security-audit.md": () => import('./what-is-a-security-audit_BDsnkXeZ.mjs'),"/src/content/articles/what-is-a-vpn.md": () => import('./what-is-a-vpn_CjwJUBoH.mjs'),"/src/content/articles/what-is-a-zero-day.md": () => import('./what-is-a-zero-day_BQAW9Uki.mjs'),"/src/content/articles/what-is-antivirus.md": () => import('./what-is-antivirus_DXvuC1z6.mjs'),"/src/content/articles/what-is-authentication.md": () => import('./what-is-authentication_CiVoCJ7W.mjs'),"/src/content/articles/what-is-compliance.md": () => import('./what-is-compliance_D7gjEC8g.mjs'),"/src/content/articles/what-is-cyber-warfare.md": () => import('./what-is-cyber-warfare_gaWkeuwf.mjs'),"/src/content/articles/what-is-cybersecurity.md": () => import('./what-is-cybersecurity_BziKE-Gs.mjs'),"/src/content/articles/what-is-data-encryption-at-rest.md": () => import('./what-is-data-encryption-at-rest_VnG0YzrK.mjs'),"/src/content/articles/what-is-ddos.md": () => import('./what-is-ddos_Cpz-A9_y.mjs'),"/src/content/articles/what-is-encryption.md": () => import('./what-is-encryption_Csxr9feR.mjs'),"/src/content/articles/what-is-endpoint-detection.md": () => import('./what-is-endpoint-detection_Cb42NY2Y.mjs'),"/src/content/articles/what-is-gdpr.md": () => import('./what-is-gdpr_KjQoRtwL.mjs'),"/src/content/articles/what-is-identity-theft.md": () => import('./what-is-identity-theft_CVWoUI2h.mjs'),"/src/content/articles/what-is-incident-response.md": () => import('./what-is-incident-response_V9zbKjB6.mjs'),"/src/content/articles/what-is-malware.md": () => import('./what-is-malware_DsudcyEb.mjs'),"/src/content/articles/what-is-mfa.md": () => import('./what-is-mfa_wyOxuGB8.mjs'),"/src/content/articles/what-is-offensive-security.md": () => import('./what-is-offensive-security_CRAz-UDt.mjs'),"/src/content/articles/what-is-penetration-testing.md": () => import('./what-is-penetration-testing_BkVf6MzH.mjs'),"/src/content/articles/what-is-phishing.md": () => import('./what-is-phishing_vu8Ohy9o.mjs'),"/src/content/articles/what-is-privilege-escalation.md": () => import('./what-is-privilege-escalation_D3VlVb5y.mjs'),"/src/content/articles/what-is-ransomware.md": () => import('./what-is-ransomware_Dv_nnR3H.mjs'),"/src/content/articles/what-is-social-engineering.md": () => import('./what-is-social-engineering_CmSqI7wK.mjs'),"/src/content/articles/what-is-the-dark-web.md": () => import('./what-is-the-dark-web_B_SzKARb.mjs'),"/src/content/articles/what-is-threat-intelligence.md": () => import('./what-is-threat-intelligence_f9cpqmZP.mjs'),"/src/content/articles/what-is-zero-trust.md": () => import('./what-is-zero-trust_DoJzEK2g.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"articles":{"type":"content","entries":{"cia-triad":"/src/content/articles/cia-triad.md","threats-vulnerabilities-risks":"/src/content/articles/threats-vulnerabilities-risks.md","what-are-credentials":"/src/content/articles/what-are-credentials.md","what-are-supply-chain-attacks":"/src/content/articles/what-are-supply-chain-attacks.md","what-is-a-data-breach":"/src/content/articles/what-is-a-data-breach.md","what-is-a-firewall":"/src/content/articles/what-is-a-firewall.md","what-is-a-vpn":"/src/content/articles/what-is-a-vpn.md","what-is-a-security-audit":"/src/content/articles/what-is-a-security-audit.md","what-is-antivirus":"/src/content/articles/what-is-antivirus.md","what-is-a-zero-day":"/src/content/articles/what-is-a-zero-day.md","what-is-authentication":"/src/content/articles/what-is-authentication.md","what-is-compliance":"/src/content/articles/what-is-compliance.md","what-is-cyber-warfare":"/src/content/articles/what-is-cyber-warfare.md","what-is-cybersecurity":"/src/content/articles/what-is-cybersecurity.md","what-is-data-encryption-at-rest":"/src/content/articles/what-is-data-encryption-at-rest.md","what-is-ddos":"/src/content/articles/what-is-ddos.md","what-is-encryption":"/src/content/articles/what-is-encryption.md","what-is-endpoint-detection":"/src/content/articles/what-is-endpoint-detection.md","what-is-gdpr":"/src/content/articles/what-is-gdpr.md","what-is-identity-theft":"/src/content/articles/what-is-identity-theft.md","what-is-malware":"/src/content/articles/what-is-malware.md","what-is-offensive-security":"/src/content/articles/what-is-offensive-security.md","what-is-mfa":"/src/content/articles/what-is-mfa.md","what-is-incident-response":"/src/content/articles/what-is-incident-response.md","what-is-phishing":"/src/content/articles/what-is-phishing.md","what-is-penetration-testing":"/src/content/articles/what-is-penetration-testing.md","what-is-privilege-escalation":"/src/content/articles/what-is-privilege-escalation.md","what-is-ransomware":"/src/content/articles/what-is-ransomware.md","what-is-social-engineering":"/src/content/articles/what-is-social-engineering.md","what-is-the-dark-web":"/src/content/articles/what-is-the-dark-web.md","what-is-threat-intelligence":"/src/content/articles/what-is-threat-intelligence.md","what-is-zero-trust":"/src/content/articles/what-is-zero-trust.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/articles/cia-triad.md": () => import('./cia-triad_CKxFyVNK.mjs'),"/src/content/articles/threats-vulnerabilities-risks.md": () => import('./threats-vulnerabilities-risks_CVMq1UAL.mjs'),"/src/content/articles/what-are-credentials.md": () => import('./what-are-credentials_CmFM5lgD.mjs'),"/src/content/articles/what-are-supply-chain-attacks.md": () => import('./what-are-supply-chain-attacks_DMED-lUU.mjs'),"/src/content/articles/what-is-a-data-breach.md": () => import('./what-is-a-data-breach_DIQtfsAx.mjs'),"/src/content/articles/what-is-a-firewall.md": () => import('./what-is-a-firewall_dTDjZ7_V.mjs'),"/src/content/articles/what-is-a-security-audit.md": () => import('./what-is-a-security-audit_9m4oWg4a.mjs'),"/src/content/articles/what-is-a-vpn.md": () => import('./what-is-a-vpn_Dqi2U2lz.mjs'),"/src/content/articles/what-is-a-zero-day.md": () => import('./what-is-a-zero-day_DxM85bTW.mjs'),"/src/content/articles/what-is-antivirus.md": () => import('./what-is-antivirus_bPKfUuTu.mjs'),"/src/content/articles/what-is-authentication.md": () => import('./what-is-authentication_ampWv_Kj.mjs'),"/src/content/articles/what-is-compliance.md": () => import('./what-is-compliance_SCwOAmKW.mjs'),"/src/content/articles/what-is-cyber-warfare.md": () => import('./what-is-cyber-warfare_CgM6NjdK.mjs'),"/src/content/articles/what-is-cybersecurity.md": () => import('./what-is-cybersecurity_D9ZGCnrc.mjs'),"/src/content/articles/what-is-data-encryption-at-rest.md": () => import('./what-is-data-encryption-at-rest_QckHUlGY.mjs'),"/src/content/articles/what-is-ddos.md": () => import('./what-is-ddos_6w3eXnet.mjs'),"/src/content/articles/what-is-encryption.md": () => import('./what-is-encryption_JktNgly1.mjs'),"/src/content/articles/what-is-endpoint-detection.md": () => import('./what-is-endpoint-detection_Cu7_Prn3.mjs'),"/src/content/articles/what-is-gdpr.md": () => import('./what-is-gdpr_CRch3hn7.mjs'),"/src/content/articles/what-is-identity-theft.md": () => import('./what-is-identity-theft_C0XtCPoQ.mjs'),"/src/content/articles/what-is-incident-response.md": () => import('./what-is-incident-response_CFoXMnL-.mjs'),"/src/content/articles/what-is-malware.md": () => import('./what-is-malware_DR4JxAVt.mjs'),"/src/content/articles/what-is-mfa.md": () => import('./what-is-mfa_BgsPh5oF.mjs'),"/src/content/articles/what-is-offensive-security.md": () => import('./what-is-offensive-security_BPcllsb9.mjs'),"/src/content/articles/what-is-penetration-testing.md": () => import('./what-is-penetration-testing_BrAyL4xY.mjs'),"/src/content/articles/what-is-phishing.md": () => import('./what-is-phishing_BX4pCb-R.mjs'),"/src/content/articles/what-is-privilege-escalation.md": () => import('./what-is-privilege-escalation_BnGPZj6P.mjs'),"/src/content/articles/what-is-ransomware.md": () => import('./what-is-ransomware_DbcaTB69.mjs'),"/src/content/articles/what-is-social-engineering.md": () => import('./what-is-social-engineering_BrCDm_hI.mjs'),"/src/content/articles/what-is-the-dark-web.md": () => import('./what-is-the-dark-web_CpyCABFs.mjs'),"/src/content/articles/what-is-threat-intelligence.md": () => import('./what-is-threat-intelligence_Bzx7Oxka.mjs'),"/src/content/articles/what-is-zero-trust.md": () => import('./what-is-zero-trust_Do4z290t.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };

// src/i18n/routes.ts

/** remove trailing slash excepto root */
function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

/**
 * Regras de prefixo (ótimo para páginas de localidade)
 * - fromPrefix -> toPrefix
 */
const prefixRules = [
  {
    from: "/gestao-alojamento-local/",
    to: "/en/vacation-rental-management/",
  },
  {
    from: "/en/vacation-rental-management/",
    to: "/gestao-alojamento-local/",
  },
  // Vagas de emprego
  {
    from: "/carreiras/vagas-emprego/",
    to: "/en/careers/job-openings/",
  },
  {
    from: "/en/careers/job-openings/",
    to: "/carreiras/vagas-emprego/",
  },
] as const;

/**
 * Map pequeno para páginas “base” cujo slug muda (serviços/modelos/etc.)
 * (aqui só metes as páginas que NÃO seguem regra de prefixo)
 */
const exactMap: Record<string, string> = {
  "/gestao-alojamento-local": "/en/vacation-rental-management",
  "/gestao-empreendimentos-turisticos": "/en/serviced-accommodation",
  "/gestao-ativos-hoteleiros": "/en/hotel-asset-management",
  "/rentabilidade-garantida": "/en/rent-to-rent",
  "/comissao": "/en/commission",
  "/referrals": "/en/referrals",
};

const inverseExactMap: Record<string, string> = Object.fromEntries(
  Object.entries(exactMap).map(([pt, en]) => [en, pt])
);

export function getAlternateHref(pathname: string, targetLang: "pt" | "en") {
  const path = normalize(pathname);
  const isEn = path === "/en" || path.startsWith("/en/");

  // ==========
  // QUERO EN
  // ==========
  if (targetLang === "en") {
    // já estás em EN
    if (isEn) return path === "/en" ? "/en/" : path;

    // 1) Regras por prefixo (localidades)
    for (const r of prefixRules) {
      if (path.startsWith(r.from) && r.to.startsWith("/en/")) {
        return r.to + path.slice(r.from.length);
      }
    }

    // 2) Map exacto
    if (exactMap[path]) return exactMap[path];

    // 3) fallback: prefixar /en
    return `/en${path === "/" ? "/" : path}`;
  }

  // ==========
  // QUERO PT
  // ==========
  if (!isEn) return path;

  // 1) Regras por prefixo (localidades)
  for (const r of prefixRules) {
    if (path.startsWith(r.from) && !r.to.startsWith("/en/")) {
      return r.to + path.slice(r.from.length);
    }
  }

  // 2) Map exacto inverso
  if (inverseExactMap[path]) return inverseExactMap[path];

  // 3) fallback: remover /en
  const pt = path.replace(/^\/en/, "");
  return pt === "" ? "/" : pt;
}

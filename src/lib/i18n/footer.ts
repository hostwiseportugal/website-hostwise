// src/i18n/footer.ts
export type Lang = "pt" | "en";

export const footerCopy: Record<Lang, {
  tagline: string;

  servicesTitle: string;
  service1: string;
  service2: string;
  service3: string;

  locationsTitle: string;
  companyTitle: string;

  about: string;
  careers: string;
  blog: string;
  contact: string;

  newsletterTitle: string;
  newsletterDesc: string;
  newsletterCta: string;

  copyright: string;

  privacy: string;
  cookies: string;
}> = {
  pt: {
    tagline: "Gestão de Alojamento Local e Ativos Hoteleiros em Portugal.",

    servicesTitle: "Serviços",
    service1: "Gestão de Alojamento Local",
    service2: "Gestão de Empreendimentos Turísticos",
    service3: "Gestão de Ativos Hoteleiros",

    locationsTitle: "Localizações",
    companyTitle: "A Empresa",

    about: "Sobre a Host Wise",
    careers: "Carreiras na Host Wise",
    blog: "Blog",
    contact: "Contacte-nos",

    newsletterTitle: "Newsletter",
    newsletterDesc: "Receba as nossas últimas notícias e ofertas exclusivas.",
    newsletterCta: "Subscrever Newsletter",

    copyright: "Todos os direitos reservados.",

    privacy: "Política de Privacidade",
    cookies: "Política de Cookies",
  },

  en: {
    tagline: "Vacation Rental and Hotel Asset Management in Portugal.",

    servicesTitle: "Services",
    service1: "Vacation Rental Management",
    service2: "Serviced Accommodation",
    service3: "Hotel Asset Management",

    locationsTitle: "Locations",
    companyTitle: "Company",

    about: "About Host Wise",
    careers: "Careers at Host Wise",
    blog: "Blog",
    contact: "Contact Us",

    newsletterTitle: "Newsletter",
    newsletterDesc: "Get our latest news and exclusive offers.",
    newsletterCta: "Subscribe to Newsletter",

    copyright: "All rights reserved.",

    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
  },
};

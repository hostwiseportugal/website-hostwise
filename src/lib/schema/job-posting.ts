type JobPostingInput = {
  url: string;
  title: string;
  descriptionHtml?: string;     // pode vir com HTML
  requirementsHtml?: string;    // pode vir com HTML
  datePosted?: string;          // ISO
  validThrough?: string;        // ISO (se tiveres data de fecho)
  employmentType?: string[];    // ex: ["FULL_TIME"] (só se tiveres)
  hiringOrganization: {
    name: string;
    sameAs?: string[];
    logo?: string;
    url?: string;
  };
  jobLocationText?: string;     // ex: "Porto, Portugal" ou "Portugal"
  workModels?: string[];        // ["Remoto","Híbrido","Presencial"]
  department?: string;
  inLanguage?: string;
};

function stripHtml(html: string) {
  return (html || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>\s*<p>/gi, "\n\n")
    .replace(/<[^>]*>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function isRemote(workModels: string[]) {
  const s = (workModels || []).map((m) => (m || "").toLowerCase());
  return s.includes("remoto") || s.includes("remote");
}

export function jobPostingSchema(input: JobPostingInput) {
  const workModels = input.workModels ?? [];
  const remote = isRemote(workModels);

  const descriptionText = [
    stripHtml(input.descriptionHtml || ""),
    input.requirementsHtml ? `\n\nRequisitos:\n${stripHtml(input.requirementsHtml)}` : "",
  ]
    .join("")
    .trim();

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    url: input.url,
    title: input.title,
    description: descriptionText || input.title,
    inLanguage: input.inLanguage || "pt-PT",
    hiringOrganization: {
      "@type": "Organization",
      name: input.hiringOrganization.name,
      ...(input.hiringOrganization.url ? { url: input.hiringOrganization.url } : {}),
      ...(input.hiringOrganization.logo ? { logo: input.hiringOrganization.logo } : {}),
      ...(input.hiringOrganization.sameAs?.length ? { sameAs: input.hiringOrganization.sameAs } : {}),
    },
    ...(input.department ? { department: input.department } : {}),
    ...(input.datePosted ? { datePosted: input.datePosted } : {}),
    ...(input.validThrough ? { validThrough: input.validThrough } : {}),
  };

  // employmentType só se vier preenchido (não inventar)
  if (input.employmentType?.length) schema.employmentType = input.employmentType;

  // Localização / Remoto
  if (remote) {
    schema.jobLocationType = "TELECOMMUTE";
    schema.applicantLocationRequirements = {
      "@type": "Country",
      name: input.jobLocationText || "Portugal",
    };
  } else if (input.jobLocationText) {
    schema.jobLocation = {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: input.jobLocationText,
        addressCountry: "PT",
      },
    };
  }

  // work model como info adicional sem inventar uma taxonomia
  if (workModels.length) schema.workHours = workModels.join(", ");

  return schema;
}

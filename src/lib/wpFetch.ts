// src/lib/wpFetch.ts
export async function wpFetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: { accept: "application/json" } });

  const contentType = res.headers.get("content-type") || "";
  const text = await res.text();

  // Se não for JSON, loga e rebenta com erro claro (não com JSON.parse do browser)
  if (!res.ok || !contentType.includes("application/json")) {
    console.error("[WP FETCH ERROR]", {
      url,
      status: res.status,
      contentType,
      preview: text.slice(0, 200),
    });
    throw new Error(`WP returned non-JSON or HTTP error (${res.status}) for ${url}`);
  }

  return JSON.parse(text) as T;
}

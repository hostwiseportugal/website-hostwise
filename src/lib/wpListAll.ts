import { wpFetchJson } from "./wpFetch";

export async function wpListAllPosts(apiBase: string, params: string, perPage = 30, maxPages = 20) {
  let page = 1;
  const all: any[] = [];

  while (page <= maxPages) {
    const url = `${apiBase}/posts?per_page=${perPage}&page=${page}&${params}`;
    const batch = await wpFetchJson<any[]>(url);

    all.push(...batch);
    if (batch.length < perPage) break;

    page += 1;
  }

  return all;
}

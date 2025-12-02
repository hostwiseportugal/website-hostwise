const WP_API = import.meta.env.WORDPRESS_API_URL;

export async function getPosts() {
  try {
    const response = await fetch(`${WP_API}/posts`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug) {
  try {
    const response = await fetch(`${WP_API}/posts?slug=${slug}`);
    if (!response.ok) throw new Error('Failed to fetch post');
    const posts = await response.json();
    return posts[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getPages() {
  try {
    const response = await fetch(`${WP_API}/pages`);
    if (!response.ok) throw new Error('Failed to fetch pages');
    const pages = await response.json();
    return pages;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPage(slug) {
  try {
    const response = await fetch(`${WP_API}/pages?slug=${slug}`);
    if (!response.ok) throw new Error('Failed to fetch page');
    const pages = await response.json();
    return pages[0];
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}
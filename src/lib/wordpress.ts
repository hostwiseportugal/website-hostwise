import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(import.meta.env.WORDPRESS_API_URL);

export async function getPosts() {
  const query = `
    query GetPosts {
      posts(first: 10) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  const data: any = await client.request(query);
  return data.posts.nodes;
}

export async function getPostBySlug(slug: string) {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  `;

  const data: any = await client.request(query, { slug });
  return data.post;
}
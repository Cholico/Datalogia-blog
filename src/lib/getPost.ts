import { client } from './sanityClient';

export async function getAllPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
    title,
    slug,
    excerpt,
    categories,
    author,
    image,
    isFeatured
  }`;

  return await client.fetch(query);
}

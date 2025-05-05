import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import { Post } from "../types/post";

export function usePost(slug: string | undefined) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      setLoading(true);

      const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        slug,
        categories,
        author {
          name,
          career
        },
        image,
        content[]{
          ...,
          asset->{
            _id,
            _type,
            url
          }
        },
        excerpt,
        isFeatured
      }`;

      const result = await client.fetch<Post>(query, { slug });
      setPost(result);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  return { post, loading };
}

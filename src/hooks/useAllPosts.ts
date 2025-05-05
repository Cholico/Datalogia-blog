import { useEffect, useState } from "react";
import { client } from "../lib/sanityClient";
import { Post } from "../types/post";

export function useAllPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(_createdAt desc){
          _id,
          title,
          slug,
          excerpt,
          categories,
          author,
          image,
          isFeatured,
          content
        }`;

        const result = await client.fetch(query);
        setPosts(result);
      } catch (error) {
        console.error("Error fetching posts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading };
}

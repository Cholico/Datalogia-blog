// src/pages/CategoryPage.tsx

import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useAllPosts } from "../hooks/useAllPosts";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";
import NoPostFound from "../components/NoPostFound";
import useSeoMeta from "../hooks/useSeoMeta";
import { Category } from "../types/post";

function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { posts, loading } = useAllPosts();

  const postsInCategory = posts?.filter(post => post.categories?.includes(slug as Category?? "")) || [];

  useSeoMeta({
    title: slug ? `${slug.replace(/-/g, " ")} | Datalogia` : "Categoría | Datalogia",
    description: `Artículos en la categoría ${slug?.replace(/-/g, " ")}`,
  });

  if (loading) return <Loader />;
  if (!postsInCategory.length) return <NoPostFound />;

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
  >
      <section className="max-w-5xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold capitalize mb-8">{slug?.replace(/-/g, " ")}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {postsInCategory.map(post => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default CategoryPage;

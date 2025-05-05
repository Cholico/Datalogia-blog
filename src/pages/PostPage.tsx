import { useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import { urlFor } from "../lib/sanityClient";
import { getCategoryColor } from "../utils/getCategoryColor";
import PortableTextRenderer from "../components/PortableTextRenderer";
import Loader from "../components/Loader";
import NoPostFound from "../components/NoPostFound";
import useSeoMeta from "../hooks/useSeoMeta";
import { motion } from "framer-motion";

function PostPage() {
  const { slug } = useParams();
  const { post, loading } = usePost(slug);

  // Mientras carga el post
  useSeoMeta({
    title: post ? `${post.title} | Datalogia` : "Cargando artículo...",
    description: post?.excerpt,
    image: post?.image?.url,
  });

  if (loading) return <Loader />
  if (!post) return <NoPostFound />

  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
  >
      <article className="min-h-screen max-w-5xl mx-auto px-4 py-10 space-y-6">
        {post.image && (
          <img
            src={urlFor(post.image)}
            alt={post.title}
            className="w-full h-96 object-cover rounded-xl"
          />
      )}

        <div className="flex flex-wrap gap-2">
          {post.categories?.map((category) => (
            <span
              key={category}
              className={`inline-block ${getCategoryColor(category)} text-xs font-semibold px-3 py-1 rounded-full mt-5`}
            >
              {category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-sans font-normal mt-5">{post.title}</h1>

        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
          Por <span className="font-semibold">{post.author?.name ?? "Autor desconocido"}</span>
          {post.author?.career && ` — ${post.author.career}`}
        </p>

        <div className="prose dark:prose-invert max-w-none mt-4">
          <p>{post.excerpt}</p>
        </div>

        <div className="prose dark:prose-invert max-w-none mt-8">
          <PortableTextRenderer value={post.content ?? []} />
        </div>

      </article>
    </motion.div>
  );
}

export default PostPage;
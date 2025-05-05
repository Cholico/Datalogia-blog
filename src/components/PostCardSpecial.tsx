import { Post } from "../types/post";
import { motion } from "framer-motion";
import { urlFor } from "../lib/sanityClient";
import { getCategoryColor } from "../utils/getCategoryColor";
import { Link } from "react-router-dom";

interface Props {
  post: Post;
}

function PostCardSpecial({ post }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full min-h-[60vh] bg-cover bg-center flex items-center justify-start rounded-xl overflow-hidden"
      style={{ backgroundImage: `url(${urlFor(post.image)})` }}
    >
      {/* Tarjeta de contenido */}
      <div className="bg-white/95 dark:bg-gray-800/90 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl max-w-max m-6">
        
        {/* Badges de categorías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories?.map((category) => (
            <Link to= {`/category/${category}`} key={category}>
              <span
                key={category}
                className={`inline-block ${getCategoryColor(category)} text-xs font-semibold text-[10px] px-2 py-[2px] rounded-xl`}
            >
                {category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </span>
            </Link>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
          {post.title}
        </h1>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          Por <span className="font-medium">{post.author.name}</span> — {post.author.career}
        </p>
        
        <p className="text-gray-700 dark:text-gray-200 text-base mb-4">
          {post.excerpt}
        </p>
        
        <Link to={`/post/${post.slug.current}`} className="text-sm text-blue-600 hover:underline transition-all self-start">
          Leer más →
        </Link>
      </div>
    </motion.section>
  );
}

export default PostCardSpecial;

import { Post } from "../types/post";
import { urlFor } from "../lib/sanityClient";
import { getCategoryColor } from "../utils/getCategoryColor";
import { Link } from "react-router-dom";

interface Props {
  post: Post;
}

function PostCard({ post }: Props) {
  return (
    <article className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col">
      {/* Imagen arriba */}
      <img
        src={post.image ? urlFor(post.image) : undefined}
        alt={post.title}
        className="w-full h-56 object-cover"
      />

      {/* Contenido debajo */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        
        {/* Badges de categorías */}
        <div className="flex flex-wrap gap-2 mb-3">
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

        <h2 className="text-xl font-bold mb-2">{post.title}</h2>

        <p className="text-xs text-gray-400 dark:text-gray-400 mb-2">
          Por <span className="font-medium">{post.author.name}</span> — {post.author.career}
        </p>

        <p className="text-gray-700 dark:text-gray-200 text-base mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <Link to={`/post/${post.slug.current}`} className="text-sm text-blue-600 hover:underline transition-all self-start">
          Leer más →
        </Link>

      </div>
    </article>
  );
}

export default PostCard;

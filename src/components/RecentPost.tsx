import { Link } from "react-router-dom";
import { Post } from "../types/post";
import { urlFor } from "../lib/sanityClient";

interface Props {
  posts: Post[];
  limit?: number;
}

function RecentPosts({ posts, limit = 3 }: Props) {
  // Ordenar los posts por fecha descendente
  const sortedPosts = posts
    .slice()
    .sort(
      (a, b) => new Date(b.createdAt ?? "").getTime() - new Date(a.createdAt ?? "").getTime()
    )
    .slice(0, limit);

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Últimos Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sortedPosts.map((post) => (
          <article
            key={post._id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <img
              src={post.image ? urlFor(post.image) : undefined}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{post.excerpt}</p>
              <Link
                to={`/post/${post.slug.current}`}
                className="text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm"
              >
                Leer más →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecentPosts;

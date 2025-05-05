import PostCard from "../components/PostCard";
import PostCardSpecial from "../components/PostCardSpecial";
import usePageTitle from "../hooks/usePageTitle";
import { useAllPosts } from "../hooks/useAllPosts";
import Loader from "../components/Loader";
import { motion } from "framer-motion";
import RecentPosts from "../components/RecentPost";


function Home() {
  
  const {posts, loading} = useAllPosts();

  usePageTitle("Datalogia -Blog y diario de aprendizaje");
  if (loading) return <Loader />

  const specialPost = posts.find(post => post.categories.includes('Mision'));
  const aboutAndFuturePosts = posts.filter(post => 
    post.categories.includes('Historia') || post.categories.includes('Futuro')
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10 min-h-screen">
        <h1 className="text-4xl font-sans font-normal mb-6 text-start">
          Aprende conmigo sobre el nuevo oro: los datos, y descubre todo lo que podemos hacer con ellos.
        </h1>

        {/* Post especial */}
        {specialPost && (
          <div className="mt-6">
            <PostCardSpecial post={specialPost} />
          </div>
        )}

        {/* Resto de posts tambien fijos */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
          {aboutAndFuturePosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>

        {/* Mostrar últimos posts */}
        <RecentPosts posts={posts} />
      </div>
    </motion.div>
  );
}

export default Home;

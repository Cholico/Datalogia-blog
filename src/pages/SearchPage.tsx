import { useState } from "react";
import { useAllPosts } from "../hooks/useAllPosts";
import SearchBar from "../components/SearchBar";
import PostCard from "../components/PostCard";
import useSeoMeta from "../hooks/useSeoMeta";
import { motion } from "framer-motion";

export default function SearchPage() {

    const {posts} = useAllPosts();
    const [query, setQuery] = useState("");

    // Seo y mas Seo
    useSeoMeta({
        title: "Datalogia | Buscador de Post",
        description: "Busacdor de contenido mediante titulo, categoria o descripcion",
    });

    const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(query.toLowerCase()) ||
      post.categories?.some(category => 
        category.toLocaleLowerCase().includes(query.toLowerCase())
      )
    );

    return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
            <section className="min-h-screen max-w-5xl mx-auto px-4 py-10 space-y-6">
                <h1 className="text-4xl font-sans font-normal mb-6 text-center">
                    Buscador de post mediente titulo, categoria o descripcion.
                </h1>

                <SearchBar onSearch={setQuery} />

                <div className="space-y-8">
                    {filteredPosts.map(post => (
                    <PostCard key={post._id} post={post} />
                    ))}

                    {filteredPosts.length === 0 && (
                    <p className="text-center text-gray-500">No se encontraron posts.</p>
                    )}
                </div>
            </section>
        </motion.div>
    )
}

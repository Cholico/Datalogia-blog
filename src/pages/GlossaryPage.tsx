import { useState, useMemo } from "react";
import useGlossary from "../hooks/useGlossary";
import SearchBar from "../components/SearchBar";
import useSeoMeta from "../hooks/useSeoMeta";
import { motion } from "framer-motion";
import Fuse from "fuse.js";
import Loader from "../components/Loader";

function GlossaryPage() {
    const { terms, loading } = useGlossary();
    const [query, setQuery] = useState("");

    // SEO
    useSeoMeta({
        title: "Datalogia | Glosario",
        description: "Buscador de conceptos y términos sobre datos y programación",
    });

    // Configurar Fuse.js
    const fuse = useMemo(() => {
        return new Fuse(terms, {
            keys: ["term", "definition", "relatedCategories"],
            threshold: 0.4, // Sensibilidad (entre 0 y 1). Más bajo es más estricto.
        });
    }, [terms]);

    // Filtrar términos
    const filteredWords = query
        ? fuse.search(query).map((result) => result.item)
        : terms;

    if (loading) return <Loader />;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
        >
            <div className="min-h-screen max-w-4xl mx-auto py-12 px-4">
                <h1 className="text-4xl font-bold mb-8">Glosario</h1>

                <h2 className="text-2xl font-sans font-normal mb-6 text-center">
                    Busca conceptos relevantes para tu aprendizaje.
                </h2>

                <SearchBar onSearch={setQuery} />

                {/* Si no hay resultados */}
                {filteredWords.length === 0 && (
                    <p className="text-gray-500 mt-8">No se encontraron resultados.</p>
                )}

                <div className="space-y-8 mt-8">
                    {filteredWords.map((term) => (
                        <div
                            key={term._id}
                            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
                        >
                            <h2 className="text-2xl font-bold">{term.term}</h2>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">{term.definition}</p>

                            {term.relatedCategories?.length > 0 && (
                                <p className="mt-2 text-xs text-gray-400">
                                    Categorías relacionadas: {term.relatedCategories.join(", ")}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default GlossaryPage;

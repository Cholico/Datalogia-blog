import { FaLinkedin, FaGithub, FaEnvelope  } from "react-icons/fa";
import myphoto from "../assets/imagenes/myphoto.webp"
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5 }}
   > 
        <section className="max-w-3xl min-h-screen mx-auto px-4 py-10 space-y-8 text-gray-800 dark:text-gray-100 justify-items-center">
        <h1 className="text-3xl font-bold  text-center mb-3">Sobre mí</h1>

        <picture>
                <source srcSet={myphoto} type="image/webp" />
                <img
                    loading="eager"
                    src={myphoto}
                    alt="Foto de Alejandro Cholico"
                    className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-gray-300 dark:border-gray-700 shadow-md hover:shadow-lg transition"
                />
            </picture>

            <p className="text-justify">
                ¡Hola! Soy Alejandro Cholico, estudiante —a punto de titularme— de Ingeniería en Computación, apasionado por la inteligencia artificial, el análisis de datos, el desarrollo de software, el deporte, los videojuegos y, por supuesto, la comida.
                Este blog es mi espacio personal para compartir todo lo que voy aprendiendo en mi camino por el fascinante mundo del aprendizaje automático, las estadísticas y la programación.
                ¿Mi sueño? Convertirme en un influencer tech... bueno, no es cierto (o tal vez sí 😄). Pero en serio, siempre he querido crear contenido y este es un primer paso para hacerlo realidad.
            </p>

            <p className="text-justify">
                Documentar mi aprendizaje me ayuda a organizarme y también puede ser útil para otros que estén en el mismo camino.
                Además, es mi manera de contribuir a la comunidad de aprendizaje.
            </p>

            <h2 className="text-2xl font-semibold">Contacto</h2>

            <p>Si tienes sugerencias, ideas o simplemente quieres saludar, puedes encontrarme en:</p>

            <div className="flex space-x-6 text-2xl justify-center">
                    <a
                        href="www.linkedin.com/in/alejandro-cholico-torres-417572259"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/Cholico"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-800 dark:hover:text-white transition-colors"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="mailto:ing.alejandrocholico@gmail.com"
                        className="hover:text-red-500 transition-colors"
                    >
                        <FaEnvelope />
                    </a>
                </div>

        </section>
    </motion.div>
  );
}

export default About;

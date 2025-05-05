import { FaLinkedin, FaGithub, FaEnvelope  } from "react-icons/fa";


export default function Fototer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 mt-16">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="text-center md:text-left">
                    <p className="font-semibold text-lg">Alejandro Cholico</p>
                    <p className="text-sm">© {year} Todos los derechos reservados.</p>
                </div>


                <div className="flex space-x-6 text-2xl">
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

                <div className="text-sm text-center md:text-right">
                    <p>Desarrollado con ❤️ por Alejandro Cholico</p>
                    <p>Este sitio es un proyecto personal para documentar mi aprendizaje en IA, datos y programación.</p>
                </div>

            </div>
        </footer>
    )
}

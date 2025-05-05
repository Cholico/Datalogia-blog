import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { name: "Inicio", to: "/" },
  { name: "Buscar", to: "/buscador" },
  { name: "Glosario", to: "/glosario" },
  { name: "Acerca", to: "/about-me" },
  { name: "Contacto", to: "/contact" },
];

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto py-4 px-4 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold hover:text-gray-400 dark:hover:underline dark:text-white transition-colors">
          Datalogia
        </Link>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menú en desktop */}
        <ul className="hidden md:flex space-x-6 items-center text-sm font-medium">
          {links.map(link => (
            <li key={link.to} className="hover:underline cursor-pointer">
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => setIsDark(!isDark)}
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md hover:scale-105 transition-transform"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </nav>

      {/* Menú en móvil */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col space-y-4 p-4 text-sm font-medium">
            {links.map(link => (
              <li key={link.to}>
                <Link to={link.to} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setIsDark(!isDark);
                  setMenuOpen(false);
                }}
                className="bg-gray-200 dark:bg-gray-700 p-2 rounded-md hover:scale-105 transition-transform"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;

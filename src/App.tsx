import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Fototer from "./components/Fototer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-800 text-gray-900 dark:text-white transition-colors duration-300">
      <BrowserRouter>
        <Navbar />
        <main className="p-4">
          <AppRoutes />
        </main>
        <Fototer />
      </BrowserRouter>
    </div>
  );
}

export default App;

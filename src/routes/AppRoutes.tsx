import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import PostPage from "../pages/PostPage";
import CategoryPage from "../pages/CategoryPage";
import SearchPage from "../pages/SearchPage";
import About from "../pages/About";
import ContactPage from "../pages/ContactPage";
import { AnimatePresence, motion } from "framer-motion";
import GlossaryPage from "../pages/GlossaryPage";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        } />

        <Route path="/post/:slug" element={
          <PageWrapper>
            <PostPage />
          </PageWrapper>
        } />

        <Route path="/category/:slug" element={
          <PageWrapper>
            <CategoryPage />
          </PageWrapper>
        } />

        <Route path="/buscador" element={
          <PageWrapper>
            <SearchPage />
          </PageWrapper>
        } />

        <Route path="/glosario" element={
          <PageWrapper>
            <GlossaryPage />
          </PageWrapper>
        } />

        <Route path="/about-me" element={
          <PageWrapper>
            <About />
          </PageWrapper>
        } />

        <Route path="/contact" element={
          <PageWrapper>
            <ContactPage />
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

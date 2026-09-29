import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { HashRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Layout, ScrollToTop } from "./components";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="flex min-h-[75vh] items-center bg-[#0d2a5e] px-5 pt-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1344px] py-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">404 / Page not found</p>
        <h1 className="mt-6 max-w-3xl font-serif text-6xl leading-none sm:text-8xl">This plan needs a small adjustment.</h1>
        <button type="button" onClick={() => navigate("/")} className="mt-10 inline-flex items-center gap-3 border-b border-white/40 pb-2 text-xs font-bold uppercase tracking-[0.16em]">
          Return home <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppRoutes />
    </HashRouter>
  );
}
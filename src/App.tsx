import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import FlashSaleBanner from "./components/FlashSaleBanner";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import About from "./pages/About";
import Disclosure from "./pages/Disclosure";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-shore-shell">
      <ScrollToTop />
      <FlashSaleBanner />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

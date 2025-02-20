import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Building from "./pages/Building/Building";
import Partners from "./pages/Partners/Partners";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/scroll";
import Blog from "./pages/Blog/Blog";
import Faq from "./pages/Faq/Faq";
import Contact from "./pages/Contact/Contact";
import Post1 from "./pages/Blog/Post/Post-1";
import Post2 from "./pages/Blog/Post/Post-2";
import Post3 from "./pages/Blog/Post/Post-3";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/development" element={<Building />} />
        <Route path="/sobrenos" element={<AboutUs />} />
        <Route path="/catalogo" element={<Building />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/duvidas" element={<Faq />} />
        <Route path="/contato" element={<Contact />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/blog/post-10-12-2024" element={<Post1 />} /> */}
        {/* <Route path="/blog/post-21-09-2024" element={<Post2 />} /> */}
        {/* <Route path="/blog/post-02-09-2024" element={<Post3 />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Building from "./pages/Building/Building";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/clarezaotica" element={<Home />} />
        <Route path="/development" element={<Building />} />
        <Route path="/sobrenos" element={<Building />} />
        <Route path="/catalogo" element={<Building />} />
        <Route path="/parceiros" element={<Building />} />
        <Route path="/duvidas" element={<Building />} />
        <Route path="/contato" element={<Building />} />
        <Route path="/blog" element={<Building />} />
      </Routes>
    </BrowserRouter>
  );
}

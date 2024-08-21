import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/sobrenos" element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
  );
}

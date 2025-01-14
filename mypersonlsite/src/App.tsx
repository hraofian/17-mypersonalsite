import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Servises from "./pages/Servises";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/servises" element={<Servises />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;

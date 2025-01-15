import Layout from "./components/layouts/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Servises from "./pages/Servises";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/servises" element={<Servises />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

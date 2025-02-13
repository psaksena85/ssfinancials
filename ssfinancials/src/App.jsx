import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Products from "./pages/products/products";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

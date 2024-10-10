import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Shop from "./pages/shop";
import ShopCategory from "./pages/shopCategory";
import Product from "./pages/product";
import Cart from "./pages/cart";
import LoginSignup from "./pages/loginSignup";
import Hero from "./components/hero";
import Item from "./components/item";
import Popular from "./components/popular.jsx";
import Offer from "./components/Offer.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

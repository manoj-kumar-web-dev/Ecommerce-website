import React from "react";
import Body from './Body/component';
import Cart from "../Components/ProductDetail/component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import TotalProducts from "./WholeItem/Component";
function Home() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/productDetails/:productId" element={<Cart />} />
        <Route path="/cart" element={<TotalProducts />} />
        <Route path="/" element={<Body />} />
        <Route>404 Not Found!</Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default Home;

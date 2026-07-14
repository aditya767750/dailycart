import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  const [cart,setCart] = useState([]);
  const [count,setCount] = useState(0);

  return (
    <>
      <Navbar count = {count} /> 
      <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} count={count} setCount={setCount} />} />
          <Route path="/product/:id" element={<ProductDetails  />} />
          <Route path="/cart" element={<Cart  cart={cart}/>} />
      </Routes>
    </>
  );
};

export default App;

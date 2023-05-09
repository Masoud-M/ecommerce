import { useState } from "react";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

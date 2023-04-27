import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <ProductPage />
      </div>
    </>
  );
}

export default App;

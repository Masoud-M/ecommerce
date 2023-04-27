import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <CategoryPage />
      </div>
    </>
  );
}

export default App;

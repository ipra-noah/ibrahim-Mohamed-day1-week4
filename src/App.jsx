import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import useProducts from "./hooks/useProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const { products, loading } = useProducts();
  const [darkMode, setDarkMode] = useState(false);

  // Inline styling for the container
  const appStyle = {
    backgroundColor: darkMode ? "#1a1a1a" : "#f5f5f5",
    minHeight: "100vh",
    padding: "20px",
    transition: "background-color 0.3s",
  };

  return (
    <div style={appStyle}>
      <div className="container">
        <Header
          title="My Tech Store"
          subtitle="Best products with free shipping on orders over $100"
        />

        {/* Bootstrap Button */}
        <div className="text-center mb-4">
          <button
            className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <ProductList products={products} loading={loading} />
      </div>
    </div>
  );
}

export default App;
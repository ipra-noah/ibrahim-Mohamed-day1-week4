import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 89,
      inStock: true,
      image: "https://via.placeholder.com/200x150?text=Headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199,
      inStock: true,
      image: "https://via.placeholder.com/200x150?text=Smart+Watch",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 45,
      inStock: false,
      image: "https://via.placeholder.com/200x150?text=Speaker",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 120,
      inStock: true,
      image: "https://via.placeholder.com/200x150?text=Laptop+Stand",
    },
  ];

  return (
    <div className="app">
      <Header
        title="My Tech Store"
        subtitle="Best products with free shipping on orders over $100"
      />
      <ProductList products={products} />
    </div>
  );
}

export default App;
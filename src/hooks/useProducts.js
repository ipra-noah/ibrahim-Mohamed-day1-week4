import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setProducts([
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
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return { products, loading };
}

export default useProducts;
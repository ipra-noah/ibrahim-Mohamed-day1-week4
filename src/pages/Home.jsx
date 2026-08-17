import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import useProducts from "../hooks/useProducts";
import ProductList from "../components/ProductList";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const { products, loading } = useProducts();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { darkMode } = useTheme();

  return (
    <div style={{ color: darkMode ? "#fff" : "#000" }}>
      <div className="text-center mb-4">
        <h1>Welcome to My Tech Store</h1>
        <p className="lead">
          Best products with free shipping on orders over $100
        </p>
      </div>

      <ProductList products={products} loading={loading} />

      {/* Cart Section */}
      <div className="mt-5">
        <h3>Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                  </span>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-warning"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
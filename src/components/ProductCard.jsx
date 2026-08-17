import styles from "./ProductCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const imageStyle = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "12px",
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} style={imageStyle} />
      <h3>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>

      <p className={product.inStock ? styles.inStock : styles.outOfStock}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      {product.price > 100 && (
        <span className={styles.badge}>Free Shipping</span>
      )}

      <button
        className="btn btn-primary btn-sm mt-3"
        onClick={() => dispatch(addToCart(product))}
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
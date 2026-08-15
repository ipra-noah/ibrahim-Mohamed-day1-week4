import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  // Inline Styling
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

      {/* Ternary Operator */}
      <p className={product.inStock ? styles.inStock : styles.outOfStock}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      {/* && Operator */}
      {product.price > 100 && (
        <span className={styles.badge}>Free Shipping</span>
      )}
    </div>
  );
}

export default ProductCard;
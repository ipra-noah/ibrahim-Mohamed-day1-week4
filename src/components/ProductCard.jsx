function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>

      {/* Ternary Operator */}
      <p className={product.inStock ? "in-stock" : "out-of-stock"}>
        {product.inStock ? "In Stock" : "Out of Stock"}
      </p>

      {/* && Operator */}
      {product.price > 100 && (
        <span className="badge">Free Shipping</span>
      )}
    </div>
  );
}

export default ProductCard;
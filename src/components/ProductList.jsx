import ProductCard from "./ProductCard";
import { Row, Col, Spinner } from "react-bootstrap";

function ProductList({ products, loading }) {
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading products...</p>
      </div>
    );
  }

  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {products.map((product) => (
        <Col key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
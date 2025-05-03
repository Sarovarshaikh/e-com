// src/pages/ProductDetail.js
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.images[0]}
            alt={product.title}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">${product.price}</p>
          <p>{product.description}</p>
          <button
            className="btn btn-success"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="row">
        <div className="mt-4 mx-auto">
          <h5>Customer Reviews</h5>
          <div className="border rounded p-3 mb-2">
            <strong>Jane Doe</strong>
            <p className="mb-1">⭐⭐⭐⭐⭐</p>
            <p>Excellent quality, would buy again!</p>
          </div>
          <div className="border rounded p-3">
            <strong>John Smith</strong>
            <p className="mb-1">⭐⭐⭐☆☆</p>
            <p>Good product, but shipping was slow.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

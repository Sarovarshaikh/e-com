import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="col-md-4 mb-4">
    <div className="card h-100">
      <img
        src={product.images[0]}
        alt={product.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">${product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="btn btn-outline-primary mt-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default ProductCard;

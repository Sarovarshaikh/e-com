import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-5">
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.title}</strong> <br />
                  <small className="text-muted">${item.price}</small>
                </div>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  width="50"
                  height="50"
                  style={{ objectFit: "cover" }}
                />
              </li>
            ))}
          </ul>
          <h5>Total: ${total.toFixed(2)}</h5>
          <div className="d-flex gap-2">
            <Link to="/checkout" className="btn btn-primary">
              Proceed to Checkout
            </Link>
            <button className="btn btn-outline-danger" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

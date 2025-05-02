import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    clearCart();
  };

  return (
    <div className="container mt-5">
      <h3>Checkout</h3>
      <p>You have {cart.length} item(s) in your cart.</p>
      <button className="btn btn-success" onClick={handleCheckout}>
        Complete Purchase
      </button>
    </div>
  );
};

export default Checkout;

import React, { useEffect, useState } from "react";
import "./checkout.css";

function Checkout() {
  const [total, setTotal] = useState(0);

  // Get cart total from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const sum = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    setTotal(sum);
  }, []);

  return (
    <div className="checkout-page">
      

      {/* Checkout Section */}
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-card">
        <label>Name</label>
        <input type="text" placeholder="Name" />

        <label>Address</label>
        <input type="text" placeholder="Address" />

        <label>Phone Number</label>
        <input type="text" placeholder="Phone Number" />

        <hr />

        <h3 className="total">Total: ₹ {total || 1200}</h3>

        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
}

export default Checkout;
import "./Cart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
  }, []);

  // Update localStorage whenever cart changes
  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Increase quantity
  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].quantity = (updated[index].quantity || 1) + 1;
    updateCart(updated);
  };

  // Decrease quantity
  const decreaseQty = (index) => {
    const updated = [...cartItems];

    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1); // remove if quantity = 1
    }

    updateCart(updated);
  };

  // Remove item
  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    updateCart(updated);
  };

  // Total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="cart-container">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt="" />

              <div className="cart-details">
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>

                {/* Quantity Controls */}
                <div className="cart-actions">
                <div>
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(index)}
                >
                  🗑
                </button>
                </div>
              </div>
            </div>
          ))}

          <h3>Total: ₹ {total}</h3>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
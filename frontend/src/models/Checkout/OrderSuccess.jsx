import React from 'react';
import { Link } from 'react-router-dom';
import './checkout.css'; // Reuse checkout styles for consistency

const OrderSuccess = () => {
  return (
    <div className="checkout-page" style={{ textAlign: 'center', padding: '100px 20px' }}>
      <div className="success-container" style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '60px', marginBottom: '20px' }}>🎉</h1>
        <h2 style={{ color: '#2ecc71', fontSize: '32px', marginBottom: '10px' }}>Order Placed Successfully!</h2>
        <p style={{ color: '#7f8c8d', fontSize: '18px', marginBottom: '30px' }}>
          Thank you for shopping with us! Your order has been received and is being processed. 
          You will receive a confirmation shortly.
        </p>
        <div className="actions">
          <Link to="/" className="order-btn" style={{ textDecoration: 'none', display: 'inline-block', padding: '12px 30px' }}>
            Continue Shopping
          </Link>
          <div style={{ marginTop: '20px' }}>
             <Link to="/flowers" style={{ color: '#ff4d6d', textDecoration: 'none', fontWeight: '600' }}>View More Flowers</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;

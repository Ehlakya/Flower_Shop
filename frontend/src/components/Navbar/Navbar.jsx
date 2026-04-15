import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaMapMarkerAlt } from "react-icons/fa";

function Navbar() {
  return (
    <>
      {/* Top Header */}
      <div className="top-header">
        <div className="logo">FloraSurprise</div>

        <div className="icons">
          <span>Track Order</span>
          <Link className="header" to="/cart"><span>Cart 🛒</span></Link>
          <Link className="header" to="/signin"><span>Sign</span></Link>
        </div>
      </div>

      {/* Menu */}
      <div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/flowers">Flowers</Link></li>
          <li><Link to="/plants">Plants</Link></li>
          <li><Link to="/cakes">Cakes</Link></li>
          <li><Link to="/gifts">Gifts</Link></li>
        </ul>


      </div>
    </>
  );
}

export default Navbar;
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

// Pages (you can create these)
import Home from "./models/Home/home";
import Flowers from "./models/Flowers/flowers";
import Cakes from "./models/Cakes/cakes";
import Plants from "./models/Plants/plants"
import Gifts from "./models/Gifts/gifts"
import Contact from "./models/Contact/contact";
import Cart from "./models/Cart/Cart";
import Checkout from "./models/Checkout/checkout";
import SignIn from "./models/Signin/signin";
import CreateAccount from "./models/CreateAccount/CreateAccount";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<CreateAccount/>}/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;


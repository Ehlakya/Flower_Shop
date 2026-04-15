import React from "react";
import "./cakes.css";
import { useNavigate } from "react-router-dom";

// Product Card Component
function ProductCard({ id, image, title, description, price }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // ✅ check if item already exists
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cart.push({ id, title, image, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // ✅ navigate to cart page
    navigate("/cart");
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p className="price">₹{price}</p>
    </div>
  );
}

// Products Section
function Products() {
  const products = [
    {
      id:1,
      title: "Chocolate Cake",
      image: "/src/assets/cake 1.jpg",
      description: "Rich chocolate flavor",
      price: 700,
    },
    {
      id:2,
      title: "Birthday Cake",
      image: "/src/assets/cake 2.webp",
      description: "Custom design",
      price: 900,
    },
    {
      id:3,
      title: "Venila Cake",
      image: "/src/assets/cake 3.jpg",
      description: "Rich venila flavor",
      price: 700,
    },
    {
      id:4,
      title: "Birthday Cake",
      image: "/src/assets/cake 4.jpg",
      description: "Custom design",
      price: 900,
    },
    {
      id:5,
      title: " Birthday Cake",
      image: "/src/assets/cake 5.jpg",
      description: "Custom design",
      price: 700,
    },
    {
      id:6,
      title: "Birthday Cake",
      image: "/src/assets/cake 6.jpg",
      description: "Custom design",
      price: 900,
    },
    {
      id:7,
      title: "Rainbow Cake",
      image: "/src/assets/cake 7.jpg",
      description: "Rich multipul flavor",
      price: 700,
    },
    {
      id:8,
      title: "Chocolate Cake",
      image: "/src/assets/cake 8.jpg",
      description: "Rich chocolate flavor",
      price: 700,
    },
  ];

  return (
    <section className="products-section">
      <h2 className="cakes-title"> Cakes </h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}   // ✅ pass id
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
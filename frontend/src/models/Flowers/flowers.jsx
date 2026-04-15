import React from "react";
import "./flowers.css";
import { useNavigate } from "react-router-dom";

// ✅ Product Card Component
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
      title: "Roses Basket",
      image: "/src/assets/flower 1.jpg", // replace with your image URL
      description: "Mixed Roses",
      price: 500,
    },
    {
      id:2,
      title: "Mixed Flowers",
      image: "/src/assets/flower 2.jpg",
      description: "Colorful bouquet",
      price: 450,
    },
    {
      id:3,
      title: "Roses Bokeh",
      image: "/src/assets/flower 3.jpg", // replace with your image URL
      description: "Fresh red,white roses",
      price: 500,
    },
    {
      id:4,
      title: "Roses Bokeh",
      image: "/src/assets/flower 4.jpg",
      description: " Fresh pink flowers",
      price: 450,
    },
    {
      id:5,
      title: "Roses Bokeh",
      image: "/src/assets/flower 5.jpeg", // replace with your image URL
      description: "Fresh white roses",
      price: 500,
    },
    {
      id:6,
      title: "Tulip Bokeh",
      image: "/src/assets/flower 6.png",
      description: "Colorful Tulip Flowers",
      price: 450,
    },
    {
      id:7,
      title: "Mixed Flowers",
      image: "/src/assets/flower 7.avif",
      description: "Colorful bouquet",
      price: 450,
    },
    {
      id:8,
      title: " Flowers Basket",
      image: "/src/assets/flower 8.jpg",
      description: "Mixed Roses",
      price: 450,
    },
  ];

  return (
    <section className="products-section">
      <h2 className="flowers-title"> Flowers </h2>
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
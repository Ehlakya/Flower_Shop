import React, { useState } from "react";
import "./CreateAccount.css";

import cake from "/src/assets/login.png";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 Validation + Alerts
    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // ✅ Success
    alert("Account created successfully!");

    console.log({ username, email, password });

    // Optional: clear form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="main-container">
      <div className="form-box">

        <img src={cake} alt="cake" className="floating-img" />

        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />

          <button className="btn">Sign Up</button>

          <p>
            Already have an account? <a href="/signin">Sign in</a>
          </p>

        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
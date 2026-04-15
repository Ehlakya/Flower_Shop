import React, { useState } from "react";
import "./signin.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password });

    // 🔥 connect backend here
    // fetch("/login", {...})
  };

  return (
    <div className="container">

      {/* Left Form */}
      <div className="form-box">
        <h1>Sign In ❤️</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Sign In</button>

          <p>
            Don't have an account?{" "}
            <a href="/signup">Create an account</a>
          </p>
        </form>
      </div>

      {/* Right Image */}
      <div className="image-box">
        <img src="src/assets/signin.png" alt="cake and flowers" />
      </div>

    </div>
  );
};

export default SignIn;
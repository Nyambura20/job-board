import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login successful", formData);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2 className="login">Log In</h2>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <br />
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <br />

        <div className="forget">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            <span> Remember me </span>
          </label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <button type="submit" className="login-button">
          Log In
        </button>

        <div className="register">
          <p>
            Don't have an account? <Link to="/signup">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;

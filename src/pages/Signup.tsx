import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "jobseeker",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    login({
      name: formData.email.split("@")[0],
      email: formData.email,
      role: formData.role as "jobseeker" | "jobowner",
    });

    console.log("User signed up and logged in:", formData);
    navigate("/");
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2 className="signup">Sign Up</h2>

        <div className="input-field">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="input-field">
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="input-field">
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>

        <div className="input-field">
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="jobseeker">Job Seeker</option>
            <option value="jobowner">Job Owner</option>
          </select>
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>

        <div className="register">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;

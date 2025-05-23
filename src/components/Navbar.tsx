import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo no-hover-bg">
          <img
            src="/images/logo.png"
            alt="Job Board Logo"
            className="logo-icon"
          />
          <span className="logo-text">Job Board</span>
        </Link>
      </div>

      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search jobs..."
          className="search-input"
        />
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </div>

      <div className="navbar-right">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle-btn"
        >
          {darkMode ? "☀ Bright Mode" : "🌙 Dark Mode"}
        </button>
        {user ? (
          <>
            <span className="user-role">{user.role}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link signup-btn">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

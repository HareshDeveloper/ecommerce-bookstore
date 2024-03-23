import React from "react";
import "./Header.scss";

const Header = ({ showButton }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Book Store</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          {showButton && (
            <li>
              <button class="login-button">Login</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

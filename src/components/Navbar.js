import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-nav">
        <div className="container">
          <Link to="/">
            <img
              src="https://i.ibb.co/zhnVnkt/logo.png"
              height="60px"
              width="150px"
              alt="logo"
            />
          </Link>
          <Link to="/cart">
          <div className="d-flex cart">
            <img
              src="https://i.ibb.co/0fPzX7x/shopping-cart.png"
              height="40px"
              alt="logo"
            />
            <h5 className="cart-qty">0</h5>
          </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

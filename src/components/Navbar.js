import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector((state) => state.shop.cart);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div>
      <nav className="navbar navbar-light bg-nav shadow-sm">
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
            <div className="d-flex cart me-4 me-md-0">
              <img
                src="https://i.ibb.co/0fPzX7x/shopping-cart.png"
                height="40px"
                alt="logo"
              />
              <h5 className="cart-qty">{cartCount}</h5>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

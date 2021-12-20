import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, setTotalPrice, totalItems, setTotalItems]);

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-9">
          {cart.map((item) => (
            <CartItem key={item._id} cart={item} />
          ))}
        </div>
        <div className="col-3">
          <div className="bg-light p-4 rounded mt-3">
          <h5 className="text-center border p-1 text-success bg-white">
            Summary
          </h5>
          <p className="text-secondary">
            Order Total: <span className="text-warning">$</span>
            <span className="fw-bold">{totalPrice}</span>
          </p>
          <p className="text-secondary">
            Total Items: <span className="fw-bold">{totalItems}</span>
          </p>
          <div className="text-center mt-5">
            <button className="add-btn py-1">Continue Checkout</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);

import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/shoppingActions";

const CartItem = ({ cart, removeFromCart, adjustQty }) => {
  const { _id, name, info, img, price, qty } = cart;
  const [input, setInput] = useState(qty);

  const inputHandler = (e) => {
    if (e.target.value >= 0) {
      setInput(e.target.value);
      adjustQty(_id, e.target.value);
    }
  };

  return (
    <div className="row my-3 align-items-center border py-3 shadow-sm cart-pd">
      <div className="col-3 text-center">
        <img
          src={img}
          alt=""
          height="120px"
          width="180px"
          className="rounded"
        />
      </div>
      <div className="col-9 pe-5">
        <h5 className="text-success">{name}</h5>
        <p className="mb-1 text-secondary">{info}</p>
        <div className="d-flex justify-content-between align-items-center">
          <h5>
            <span className="text-warning">$</span>
            {price}
          </h5>
          <div className="row">
            <span className="col-4"> Quantity:</span>
            <input
              className="col-3 fw-bold text-success"
              type="number"
              value={input}
              onChange={inputHandler}
            />
          </div>
          <button onClick={() => removeFromCart(_id)} className="delete-btn">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              height="20px"
              alt="delete btn"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  loadCurrentItem,
} from "./../redux/Shopping/shoppingActions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  const { id, name, info, img, price } = product;
  console.log(product);
  return (
    <div className="col">
      <div className="d-flex border p-2 rounded align-items-center">
        <img
          src={img}
          alt=""
          height="120px"
          width="180px"
          className="rounded"
        />
        <div className="ms-3">
          <h6 className="text-success">{name}</h6>
          <p className="mb-1 text-secondary">{info}</p>
          <div className="d-flex justify-content-between align-items-center">
            <h6>
              <span className="text-warning">$</span>
              {price}
            </h6>
            <div>
              <Link to={`/item/${id}`}>
                <button
                  onClick={() => loadCurrentItem(product)}
                  className="add-btn view"
                >
                  View Item
                </button>
              </Link>
              <button
                onClick={() => addToCart(id)}
                className="add-btn ms-2 align-items-center"
              >
                <img
                  src="https://i.ibb.co/0fPzX7x/shopping-cart.png"
                  height="20px"
                  alt="logo"
                  className="mb-1 me-2"
                />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

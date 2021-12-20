import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./../redux/Shopping/shoppingActions";

const SingleItem = () => {
  const currentItem = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();

  const { _id, img, name, info, price } = currentItem;
  return (
    <div className="single-item my-5 text-center border p-3 shadow-sm">
      <img src={img} alt="" className="img-fluid" />
      <h4 className="mt-3 bg-light p-2">{name}</h4>
      <p>{info}</p>
      <div className="d-flex justify-content-around mt-4">
        <h6>
          <span className="text-success">Price: </span>
          <span className="text-warning">$</span>
          {price}
        </h6>
        <button
          onClick={() => dispatch(addToCart(_id))}
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
  );
};

export default SingleItem;

import React from "react";

const SingleItem = () => {
  return (
    <div className="single-item my-5 text-center">
      <img src="https://i.ibb.co/T4MnJjr/2.jpg" alt="" className="img-fluid"/>
      <h4>Name</h4>
      <p>
        Italy, a European country with a long Mediterranean coastline, has left
        a powerful mark on Western culture and cuisine. Its capital, Rome
      </p>
      <button className="add-btn ms-2 align-items-center">
                <img
                  src="https://i.ibb.co/0fPzX7x/shopping-cart.png"
                  height="20px"
                  alt="logo"
                  className="mb-1 me-2"
                />
                <span>Add To Cart</span>
              </button>
    </div>
  );
};

export default SingleItem;

import React from "react";

const Cart = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-9">
          <div className="row mb-3 g-4 align-items-center">
            <div className="col-4 text-center">
              <img
                src="https://i.ibb.co/T4MnJjr/2.jpg"
                alt=""
                height="120px"
                width="180px"
                className="rounded"
              />
            </div>
            <div className="col-8 pe-5">
              <h5 className="text-success">Italy</h5>
              <p className="mb-1 text-secondary">
                Italy, a European country with a long Mediterranean coastline,
                has left a powerful mark on Western culture and cuisine. Its
                capital, Rome
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <h5>
                  <span className="text-warning">$</span>
                  1200
                </h5>
                <div className="row">
                  <span className="col-4"> Quantity:</span>
                  <input
                    className="col-3 fw-bold text-success"
                    type="number"
                    value="1"
                  />
                </div>
                <button className="delete-btn">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                    height="20px"
                    alt="delete btn"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 bg-light p-4 rounded">
          <h5 className="text-center border p-1 text-success bg-white">
            Summary
          </h5>
          <p className="text-secondary">
            Order Total: <span className="text-warning">$</span>
            <span className="fw-bold">100</span>
          </p>
          <p className="text-secondary">
            Total Items: <span className="fw-bold">2</span>
          </p>
          <div className="text-center mt-5">
            <button className="add-btn py-1">Continue Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

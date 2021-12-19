import React from "react";

const Cart = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-9">
          <div className="row g-4 align-items-center">
            <div className="col-4">
              {/* <div className="d-flex border p-2 rounded align-items-center p-3"> */}
              <img
                src=""
                alt=""
                height="120px"
                width="180px"
                className="rounded"
              />
            </div>
            <div className="col-8 pe-5">
              <h6 className="text-success">name</h6>
              <p className="mb-1 text-secondary">
                Italy, a European country with a long Mediterranean coastline,
                has left a powerful mark on Western culture and cuisine. Its
                capital, Rome
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <h6>
                  <span className="text-warning">$</span>
                  price
                </h6>
                <div>
                  Quantity: <input type="number" width="20px" />
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

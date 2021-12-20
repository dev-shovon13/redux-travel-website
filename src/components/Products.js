// import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Product from "./Product";

const Products = ({ products }) => {
  // const [products, setProducts] = useState();
  // useEffect(() => {
  //   fetch("https://traveezy.herokuapp.com/services")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  return (
    <>
      <h2 className="text-success text-decoration-underline text-center">
        Destinations
      </h2>
      <div className="container">
        <div className="row row-cols-2 g-4 my-5">
          {products ? (
            products?.map((product) => (
              <Product key={product._id} product={product} />
            ))
          ) : (
            <div class="d-flex justify-content-center mx-auto">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);

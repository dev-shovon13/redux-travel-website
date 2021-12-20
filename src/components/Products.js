import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/Shopping/shoppingActions";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.shop.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://traveezy.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, [dispatch]);

  return (
    <>
      <h2 className="text-success text-decoration-underline text-center">
        Destinations
      </h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 g-4 my-5">
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
export default Products;

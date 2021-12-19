import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://traveezy.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h2 className="text-success text-decoration-underline text-center">
        Destinations
      </h2>
      <div className="container">
        <div className="row row-cols-2 g-4 my-5">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

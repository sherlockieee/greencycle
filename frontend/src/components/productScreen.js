import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import data from "../data";
import "../App.css";
import "./productScreen.css";
export default function ProductScreen(props) {
  const [product, setProduct] = useState();

  useEffect(() => {
    const products = data.products;
    const product = products.find(
      (product) => product.id.toString() === props.match.params.id
    );
    setProduct(product);
    console.log(product);
  }, [props.match.params.id]);

  return (
    <>
      {product && (
        <div className="row top product-screen">
          <div className="col-1 center product-screen--image">
            <img
              src={product.image}
              alt={product.name}
              className="image image--large"
            />
          </div>
          <div className="col-1 product-screen--card">
            <h1>{product.title}</h1>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <div className="stocks">
              <span className="price"> ${product.price}</span>
              {product.availableStocks > 0 ? (
                <span className="stocks-available">
                  {` (${product.availableStocks} Available)`}
                </span>
              ) : (
                <span className="stocks-out-of-stock"> (Out of stock)</span>
              )}
            </div>
            <button
              className={
                product.availableStocks > 0
                  ? "btn btn--primary btn--block"
                  : "btn btn--disabled btn--block"
              }
            >
              Add to cart
            </button>
            <h3>Description:</h3>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

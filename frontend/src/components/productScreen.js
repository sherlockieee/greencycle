import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import "./productScreen.css";
export default function ProductScreen(props) {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

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
            <div className="row flex-start margin-bottom-large">
              <div className="quantity-text"> Quantity: </div>
              <div className="row">
                <button
                  className="quantity"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  className="quantity quantity-input"
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max={product.availableStocks}
                  value={quantity}
                  onChange={(e) => {
                    if (isNaN(+e.target.value)) {
                      return;
                    }
                    setQuantity(e.target.value);
                  }}
                  onBlur={(e) => {
                    if (
                      1 <= +e.target.value &&
                      +e.target.value <= product.availableStocks
                    ) {
                      setQuantity(Math.round(+e.target.value));
                    } else if (+e.target.value <= 0) {
                      setQuantity(1);
                    } else if (+e.target.value > product.availableStocks) {
                      setQuantity(product.availableStocks);
                    }
                  }}
                ></input>
                <button
                  className="quantity"
                  onClick={() => {
                    if (quantity < product.availableStocks) {
                      setQuantity(quantity + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
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

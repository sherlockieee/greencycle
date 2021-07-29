import React from "react";
import "./productDisplay.css";
import { Link } from "react-router-dom";
import data from "../data";
import Rating from "./Rating";

export default function ProductDisplay() {
  return (
    <div className="main display-products-grid">
      {data.products.map((product) => {
        return (
          <Link to={`products/${product.id}`}>
            <div key={product.id} className="display-products-card">
              <div className="display-products-image-container">
                <img
                  className="image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="display-products-text-container">
                <h3 className="display-products--product-title">
                  {product.title}
                </h3>
                <div className="stocks">
                  <span className="price">${product.price}</span>
                  {product.availableStocks > 0 ? (
                    <span className="stocks-available">
                      {` (${product.availableStocks} Available)`}
                    </span>
                  ) : (
                    <span className="stocks-out-of-stock"> (Out of stock)</span>
                  )}
                </div>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
                <p className="display-products--product-description">
                  {product.description}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

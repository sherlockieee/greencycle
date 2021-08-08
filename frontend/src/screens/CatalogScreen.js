import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./CatalogScreen.css";
import LoadingScreen from "./LoadingScreen";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";
import { listProducts } from "../actions/productActions";

export default function CatalogScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { isLoading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : error ? (
        <MessageBox variant="danger" message={error}></MessageBox>
      ) : (
        <div className="main display-products-grid">
          {products.map((product) => {
            return (
              <div className="display-products-card" key={product._id}>
                <Link to={`products/${product._id}`}>
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
                        <span className="stocks-out-of-stock">
                          {" "}
                          (Out of stock)
                        </span>
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
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

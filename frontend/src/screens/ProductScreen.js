import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Rating from "../components/Rating";
import "./ProductScreen.css";
import LoadingScreen from "./LoadingScreen";
import MessageBox from "../components/MessageBox";
import QuantityInput from "../components/QuantityInput";
import { detailProduct } from "../actions/productActions";

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { isLoading, error, product } = productDetails;
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(detailProduct(productId));
  }, [dispatch, productId]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : error ? (
        <MessageBox variant="danger" message={error}></MessageBox>
      ) : (
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
            {product.availableStocks > 0 && (
              <QuantityInput
                quantity={quantity}
                product={product}
                updateParentQuantity={(qty) => {
                  setQuantity(qty);
                }}
              />
            )}
            <Link to={`/cart/${productId}?qty=${quantity}`}>
              <button
                disabled={product.availableStocks === 0}
                className={
                  product.availableStocks > 0
                    ? "btn btn--primary btn--block"
                    : "btn btn--disabled btn--block"
                }
              >
                Add to cart
              </button>
            </Link>

            <h3>Description:</h3>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

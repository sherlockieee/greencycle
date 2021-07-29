import React, { useEffect, useState } from "react";
import "./productDisplay.css";
import { Link } from "react-router-dom";
import LoadingScreen from "./loadingScreen";
import MessageBox from "./messageBox";
import Rating from "./Rating";
import axios from "axios";

export default function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("/api/products");
        setIsLoading(false);
        setProducts(data);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, []);
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
              <Link to={`products/${product.id}`} key={product.id}>
                <div className="display-products-card">
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
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

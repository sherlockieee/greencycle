import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";
import QuantityInput from "../components/QuantityInput";
import "./CartScreen.css";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const handleOnClickDeleteButton = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {cartItems.length === 0 ? (
        <MessageBox
          variant="info"
          message="There are no items in your bag."
        ></MessageBox>
      ) : (
        <div className="cartScreenContainer">
          <h1 style={{ textAlign: "center" }}>Cart Items </h1>
          <div>
            {cartItems.map((item) => {
              return (
                <div key={item.product} className="row top cartItemProductRow">
                  <div className="cartItemProductImageContainer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="image image--small cartItemProductImage"
                    />
                  </div>
                  <div className="cartItemProductInfo">
                    <Link to={`/products/${item.product}`}>{item.title}</Link>
                    <QuantityInput
                      quantity={item.quantity}
                      product={item}
                      addToCartFunction={true}
                    ></QuantityInput>
                    <button
                      className="btn danger"
                      onClick={() => handleOnClickDeleteButton(item.product)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="price cartItemProductPrice">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h3 className="price">
              Total: $
              {cartItems
                .reduce((total, item) => total + item.quantity * item.price, 0)
                .toFixed(2)}
            </h3>
            <button className="btn btn--primary">Proceed to checkout</button>
          </div>
        </div>
      )}
    </>
  );
}

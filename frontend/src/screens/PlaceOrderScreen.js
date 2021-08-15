import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";

function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }

  const toPrice = (num) => Number(num.toFixed(2));
  cart.cartItemsPrice = toPrice(
    cart.cartItems.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    )
  );
  cart.shippingPrice = toPrice(cart.cartItemsPrice > 100 ? 0 : 10);
  cart.taxPrice = toPrice(cart.cartItemsPrice * 0.15);
  cart.totalPrice = toPrice(
    cart.shippingPrice + cart.taxPrice + cart.cartItemsPrice
  );

  const handlePlaceOrderButton = () => {
    return;
  };
  return (
    <div style={{ width: "100%" }}>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div>
        <ul>
          <li>
            <div className="shippingInfo">
              <h2>Shipping: </h2>
              <p>
                <strong>Name: </strong> {cart.shippingAddress.fullName} <br />
                <strong>Address: </strong> {cart.shippingAddress.address},{" "}
                {cart.shippingAddress.city} {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country} <br />
                <strong>Phone number: </strong>{" "}
                {cart.shippingAddress.phoneNumber}
              </p>
            </div>
          </li>
          <li>
            <div className="paymentInfo">
              <h2>Payment: </h2>
              <p>
                <strong>Method: </strong> {cart.paymentMethod}
              </p>
            </div>
          </li>
          <li className="Items">
            <h2>Cart Items: </h2>
            <p>
              <strong>Method: </strong> {cart.paymentMethod}
            </p>
            <ul>
              {cart.cartItems.map((item) => {
                return (
                  <li key={item.product} className="row top cartItemProductRow">
                    <div className="cartItemProductImageContainer">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="image image--small cartItemProductImage"
                      />
                    </div>
                    <div className="cartItemProductInfo">
                      <Link to={`/products/${item.product}`}>{item.title}</Link>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div className="price cartItemProductPrice">
                      ${toPrice(item.price)} x {item.quantity} = $
                      {toPrice(item.price * item.quantity)}{" "}
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h2>Order Summary</h2>
        <ul>
          <li className="row">
            <div>
              <strong>Item Prices:</strong>{" "}
            </div>
            <div>${cart.cartItemsPrice}</div>
          </li>
          <li className="row">
            <div>
              <strong>Tax:</strong>{" "}
            </div>
            <div>${cart.taxPrice}</div>
          </li>
          <li className="row">
            <div>
              <strong>Shipping:</strong>{" "}
            </div>
            <div>${cart.shippingPrice}</div>
          </li>
          <li className="row">
            <div>
              <strong>Total:</strong>{" "}
            </div>
            <div>${cart.totalPrice}</div>
          </li>
        </ul>
        <button
          className="btn btn--primary btn--block"
          onClick={handlePlaceOrderButton}
        >
          {" "}
          Place Order{" "}
        </button>
      </div>
    </div>
  );
}

export default PlaceOrderScreen;

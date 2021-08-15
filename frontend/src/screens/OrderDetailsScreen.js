import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder } from "../actions/orderActions";
import LoadingScreen from "./LoadingScreen";
import MessageBox from "../components/MessageBox";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";

function OrderDetailsScreen(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, isLoading, error } = orderDetails;
  const dispatch = useDispatch();
  const toPrice = (num) => Number(num.toFixed(2));
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onLoad = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order) {
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, orderId, order, sdkReady]);

  const handleOnPaymentSuccess = () => {};

  return isLoading ? (
    <LoadingScreen />
  ) : error ? (
    <MessageBox variant="danger" message={error} />
  ) : (
    <div style={{ width: "100%" }}>
      <h1> Order Details: </h1>
      <div>
        <ul>
          <li>
            <div className="shippingInfo">
              <h2>Shipping: </h2>
              <p>
                <strong>Name: </strong> {order.shippingAddress.fullName} <br />
                <strong>Address: </strong> {order.shippingAddress.address},{" "}
                {order.shippingAddress.city} {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country} <br />
                <strong>Phone number: </strong>{" "}
                {order.shippingAddress.phoneNumber}
              </p>
              {order.isDelivered ? (
                <MessageBox
                  variant="success"
                  message={`Delivered at ${order.deliveredAt}`}
                />
              ) : (
                <MessageBox variant="danger" message={`Not Delivered`} />
              )}
            </div>
          </li>
          <li>
            <div className="paymentInfo">
              <h2>Payment: </h2>
              <p>
                <strong>Method: </strong> {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <MessageBox
                  variant="success"
                  message={`Paid at ${order.paidAt}`}
                />
              ) : (
                <MessageBox variant="danger" message={`Not Paid`} />
              )}
            </div>
          </li>
          <li className="Items">
            <h2>Order Items: </h2>
            <ul>
              {order.orderItems.map((item) => {
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
            <div>${order.cartItemsPrice}</div>
          </li>
          <li className="row">
            <div>
              <strong>Tax:</strong>{" "}
            </div>
            <div>${order.taxPrice}</div>
          </li>
          <li className="row">
            <div>
              <strong>Shipping:</strong>{" "}
            </div>
            <div>${order.shippingPrice}</div>
          </li>
          <li className="row">
            <div>
              <strong>Total:</strong>{" "}
            </div>
            <div>${order.totalPrice}</div>
          </li>
          {!order.isPaid && (
            <li>
              {!sdkReady ? (
                <LoadingScreen />
              ) : (
                <PayPalButton
                  amount={order.totalPrice}
                  onSuccess={handleOnPaymentSuccess}
                />
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default OrderDetailsScreen;

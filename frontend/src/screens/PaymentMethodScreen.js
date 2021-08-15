import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function PaymentMethodScreen(props) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    console.log("no shipping");
    props.history.push("/shipping");
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };

  return (
    <div style={{ width: "100%" }}>
      <CheckoutSteps step1 step2 step3 />
      <form className="signInForm" onSubmit={handleOnSubmit}>
        <div>
          <h1>Payment method</h1>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              margin: "auto",
              justifyContent: "flex-start",
            }}
          >
            <input
              type="radio"
              id="payPal"
              value="PayPal"
              name="paymentMethod"
              checked
              required
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            />
            <label htmlFor="payPal">PayPal</label>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              margin: "auto",
              justifyContent: "flex-start",
              paddingTop: "0.5rem",
            }}
          >
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            />
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <button className="btn btn--primary signInForm-button" type="submit">
            Continue{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethodScreen;

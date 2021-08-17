import React from "react";
import "./CheckoutSteps.css";

type CheckOutProps = {
  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;
}

const CheckoutSteps = (props: CheckOutProps) => {
  return (
    <div className="checkout-steps">
      <div className={props.step1 ? "active" : ""}>Sign In</div>
      <div className={props.step2 ? "active" : ""}>Shipping</div>
      <div className={props.step3 ? "active" : ""}>Payment</div>
      <div className={props.step4 ? "active" : ""}>Place Order</div>
    </div>
  );
}

export default CheckoutSteps;

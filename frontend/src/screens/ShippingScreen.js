import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

function ShippingScreen(props) {
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  if (!userInfo) {
    props.history.push("/signin");
  }

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber);
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        fullName,
        address,
        city,
        postalCode,
        country,
        phoneNumber,
      })
    );
    props.history.push("/payment");
  };
  return (
    <div style={{ width: "100%" }}>
      <CheckoutSteps step1 step2 />
      <form className="signInForm" onSubmit={handleOnSubmit}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name: </label>
          <input
            type="text"
            id="fullName"
            required
            placeholder="Enter your full name..."
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            required
            placeholder="Enter your address..."
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            required
            placeholder="Enter your city..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code: </label>
          <input
            type="text"
            id="postalCode"
            required
            placeholder="Enter your postal code..."
            value={postalCode}
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            id="country"
            required
            placeholder="Enter your country..."
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="text"
            id="phoneNumber"
            required
            placeholder="Enter your phone number..."
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
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

export default ShippingScreen;

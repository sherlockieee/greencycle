import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./NavBar.css";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <nav className="navbar row">
      <div>
        <Link className="navbar-brand-name" to="/">
          GreenCycle
        </Link>
      </div>
      <div className="row">
        <Link to="/cart">
          <FontAwesomeIcon
            icon={faShoppingBag}
            size="lg"
            className="icon-primary"
          />
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </Link>
        <Link className="btn btn--primary" to="/signin">
          Sign in
        </Link>
        <Link className="btn btn--secondary" to="/signup">
          Sign up
        </Link>
      </div>
    </nav>
  );
}

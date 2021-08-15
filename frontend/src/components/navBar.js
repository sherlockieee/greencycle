import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  const userSignIn = useSelector((state) => state.userSignIn);
  const { cartItems } = cart;
  const { userInfo } = userSignIn;
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signout());
  };
  return (
    <nav className="navbar">
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
        {userInfo ? (
          <div className="navbar-dropdown">
            <Link to="/">
              Hello, {userInfo.name}{" "}
              <FontAwesomeIcon
                icon={faCaretDown}
                size="lg"
                className="icon-primary"
              />
            </Link>
            <ul className="navbar-dropdown-content">
              <li>
                <Link to="/orderhistory">Order History</Link>
              </li>
              <li>
                <Link to="#signout" onClick={signOutHandler}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link className="btn btn--primary" to="/signin">
              Sign in
            </Link>
            <Link className="btn btn--secondary" to="/signup">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartActions";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART:
        <br /> ProductId: {productId}
        <br /> Quantity: {quantity}
      </p>
    </div>
  );
}

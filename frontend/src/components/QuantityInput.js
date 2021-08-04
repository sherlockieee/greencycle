import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartActions";

function QuantityInput({ quantity = 1, product, addToCartFunction = false }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(quantity);
  return (
    <div className="row flex-start margin-bottom-large">
      <div className="quantity-text"> Quantity: </div>
      <div className="row">
        <button
          className="quantity"
          onClick={() => {
            if (qty > (product.availableStocks > 0 ? 1 : 0)) {
              setQty(qty - 1);
              addToCartFunction &&
                dispatch(addToCart(product.product, qty - 1));
            }
          }}
        >
          -
        </button>
        <input
          className="quantity quantity-input"
          type="number"
          name="quantity"
          max={product.availableStocks}
          value={qty}
          onChange={(e) => {
            if (isNaN(+e.target.value)) {
              return;
            }
            setQty(e.target.value);
          }}
          onBlur={(e) => {
            if (
              (product.availableStocks > 0 ? 1 : 0) <= +e.target.value &&
              +e.target.value <= product.availableStocks
            ) {
              setQty(Math.round(+e.target.value));
              addToCartFunction &&
                dispatch(addToCart(product.product, Number(e.target.value)));
            } else if (+e.target.value <= 0) {
              setQty(1);
              addToCartFunction && dispatch(addToCart(product.product, 1));
            } else if (+e.target.value > product.availableStocks) {
              setQty(product.availableStocks);
              addToCartFunction &&
                dispatch(addToCart(product.product, product.availableStocks));
            }
          }}
        ></input>
        <button
          className="quantity"
          onClick={() => {
            if (qty < product.availableStocks) {
              setQty(qty + 1);
              addToCartFunction &&
                dispatch(addToCart(product.product, qty + 1));
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityInput;

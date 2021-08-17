import React from "react";
import { ProductCheckOut, ProductDetails } from "./types";
type QuantityInputProps = {
  quantity: number;
  product: ProductDetails | ProductCheckOut;
  updateParentQuantity: (quantity: number) => void;
  addToCartFunction: boolean;
}

function QuantityInput({ quantity = 1, product, updateParentQuantity } : QuantityInputProps) {
  const [qty, setQty] = React.useState(quantity);
  return (
    <div className="row flex-start margin-bottom-large">
      <div className="quantity-text"> Quantity: </div>
      <div className="row">
        <button
          className="quantity"
          onClick={() => {
            if (qty > (product.availableStocks > 0 ? 1 : 0)) {
              setQty(qty - 1);
              updateParentQuantity(qty - 1);
            }
          }
          }
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
            setQty(Number(e.target.value));
          }}
          onBlur={(e) => {
            if (
              (product.availableStocks > 0 ? 1 : 0) <= +e.target.value &&
              +e.target.value <= product.availableStocks
            ) {
              setQty(Math.round(+e.target.value));
              updateParentQuantity(Number(e.target.value));
            } else if (+e.target.value <= 0) {
              setQty(1);
              updateParentQuantity(Number(e.target.value));
            } else if (+e.target.value > product.availableStocks) {
              setQty(product.availableStocks);
              updateParentQuantity(Number(e.target.value));
            }
          }}
        ></input>
        <button
          className="quantity"
          onClick={
            () => {
              if (qty < product.availableStocks) {
                setQty(qty + 1);
                updateParentQuantity(qty + 1);
              }
            }
          }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityInput;

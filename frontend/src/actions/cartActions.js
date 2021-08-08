import axios from "axios";
import {
  ADD_CART_ITEM,
  ADD_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM,
} from "../constants/cartConstant";

export const addToCart =
  (productId, quantity) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/api/products/${productId}`);
      dispatch({
        type: ADD_CART_ITEM,
        payload: {
          title: data.title,
          image: data.image,
          price: data.price,
          availableStocks: data.availableStocks,
          product: data.id,
          quantity,
        },
      });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (err) {
      dispatch({
        type: ADD_CART_ITEM_FAILURE,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const removeFromCart = (productId) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: productId,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

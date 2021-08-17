import axios from "axios";
import {
  ADD_CART_ITEM,
  ADD_CART_ITEM_FAILURE,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  REMOVE_CART_ITEM,
} from "../constants/cartConstant";
import { ShippingAddress } from "../types/shippingAddressType";

export const addToCart =
  (productId, quantity) => async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/api/products/${productId}`);
      dispatch({
        type: ADD_CART_ITEM,
        payload: {
          product: data._id,
          title: data.title,
          image: data.image,
          price: data.price,
          availableStocks: data.availableStocks,
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

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMethod = (paymentMethod) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: paymentMethod,
  });
  localStorage.setItem("paymentMethod", JSON.stringify(paymentMethod));
};

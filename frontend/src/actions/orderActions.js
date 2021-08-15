import axios from "axios";
import { CART_EMPTY } from "../constants/cartConstant";
import {
  ORDER_CREATE_FAILURE,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAILURE,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_HISTORY_FAILURE,
  ORDER_HISTORY_REQUEST,
  ORDER_HISTORY_SUCCESS,
  ORDER_PAY_FAILURE,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
} from "../constants/orderConstant";

export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_CREATE_REQUEST,
    payload: order,
  });
  try {
    const { userSignIn } = getState();
    const { userInfo } = userSignIn;
    const { data } = await axios.post("/api/orders", order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cartItems");
  } catch (err) {
    dispatch({
      type: ORDER_CREATE_FAILURE,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const detailsOrder = (orderId) => async (dispatch, getState) => {
  dispatch({
    type: ORDER_DETAILS_REQUEST,
    payload: orderId,
  });
  try {
    const { userSignIn } = getState();
    const { userInfo } = userSignIn;

    const { data } = await axios.get(`/api/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ORDER_DETAILS_FAILURE,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const payOrder =
  (order, paymentResults) => async (dispatch, getState) => {
    dispatch({ type: ORDER_PAY_REQUEST, payload: { order, paymentResults } });
    try {
      const { userSignIn } = getState();
      const { userInfo } = userSignIn;

      const { data } = await axios.put(
        `/api/orders/${order._id}/pay`,
        paymentResults,
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: ORDER_PAY_FAILURE,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const listOrderHistory = () => async (dispatch, getState) => {
  dispatch({ type: ORDER_HISTORY_REQUEST });
  try {
    const { userSignIn } = getState();
    const { userInfo } = userSignIn;

    const { data } = await axios.get(`/api/orders/history`, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    console.log(data);
    dispatch({ type: ORDER_HISTORY_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ORDER_HISTORY_FAILURE,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

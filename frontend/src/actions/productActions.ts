
import axios from "axios";
import { Dispatch } from "redux";
import {
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/ProductConstant";
import { productDetailsReducerAction, productListReducerAction } from "../reducers/productReducers";

export const listProducts = () => async (dispatch: Dispatch<productListReducerAction>) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data.products });
  } catch (err) {
    dispatch({ type: PRODUCT_LIST_FAILURE, payload: err.message });
  }
};

export const detailProduct = (productId: string) => async (dispatch: Dispatch<productDetailsReducerAction>) => {
  dispatch({
    type: PRODUCT_DETAILS_REQUEST,
    payload: productId,
  });
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAILURE,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

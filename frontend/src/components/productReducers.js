import {
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "./ProductConstant";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { isLoading: true };
    case PRODUCT_LIST_SUCCESS:
      return { isLoading: false, products: action.payload };
    case PRODUCT_LIST_FAILURE:
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};

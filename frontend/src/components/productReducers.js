import {
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "./ProductConstant";

export const productListReducer = (
  state = { products: [], isLoading: true },
  action
) => {
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

export const productDetailsReducer = (
  state = { products: [], isLoading: true },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { isLoading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { isLoading: false, product: action.payload };
    case PRODUCT_DETAILS_FAILURE:
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};

import {
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/ProductConstant";
import { ProductDetails } from "../types/productTypes";

export type productListReducerAction = {
  type: typeof PRODUCT_LIST_REQUEST 
} | {
  type: typeof PRODUCT_LIST_SUCCESS;
  payload: Array<ProductDetails>;
} | {
  type: typeof PRODUCT_LIST_FAILURE;
  payload: string;
}

export type productDetailsReducerAction = {
  type: typeof PRODUCT_DETAILS_REQUEST 
} | {
  type: typeof PRODUCT_DETAILS_SUCCESS;
  payload: ProductDetails;
} | {
  type: typeof PRODUCT_DETAILS_FAILURE;
  payload: string;
}

export const productListReducer = (
  state = { products: [], isLoading: true },
  action: productListReducerAction
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
  action: productDetailsReducerAction
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

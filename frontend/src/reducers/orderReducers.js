import {
  ORDER_CREATE_FAILURE,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAILURE,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../constants/orderConstant";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { isLoading: true };
    case ORDER_CREATE_SUCCESS:
      return { isLoading: false, success: true, order: action.payload };
    case ORDER_CREATE_FAILURE:
      return { isLoading: false, error: action.payload };
    case ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { isLoading: true, order: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { isLoading: true };
    case ORDER_DETAILS_SUCCESS:
      return { isLoading: false, order: action.payload };
    case ORDER_DETAILS_FAILURE:
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};

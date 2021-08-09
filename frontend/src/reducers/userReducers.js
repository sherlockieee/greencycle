import {
  USER_SIGNIN_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/userConstant";

export const userSignInReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { isLoading: true };
    case USER_SIGNIN_SUCCESS:
      return { isLoading: false, userInfo: action.payload };
    case USER_SIGNIN_FAILURE:
      return { isLoading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const userSignUpReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { isLoading: true };
    case USER_SIGNUP_SUCCESS:
      return { isLoading: false, userInfo: action.payload };
    case USER_SIGNUP_FAILURE:
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};

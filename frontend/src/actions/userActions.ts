import axios from "axios";
import { Dispatch } from "redux";
import { USER_SIGNIN_SIGNOUT, USER_SIGNUP } from "../constants/userConstant";
import { userSignInAction, userSignInSuccessAction, userSignOutAction, userSignUpAction } from "../reducers/userReducers";

export const signin = (email: string, password: string) => async (dispatch:Dispatch<userSignInAction>) => {
  dispatch({
    type: USER_SIGNIN_SIGNOUT.SIGNIN_REQUEST,
    payload: {
      email,
      password,
    },
  });
  try {
    const { data } = await axios.post("/api/users/signin", { email, password });
    dispatch({ type: USER_SIGNIN_SIGNOUT.SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_SIGNIN_SIGNOUT.SIGNIN_FAILURE,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const signup = (name: string, email: string, password: string) => async (dispatch:Dispatch<userSignUpAction | userSignInSuccessAction>) => {
  dispatch({
    type: USER_SIGNUP.SIGNUP_REQUEST,
    payload: {
      name,
      email,
      password,
    },
  });
  try {
    const { data } = await axios.post("/api/users/signup", {
      name,
      email,
      password,
    });
    dispatch({ type: USER_SIGNUP.SIGNUP_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SIGNOUT.SIGNIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_SIGNUP.SIGNUP_FAILURE,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const signout = () => (dispatch: Dispatch<userSignOutAction>) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  dispatch({ type: USER_SIGNIN_SIGNOUT.SIGNOUT });
};

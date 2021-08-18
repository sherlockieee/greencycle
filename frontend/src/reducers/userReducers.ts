// import {
//   USER_SIGNIN_FAILURE,
//   USER_SIGNIN_REQUEST,
//   USER_SIGNIN_SUCCESS,
//   USER_SIGNOUT,
//   USER_SIGNUP_FAILURE,
//   USER_SIGNUP_REQUEST,
//   USER_SIGNUP_SUCCESS,
// } from "../constants/userConstant";

import { USER_SIGNIN_SIGNOUT, USER_SIGNUP } from "../constants/userConstant";
import { UserInfo } from "../types/userTypes";

export type userSignInRequestAction = {
  type: USER_SIGNIN_SIGNOUT.SIGNIN_REQUEST;
  payload: {
    email: string;
    password: string;
  }
}

export type userSignInSuccessAction = {
  type: USER_SIGNIN_SIGNOUT.SIGNIN_SUCCESS;
  payload: UserInfo;
}

export type userSignInFailureAction = {
  type: USER_SIGNIN_SIGNOUT.SIGNIN_FAILURE;
  payload: string;
}

export type userSignOutAction = {
  type: USER_SIGNIN_SIGNOUT.SIGNOUT
};

export type userSignInAction =  userSignInRequestAction | userSignInSuccessAction | userSignInFailureAction | userSignOutAction;

export type userSignUpRequestAction = {
  type: USER_SIGNUP.SIGNUP_REQUEST;
  payload: {
    name: string;
    email: string;
    password: string;
  };

}
export type userSignUpSuccessAction = {
  type: USER_SIGNUP.SIGNUP_SUCCESS;
  payload: UserInfo;
};

export type userSignUpFailureAction = {
  type: USER_SIGNUP.SIGNUP_FAILURE;
  payload: string;
};

export type userSignUpAction = userSignUpRequestAction | userSignUpSuccessAction | userSignUpFailureAction;


export const userSignInReducer = (state = {}, action: userSignInAction) => {
  switch (action.type) {
    case USER_SIGNIN_SIGNOUT.SIGNIN_REQUEST:
      return { isLoading: true };
    case USER_SIGNIN_SIGNOUT.SIGNIN_SUCCESS:
      return { isLoading: false, userInfo: action.payload };
    case USER_SIGNIN_SIGNOUT.SIGNIN_FAILURE:
      return { isLoading: false, error: action.payload };
    case USER_SIGNIN_SIGNOUT.SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const userSignUpReducer = (state = {}, action: userSignUpAction) => {
  switch (action.type) {
    case USER_SIGNUP.SIGNUP_REQUEST:
      return { isLoading: true };
    case USER_SIGNUP.SIGNUP_SUCCESS:
      return { isLoading: false, userInfo: action.payload };
    case USER_SIGNUP.SIGNUP_FAILURE:
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};

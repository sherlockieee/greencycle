import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { cartReducer } from "./reducers/cartReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderHistoryReducer,
  orderPayReducer,
} from "./reducers/orderReducers";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import { userSignInReducer, userSignUpReducer } from "./reducers/userReducers";
import { ProductCheckOut, ProductDetails } from "./types/productTypes";
import { ShippingAddress } from "./types/shippingAddressType";
// import { ProductCheckOut } from "./types/productTypes";
// import { ShippingAddress } from "./types/shippingAddressType";
import { UserInfo } from "./types/userTypes";

// type RootState = {
//   productList?: {
//     isLoading: boolean,
//     products: Array<ProductDetails>;
//   },
//   productDetails?: {
//     isLoading: boolean,
//     products: ProductDetails,
//   },
//   cart?: {
//     cartItems: Array<ProductCheckOut>,
//     shippingAddress: ShippingAddress,
//     paymentMethod: 'PayPal' | 'Stripe',
//   },
//   userSignIn?: {
//     userInfo: UserInfo;
//   },
//   userSignUp?: any,
//   orderCreate?: any,
//   orderDetails?: {
//     isLoading: boolean;
//   },
//   orderPay?: any,
//   orderHistory?: {
//     orders: []
//   }
// }

const initialState = {
  cart: {
    cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
    shippingAddress: JSON.parse(
      localStorage.getItem("shippingAddress") || "{}"
    ),
    paymentMethod: "PayPal",
  },
  userSignIn: {
    userInfo: JSON.parse(localStorage.getItem("userInfo") || "null"),
  },
};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignIn: userSignInReducer,
  userSignUp: userSignUpReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderHistory: orderHistoryReducer,
});

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

export default store;

// export type RootState = ReturnType<typeof store.getState>;

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import CatalogScreen from "./screens/CatalogScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App grid-container">
        <NavBar />
        <main className="main">
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/products/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SignInScreen}></Route>
          <Route path="/signup" component={SignUpScreen}></Route>
          <Route path="/shipping" component={ShippingScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderDetailsScreen}></Route>
          <Route path="/" component={CatalogScreen} exact />
        </main>
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;

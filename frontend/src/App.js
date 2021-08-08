import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SignInScreen from "./screens/SignInScreen";
import CatalogScreen from "./screens/CatalogScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App grid-container">
        <NavBar />
        <main className="main">
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/products/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SignInScreen}></Route>
          <Route path="/signup"></Route>
          <Route path="/" component={CatalogScreen} exact />
        </main>
        <Footer className="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;

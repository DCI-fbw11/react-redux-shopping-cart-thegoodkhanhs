import React, { Component } from "react";
import "./App.css";
import Shop from "./modules/shop";
import Cart from "./modules/cart";
import Checkout from "./modules/checkout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Component-container">
          <Shop />
          {/* Shopping cart and Product list should go here */}
          <hr />
          <Cart />
          <Checkout />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
let clicked = "";
const mapStateToProps = state => {
  const products = Object.values(state.products);
  return { products };
};

const mapDispatchToProps = {
  add_product: () => ({ type: "ADD_PRODUCT", id: clicked })
};

class App extends Component {
  handler = e => {
    clicked = e.target.id;
    if(clicked =)
    return this.props.add_product(clicked);
  };

  render() {
    console.log(this.props);
    console.log(this.props.products["1"].title);
    const items = this.props.products.map((product, index) => {
      return (
        <li key={product.id}>
          {product.title} | {product.price} | {product.inventory} <br />
          <button id={product.id} onClick={this.handler}>
            Add to cart
          </button>
        </li>
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="Component-container">
          <ul>{items}</ul>
          {/* Shopping cart and Product list should go here */}
          <hr />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

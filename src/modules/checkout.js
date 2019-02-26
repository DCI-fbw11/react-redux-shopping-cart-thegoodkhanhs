import React from "react";
import { connect } from "react-redux";

const Checkout = props => {
  

  const handlerCheckout = e => {
    const cart = {};
    props.checkout(cart);

  };

  return (
    <div>
      <hr />
      <button onClick={handlerCheckout}>Checkout</button>
    </div>
  );
};

const mapStateToProps = state => {
  return { products: state.products, cart: state.cart };
};

const mapDispatchToProps = {
  checkout: (payload, cart) => ({
    type: "CHECKOUT",
    payload: payload,
    cart: cart
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);

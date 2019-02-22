import React from "react";
import { connect } from "react-redux";

const Cart = props => {
  console.log(props);
  const handlerRemoveOne = e => {
    const clicked = e.target.id;
    const selectedItem = props.cart[clicked];

    const newCartItem = {
      id: selectedItem.id,
      title: selectedItem.title,
      price: selectedItem.price,
      inventory: selectedItem.inventory - 1
    };

    

    let editedNumber = props.products[clicked].inventory + 1;
    const newShopItem = {
      id: selectedItem.id,
      title: selectedItem.title,
      price: selectedItem.price,
      inventory: editedNumber
    };

    props.remove_one(newCartItem, newShopItem);
  };

  const handlerRemoveAll = e =>{
    const clicked = e.target.id;
    const selectedItem = props.cart[clicked];

    console.log(selectedItem.inventory)
    let addNumber = props.products[clicked].inventory + selectedItem.inventory;
    const updateShopItem = {
      id: selectedItem.id,
      title: selectedItem.title,
      price: selectedItem.price,
      inventory: addNumber
    };
    props.remove_all(updateShopItem);
  }

  const productsArray = Object.values(props.cart);

  const cartItem = productsArray.map(cartItem => {
    return (
      <li key={cartItem.id}>
        {cartItem.title} | {cartItem.price} € | Stock: {cartItem.inventory}{" "}
        <br />
        <button id={cartItem.id} onClick={cartItem.inventory > 1 ? handlerRemoveOne:handlerRemoveAll} disabled={cartItem.inventory === 0 ? true : false}>
          Remove One
        </button>
        <button id={cartItem.id} onClick={handlerRemoveAll} disabled={cartItem.inventory === 0 ? true : false}>
          Remove All
        </button>
      </li>
    );
  });


const subtotalArray = productsArray.map(item => item.price * item.inventory);
const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (
    <div>
      <ul>{cartItem}</ul>
      <p>Total: {subtotalArray.length > 0 ? subtotalArray.reduce(reducer): 0} €</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { products: state.products, cart: state.cart };
};

const mapDispatchToProps = {
  remove_one: (payload, shop) => ({
    type: "REMOVE_ONE",
    payload: payload,
    shop: shop
  }),
  remove_all: (payload) => ({
    type: "REMOVE_ALL",
    payload: payload
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

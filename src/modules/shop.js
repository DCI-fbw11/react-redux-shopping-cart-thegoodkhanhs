import React from "react";
import { connect } from "react-redux";

const Shop = props => {
  const handlerAdd = e => {
    const clicked = e.target.id;
    const selectedItem = props.products[clicked];
    // console.log(selectedItem.inventory-1);

    const newShopItem = {
      id: selectedItem.id,
      title: selectedItem.title,
      price: selectedItem.price,
      inventory: selectedItem.inventory - 1
    };

    let editedNumber;
    if (props.cart[clicked] === undefined) {
      editedNumber = 1;
    } else {
      editedNumber = props.cart[clicked].inventory + 1;
    }

    const newCartItem = {
      id: selectedItem.id,
      title: selectedItem.title,
      price: selectedItem.price,
      inventory: editedNumber
    };

    props.add_product(newShopItem, newCartItem);
  };

  const productsArray = Object.values(props.products);

  const shopIems = productsArray.map(product => {
    return (
      <li key={product.id}>
        {product.title} | {product.price} € | Stock: {product.inventory} <br />
        <button
          id={product.id}
          onClick={handlerAdd}
          disabled={product.inventory === 0 ? true : false}
        >
          Add to cart
        </button>
      </li>
    );
  });
  return (
    <div>
      <ul>{shopIems}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { products: state.products, cart: state.cart };
};

const mapDispatchToProps = {
  add_product: (payload, cart) => ({
    type: "ADD_PRODUCT",
    payload: payload,
    cart: cart
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);

const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      if (action.id === state.products[action.id].id) {
        return console.log("good");
      }
    }
    case "CHECKOUT":
      return state;
    case "REMOVE_ONE":
      return state;
    case "REMOVE_ALL":
      return state;
    default:
      return state;
  }
};

export default appReducer;

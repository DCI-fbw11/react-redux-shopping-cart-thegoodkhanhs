const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.id]: action.payload
        }, cart: { ...state.cart,
          [action.payload.id]: action.cart } 
      };
    case "CHECKOUT":
      return {
        ...state, cart: action.payload
      };
    case "REMOVE_ONE":
      return  {
        ...state,
        products: {
          ...state.products,
          [action.payload.id]: action.shop
        },
         cart: { ...state.cart,
          [action.payload.id]: action.payload } 
      };
    case "REMOVE_ALL":
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.id]: action.payload
        }, 
        cart: Object.keys(state.cart).reduce((result, key) => {
          if(Number(key) !== action.payload.id){
            result[key]= state.cart[key]
          } return result
        },{}) 
      };
    default:
    return state
  }
};

export default appReducer;

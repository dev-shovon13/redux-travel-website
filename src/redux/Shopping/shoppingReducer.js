import * as actionTypes from "./shopping-types";

const initialState = {
  products: [],
  cart: [],
  currentItem: null,
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };

    case actionTypes.ADD_TO_CART:
      // Get Item data from products array
      const item = state.products.find(
        (product) => product._id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item._id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
      };

    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;

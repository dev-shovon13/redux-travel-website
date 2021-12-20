import * as actionTypes from "./shopping-types";

const initialState = {
  products: [
    {
      id: 1,
      _id: "617e0caf2091f7b8f0740484",
      name: "Italy",
      duration: "8",
      info:
        "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome",
      price: "2400",
      img: "https://i.ibb.co/T4MnJjr/2.jpg",
    },
    {
      id: 2,
      _id: "617e0caf2091f7b8f0740485",
      name: "Malaysia",
      duration: "6",
      info:
        "Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests.",
      price: "1200",
      img: "https://i.ibb.co/X7XkZ5v/3.jpg",
    },
    {
      id: 3,
      _id: "617e0caf2091f7b8f0740486",
      name: "Bhutan",
      duration: "7",
      info:
        "Bhutan, a Buddhist kingdom on the Himalayas’ eastern edge, is known for its monasteries, fortresses (or dzongs) and dramatic landscapes",
      price: "1500",
      img: "https://i.ibb.co/4KS92kL/6.jpg",
    },
    {
      id: 4,
      _id: "617e0caf2091f7b8f0740487",
      name: "Thailand",
      duration: "5",
      info:
        "Thailand is a Southeast Asian country. It's known for tropical beaches, royal palaces, ancient ruins and temples displaying figures of Buddha.",
      price: "1100",
      img: "https://i.ibb.co/XJSLs1S/7.jpg",
    },
    {
      id: 5,
      _id: "617e0caf2091f7b8f0740488",
      name: "Singapore",
      duration: "3",
      info:
        "Singapore, officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia.It's known for Cultural Diversity",
      price: "1800",
      img: "https://i.ibb.co/YZccrCr/8.jpg",
    },
    {
      id: 6,
      _id: "617e0caf2091f7b8f0740489",
      name: "India",
      duration: "4",
      info:
        "India, officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country",
      price: "700",
      img: "https://i.ibb.co/7NBZ9rz/9.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};
const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
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

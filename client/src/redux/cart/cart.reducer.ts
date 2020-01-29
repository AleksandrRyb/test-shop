import { CartState, CartActionTypes, CartTypes } from "../cart/cart.types";
import { removeItemFromCart, addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (
  state: CartState = INITIAL_STATE,
  action: CartActionTypes
) => {
  switch (action.type) {
    case CartTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;

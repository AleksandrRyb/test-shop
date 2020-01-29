import { Product } from "../products/products.types";

export const CartTypes = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART"
};

export interface AddItemActionAction {
  type: string;
  payload: Product;
}

export interface RemoceItemFromCartAction {
  type: string;
  payload: Product;
}

export type CartActionTypes = RemoceItemFromCartAction | AddItemActionAction;

export interface CartState {
  cartItems: Product[];
}

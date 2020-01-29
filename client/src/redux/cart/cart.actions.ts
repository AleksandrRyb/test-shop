import { CartTypes } from "./cart.types";
import { Product } from "../products/products.types";

export const addItem = (item: Product) => ({
  type: CartTypes.ADD_ITEM_TO_CART,
  payload: item
});

export const removeItem = (item: Product) => ({
  type: CartTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});

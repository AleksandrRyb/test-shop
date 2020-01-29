import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import productsReducer from "./products/products.reducer";

import { ProductsState } from "./products/products.types";
import { CartState } from "./cart/cart.types";

export interface StoreState {
  products: ProductsState;
  cart: CartState;
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["products", "cart"]
};

const rootReducer = combineReducers<StoreState>({
  cart: cartReducer,
  products: productsReducer
});

export default persistReducer(persistConfig, rootReducer);

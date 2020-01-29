export const ProductsTypes = {
  PRODUCTS_REQUESTING: "PRODUCTS_REQUESTING",
  PRODUCTS_SUCCESS: "PRODUCTS_SUCCESS",
  PRODUCTS_FAILURE: "PRODUCTS_FAILURE"
};

export interface Product {
  id: number;
  imageUrl: string;
  price: number;
  name: string;
  quantity: number;
}

export type ProductsSuccessAction = {
  type: string;
  payload: Product[];
};

export interface ProductsRequestingAction {
  type: string;
}

export type ProductsFailureAction = {
  type: string;
  payload: string;
};

export type ProductsActionTypes =
  | ProductsFailureAction
  | ProductsRequestingAction
  | ProductsSuccessAction;

export interface ProductsState {
  products: Product[];
  error: string;
  loading: boolean;
}

import { ProductsTypes, ProductsState } from "./products.types";

const INITIAL_STATE = {
  products: [],
  error: "",
  loading: false
};

const productsReducer = (
  state: ProductsState = INITIAL_STATE,
  action: any
): ProductsState => {
  switch (action.type) {
    case ProductsTypes.PRODUCTS_REQUESTING:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case ProductsTypes.PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case ProductsTypes.PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;

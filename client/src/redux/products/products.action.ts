import { Dispatch } from "redux";
import {
  ProductsTypes,
  ProductsFailureAction,
  ProductsRequestingAction,
  ProductsSuccessAction
} from "./products.types";
import { getProducts as products } from "../../apollo/queries/products.queries";

export const getProducts = () => async (dispatch: Dispatch) => {
  dispatch<ProductsRequestingAction>({
    type: ProductsTypes.PRODUCTS_REQUESTING
  });
  try {
    const payload = await products();
    dispatch<ProductsSuccessAction>({
      type: ProductsTypes.PRODUCTS_SUCCESS,
      payload
    });
  } catch (error) {
    dispatch<ProductsFailureAction>({
      type: ProductsTypes.PRODUCTS_FAILURE,
      payload: error.message
    });
  }
};

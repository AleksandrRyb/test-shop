import { Resolvers } from "../../../types/resolver";
import { GetProductsResponse } from "../../../types/graph";
import Product from "../../../entities/Product";

const resolvers: Resolvers = {
  Query: {
    GetProducts: async (_, __): Promise<GetProductsResponse> => {
      try {
        const products = await Product.find();
        if (products) {
          return {
            ok: true,
            error: null,
            products
          };
        } else {
          return {
            ok: false,
            error: "Can not get product list",
            products: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          products: null
        };
      }
    }
  }
};

export default resolvers;

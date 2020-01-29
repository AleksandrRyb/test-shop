import { Resolvers } from "../../../types/resolver";
import {
  AddProductToDbMutationArgs,
  AddProductToDbResponse
} from "../../../types/graph";
import Product from "../../../entities/Product";

const resolvers: Resolvers = {
  Mutation: {
    AddProductToDb: async (
      _,
      args: AddProductToDbMutationArgs
    ): Promise<AddProductToDbResponse> => {
      try {
        const product = await Product.create({ ...args }).save();
        if (product) {
          return {
            ok: true,
            error: null,
            product
          };
        } else {
          return {
            ok: false,
            error: "Something went wrong!",
            product: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          product: null
        };
      }
    }
  }
};

export default resolvers;

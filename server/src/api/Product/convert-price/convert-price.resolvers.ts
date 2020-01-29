import { Resolvers } from "../../../types/resolver";
import { ConvertTotalPriceQueryArgs } from "../../../types/graph";
import { convertPrice } from "../../../utils/convertPrice";
// import Product from "src/entities/Product";

const resolvers: Resolvers = {
  Query: {
    ConvertTotalPrice: async (_, args: ConvertTotalPriceQueryArgs) => {
      try {
        const { price } = args;
        const priceUsd = await convertPrice(price, "USD");
        const priceEur = await convertPrice(price, "EUR");
        if (priceEur && priceUsd) {
          return {
            ok: true,
            error: null,
            priceEur,
            priceUsd,
            priceRub: price
          };
        } else {
          return {
            ok: false,
            error: "Converting is failed",
            price: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          price: null
        };
      }
    }
  }
};

export default resolvers;

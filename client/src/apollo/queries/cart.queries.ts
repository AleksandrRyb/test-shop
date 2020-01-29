import { gql } from "apollo-boost";
import { client } from "../apollo";

export const convertPrice = async (price: number) => {
  const response = await client.query({
    variables: {
      price
    },
    query: gql`
      query ConvertTotalPrice($price: Float!) {
        ConvertTotalPrice(price: $price) {
          ok
          error
          priceUsd
          priceEur
          priceRub
        }
      }
    `
  });
  return response.data.ConvertTotalPrice;
};

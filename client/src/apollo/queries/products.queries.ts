import { gql } from "apollo-boost";
import { client } from "../apollo";

export const getProducts = async () => {
  const response = await client.query({
    query: gql`
      query GetProducts {
        GetProducts {
          products {
            id
            imageUrl
            price
            name
            quantity
          }
        }
      }
    `
  });
  return response.data.GetProducts.products;
};

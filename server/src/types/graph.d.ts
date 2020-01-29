export const typeDefs = ["type AddProductToDbResponse {\n  ok: Boolean!\n  error: String\n  product: Product\n}\n\ntype Mutation {\n  AddProductToDb(name: String!, price: Float!, imageUrl: String!): AddProductToDbResponse!\n}\n\ntype ConvertTotalPriceResponse {\n  ok: Boolean!\n  error: String\n  priceUsd: Float\n  priceEur: Float\n  priceRub: Float\n}\n\ntype Query {\n  ConvertTotalPrice(price: Float!): ConvertTotalPriceResponse!\n  GetProducts: GetProductsResponse!\n}\n\ntype GetProductsResponse {\n  ok: Boolean!\n  error: String\n  products: [Product]\n}\n\ntype Product {\n  id: Int!\n  name: String!\n  description: String\n  price: Float!\n  inCart: Boolean\n  quantity: Int\n  amount: Int\n  imageUrl: String!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  ConvertTotalPrice: ConvertTotalPriceResponse;
  GetProducts: GetProductsResponse;
}

export interface ConvertTotalPriceQueryArgs {
  price: number;
}

export interface ConvertTotalPriceResponse {
  ok: boolean;
  error: string | null;
  priceUsd: number | null;
  priceEur: number | null;
  priceRub: number | null;
}

export interface GetProductsResponse {
  ok: boolean;
  error: string | null;
  products: Array<Product> | null;
}

export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  inCart: boolean | null;
  quantity: number | null;
  amount: number | null;
  imageUrl: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface Mutation {
  AddProductToDb: AddProductToDbResponse;
}

export interface AddProductToDbMutationArgs {
  name: string;
  price: number;
  imageUrl: string;
}

export interface AddProductToDbResponse {
  ok: boolean;
  error: string | null;
  product: Product | null;
}

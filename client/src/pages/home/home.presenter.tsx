import React from "react";
import Helmet from "react-helmet";

import { Product } from "../../redux/products/products.types";

import ShopItem from "../../components/shop-item";
import { Container, Title, Items } from "./home.styles";

interface IProps {
  products: Product[];
}

const HomePresenter: React.SFC<IProps> = ({ products }) => (
  <Container>
    <Helmet>
      <title>Test Shop | Home</title>
    </Helmet>
    <Title>Products</Title>
    <Items>
      {products.map(product => (
        <ShopItem product={product} key={product.id} />
      ))}
    </Items>
  </Container>
);

export default HomePresenter;

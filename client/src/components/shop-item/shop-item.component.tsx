import React from "react";
import { connect } from "react-redux";

//Components
import { Container, Footer, Image, Name, Price } from "./shop-item.styles";
import CustomButton from "../custom-button";

//Redux
import { Product } from "../../redux/products/products.types";
import { addItem } from "../../redux/cart/cart.actions";

interface IProps {
  product: Product;
  addItem: (item: Product) => any;
}

const ShopItem: React.SFC<IProps> = ({ product, addItem }) => (
  <Container>
    <Image imageUrl={product.imageUrl} />
    <Footer>
      <Name>{product.name}</Name>
      <Price>{`${product.price}RUB`}</Price>
    </Footer>
    <CustomButton onClick={() => addItem(product)}>Add To Cart</CustomButton>
  </Container>
);

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: Product) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ShopItem);

import React from "react";
import { connect } from "react-redux";

//Redux
import { addItem, removeItem } from "../../redux/cart/cart.actions";

import { Product } from "../../redux/products/products.types";

import {
  Container,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton
} from "./checkout-item.styles";

interface IProps {
  cartItem: Product;
  addItem: (item: Product) => void;
  removeItem: (item: Product) => void;
}

const CheckoutItemPresenter: React.SFC<IProps> = ({
  cartItem,
  addItem,
  removeItem
}) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <Container>
      <ImageContainer>
        <Image src={imageUrl}></Image>
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Price>{`${price} RUB`}</Price>
      <RemoveButton></RemoveButton>
    </Container>
  );
};

export default connect(null, { addItem, removeItem })(CheckoutItemPresenter);

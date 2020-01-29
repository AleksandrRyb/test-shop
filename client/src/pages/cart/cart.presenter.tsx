import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";

//Redux
import { Product } from "../../redux/products/products.types";
import { StoreState } from "../../redux/root-reducer";
//Components
import CheckoutItem from "../../components/checkout-item";
import { Container, Header, HeaderBlock, Total, Footer } from "./cart.styles";
import CustomButton from "../../components/custom-button";

interface IProps {
  onClick: (price: number) => any;
  cartItems: Product[];
  total: number;
  priceUsd: number;
  priceEur: number;
}

const CartPresenter: React.SFC<IProps> = ({
  cartItems,
  total,
  onClick,
  priceUsd,
  priceEur
}) => {
  const roundedTotal = Math.floor(total * 100) / 100;
  return (
    <Container>
      <Helmet>
        <title>TestShop | Cart</title>
      </Helmet>
      <Header>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </Header>
      {cartItems.map((cartItem, i) => (
        <CheckoutItem cartItem={cartItem} key={i} />
      ))}

      <Footer>
        <CustomButton onClick={() => onClick(total)}>
          Convert Price
        </CustomButton>
        <Total>
          {priceEur && priceUsd
            ? `${priceEur}EUR ${priceUsd}USD ${roundedTotal}RUB`
            : `${roundedTotal}RUB`}
        </Total>
      </Footer>
    </Container>
  );
};

const mapStateToProps = (state: StoreState) => ({
  cartItems: state.cart.cartItems,
  total: state.cart.cartItems.reduce(
    (accumulate, cartItem) => accumulate + cartItem.quantity * cartItem.price,
    0
  )
});

export default connect(mapStateToProps)(CartPresenter);

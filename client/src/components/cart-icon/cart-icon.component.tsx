import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { Container, Count, IconLink } from "./cart-icon.styles";
import { StoreState } from "../../redux/root-reducer";

interface IProps {
  count: number;
}

const CartIcon: React.SFC<IProps> = ({ count }) => (
  <Container>
    <IconLink to="/cart">
      <ShoppingIcon style={{ width: "24px", height: "24px" }} />
    </IconLink>
    <Count>{count}</Count>
  </Container>
);

const mapStateToProps = (state: StoreState) => ({
  count: state.cart.cartItems.reduce(
    (accumulate, cartItem) => accumulate + cartItem.quantity,
    0
  )
});

export default connect(mapStateToProps)(CartIcon);

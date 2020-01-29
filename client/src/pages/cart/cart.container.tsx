import React from "react";
import CartPresenter from "./cart.presenter";
import { convertPrice } from "../../apollo/queries/cart.queries";

interface IProps {}

interface IState {
  priceUsd: number;
  priceEur: number;
}

class CartContainer extends React.Component<IProps, IState> {
  state = {
    priceUsd: 0,
    priceEur: 0
  };

  onConvertPriceClick = async (price: number) => {
    try {
      const prices = await convertPrice(price);
      const { priceEur, priceUsd } = prices;
      this.setState({ priceEur, priceUsd });
    } catch (error) {}
  };

  render() {
    const { priceUsd, priceEur } = this.state;
    return (
      <CartPresenter
        onClick={this.onConvertPriceClick}
        priceEur={priceEur}
        priceUsd={priceUsd}
      />
    );
  }
}

export default CartContainer;

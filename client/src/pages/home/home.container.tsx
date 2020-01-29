import React from "react";
import { connect } from "react-redux";

//Redux
import { getProducts } from "../../redux/products/products.action";
import { Product } from "../../redux/products/products.types";
import { StoreState } from "../../redux/root-reducer";

//Components
import HomePresenter from "./home.presenter";

interface IProps {
  getProducts: () => any;
  products: Product[];
  loading: boolean;
}

class HomeContainer extends React.Component<IProps> {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;

    return <HomePresenter products={products} />;
  }
}

const mapStateToProps = (
  state: StoreState
): { products: Product[]; loading: boolean } => ({
  products: state.products.products,
  loading: state.products.loading
});

export default connect(mapStateToProps, { getProducts })(HomeContainer);

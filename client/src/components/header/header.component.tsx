import React from "react";

import CartIcon from "../cart-icon";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer
} from "./header.styles";

const Header: React.SFC = () => (
  <HeaderContainer>
    <LogoContainer to={"/"}>
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <CartIcon />
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;

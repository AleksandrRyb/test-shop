import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

interface IProps {
  children: string;
  onClick?: (e: React.MouseEvent) => void;
}

const CustomButton: React.SFC<IProps> = ({ children, onClick }) => (
  <CustomButtonContainer onClick={onClick}>{children}</CustomButtonContainer>
);

export default CustomButton;

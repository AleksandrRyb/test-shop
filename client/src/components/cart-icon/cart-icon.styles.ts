import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Count = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 15px;
`;

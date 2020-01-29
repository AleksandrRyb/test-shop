import styled from "styled-components";

interface ImageProp {
  imageUrl: string;
}

export const Container = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const Image = styled.div<ImageProp>`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.imageUrl});
  margin-bottom: 5px;
  &:hover {
    opacity: 0.8;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 19%;
`;

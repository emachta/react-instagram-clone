import styled, { keyframes } from "styled-components";

const rotateDiv = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const ImgContainer = styled.img`
  width: 35px;
  height: 35px;
  animation: ${rotateDiv} 2s linear infinite;
`;

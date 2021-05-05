import styled, { keyframes } from "styled-components";

const rotateDiv = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const ImgContainer = styled.img`
  width: 20px;
  height: 20px;
  animation: ${rotateDiv} 2s linear infinite;
`;

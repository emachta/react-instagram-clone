import React from "react";
import { Container } from "./styles";

function Box({ children, height, style }) {
  return (
    <Container height={height} style={style}>
      {children}
    </Container>
  );
}

export default Box;

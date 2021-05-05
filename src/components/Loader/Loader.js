import React from "react";
import { Rotate, ImgContainer } from "./styles";

const Loader = () => {
  return (
    <Rotate>
      <ImgContainer alt="" src={require("../../assets/loader.png")} />
    </Rotate>
  );
};
export default Loader;

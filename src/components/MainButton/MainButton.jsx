import React from "react";
import loadingIcon from "../../assets/loadingIcon.png";
import { ImgContainer } from "./styles";

function MainButton({ disabled, func, title, isLoading }) {
  return (
    <button
      onClick={() => !disabled && func()}
      style={{
        cursor: disabled ? null : "pointer",
        marginTop: 10,
        width: "80%",
        backgroundColor: disabled ? "#0095f650" : "#0095f6",
        border: 0,
        height: 30,
        borderRadius: 4,
        textDecoration: "none",
        outline: "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <ImgContainer src={loadingIcon} alt="Loading Indicator" />
      ) : (
        <p
          style={{
            margin: 0,
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          {title}
        </p>
      )}
    </button>
  );
}

export default MainButton;

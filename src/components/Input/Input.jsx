import React from "react";

function Input({ type, placeholder, style, onChange, value }) {
  return (
    <input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
      style={{
        backgroundColor: "#fafafa",
        height: 20,
        padding: 6,
        width: "75%",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#26262620",
        textOverflow: "ellipsis",
        outline: "none",
        ...style,
      }}
    />
  );
}

export default Input;

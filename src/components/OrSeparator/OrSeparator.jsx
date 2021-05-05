import React from "react";

function OrSeparator() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          borderWidth: 0.5,
          width: 100,
          borderStyle: "solid",
          borderColor: "#dbdbdb",
          marginRight: 20,
        }}
      ></div>
      <p
        style={{
          margin: 0,
          fontSize: 14,
          fontWeight: "600",
          color: "#999999",
        }}
      >
        OR
      </p>
      <div
        style={{
          marginLeft: 20,
          borderWidth: 0.5,
          width: 100,
          borderStyle: "solid",
          borderColor: "#dbdbdb",
        }}
      ></div>
    </div>
  );
}

export default OrSeparator;

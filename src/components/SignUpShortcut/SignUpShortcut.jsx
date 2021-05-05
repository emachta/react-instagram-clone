import React from "react";

function SignUpShortcut() {
  return (
    <>
      <p
        style={{
          margin: 0,
          fontSize: 14,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Don't have an account?{" "}
        <a
          style={{
            color: "#0095f6",
            fontWeight: "600",
            textDecoration: "none",
          }}
          href="/signup"
        >
          Sign up
        </a>
      </p>
    </>
  );
}

export default SignUpShortcut;

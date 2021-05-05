import React, { useState } from "react";
import Input from "../../components/Input/Input";
import fLogo from "../../assets/flogo.png";
import InstagramLogo from "../../assets/InstagramLogo";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import OrSeparator from "../OrSeparator/OrSeparator";
import MainButton from "../MainButton/MainButton";

function LoginForm() {
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginDisabled = !userName || password.length <= 6;

  const authenticate = async (email, password) => {
    setIsLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log({ err });
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <InstagramLogo />
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: 350,
        }}
      >
        <Input
          value={userName || ""}
          onChange={(evt) => setUserName(evt.target.value)}
          placeholder={"Phone number, username, or email"}
        />
        <Input
          value={password || ""}
          onChange={(evt) => setPassword(evt.target.value)}
          style={{ marginTop: 8 }}
          placeholder={"Password"}
          type={"password"}
        />
        <MainButton
          isLoading={isLoading}
          title={"Log in"}
          disabled={loginDisabled}
          func={() => authenticate(userName, password)}
        />

        <OrSeparator />
        <button
          style={{
            border: 0,
            background: "transparent",
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={fLogo}
            style={{ width: 20, height: 20, marginRight: 8 }}
            alt="Facebook Logo"
          />
          <p
            style={{
              margin: 0,
              fontWeight: "600",
              fontSize: 14,
              color: "#385185",
            }}
          >
            Log In with Facebook
          </p>
        </button>
        {error && (
          <div>
            <p style={{ color: "red", textAlign: "center", fontSize: 14 }}>
              Sorry, your password was incorrect. Please double-check your
              password.
            </p>
          </div>
        )}
        <button style={{ border: 0, backgroundColor: "transparent" }}>
          <p style={{ color: "#00376b" }}>Forgot password?</p>
        </button>
      </div>
    </div>
  );
}

export default LoginForm;

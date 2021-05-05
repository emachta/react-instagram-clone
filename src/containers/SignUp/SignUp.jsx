import React, { useState } from "react";
import InstagramLogo from "../../assets/InstagramLogo";
import AppStoreShortcut from "../../components/AppStoreShortcut/AppStoreShortcut";
import Box from "../../components/Box/Box";
import Input from "../../components/Input/Input";
import MainButton from "../../components/MainButton/MainButton";
import OrSeparator from "../../components/OrSeparator/OrSeparator";
import { Container } from "./styles";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function SignUp() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signUpDisabled =
    !email || !fullName || !userName || password.length < 6;

  const signUp = async () => {
    setIsLoading(true);
    try {
      const authResponse = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await firebase
        .firestore()
        .collection("users")
        .doc(authResponse.user.uid)
        .set({
          fullName,
          userName,
          email,
          password,
        });
    } catch (err) {
      console.log({ err });
      alert(err?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Box style={{ marginTop: 40 }}>
        <InstagramLogo />
        <p
          style={{
            margin: 0,
            fontSize: 17,
            color: "#8e8e8e",
            fontWeight: "700",
            textAlign: "center",
            alignSelf: "center",
            marginLeft: 40,
            marginRight: 40,
          }}
        >
          Sign up to see photos and videos from your friends.
        </p>
        <MainButton
          title="Log in with Facebook"
          func={() => {
            console.log("clicked Log in with Facebook");
          }}
        />
        <OrSeparator />
        <Input
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder="Email"
          style={{ marginTop: 10 }}
        />
        <Input
          onChange={(evt) => setFullName(evt.target.value)}
          placeholder="Full Name"
          style={{ marginTop: 10 }}
        />
        <Input
          onChange={(evt) => setUserName(evt.target.value)}
          placeholder="Username"
          style={{ marginTop: 10 }}
        />
        <Input
          onChange={(evt) => setPassword(evt.target.value)}
          placeholder="Password"
          style={{ marginTop: 10 }}
          type={"password"}
        />
        <MainButton
          isLoading={isLoading}
          title="Sign up"
          disabled={signUpDisabled}
          func={signUp}
        />
        <p
          style={{
            color: "#8e8e8e",
            fontSize: 12,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          By signing up, you agree to our Terms, Data Policy and Cookies Policy.
        </p>
      </Box>
      <Box style={{ marginTop: 15 }}>
        <>
          <p
            style={{
              fontSize: 14,
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Have an account?{" "}
            <a
              style={{
                color: "#0095f6",
                fontWeight: "600",
                textDecoration: "none",
              }}
              href="/"
            >
              Log in
            </a>
          </p>
        </>
      </Box>
      <AppStoreShortcut />
    </Container>
  );
}

export default SignUp;

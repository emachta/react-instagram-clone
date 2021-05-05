import React from "react";

import PhonePictureHolder from "../../assets/PhonePictureHolder.png";
import Box from "../../components/Box/Box";
import { Container, PhoneExample } from "./styles";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import InstaExample1 from "../../assets/instaExample1.jpeg";
import InstaExample2 from "../../assets/instaExample2.jpeg";
import InstaExample3 from "../../assets/instaExample3.jpeg";
import InstaExample4 from "../../assets/instaExample4.jpeg";
import InstaExample5 from "../../assets/instaExample5.jpeg";
import { useMediaQuery } from "react-responsive";
import AppStoreShortcut from "../../components/AppStoreShortcut/AppStoreShortcut";
import SignUpShortcut from "../../components/SignUpShortcut/SignUpShortcut";
import LoginForm from "../../components/LoginForm/LoginForm";

const fadeImages = [
  InstaExample1,
  InstaExample2,
  InstaExample3,
  InstaExample4,
  InstaExample5,
];

function Login() {
  const showMobileView = useMediaQuery({ maxWidth: 450 });

  return (
    <Container>
      {/* Left */}
      <PhoneExample
        backgroundImage={PhonePictureHolder}
        style={{ backgroundImage: `url(${PhonePictureHolder})` }}
      >
        <Fade arrows={false} style={{ marginTop: 99, marginLeft: 151 }}>
          <img src={fadeImages[0]} alt="instagram app example 1" />
          <img src={fadeImages[1]} alt="instagram app example 2" />
          <img src={fadeImages[2]} alt="instagram app example 3" />
          <img src={fadeImages[3]} alt="instagram app example 4" />
          <img src={fadeImages[4]} alt="instagram app example 5" />
        </Fade>
      </PhoneExample>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: showMobileView ? "100%" : null,
          alignItems: "center",
        }}
      >
        {showMobileView ? (
          <LoginForm />
        ) : (
          <Box>
            <LoginForm />
          </Box>
        )}
        {showMobileView ? (
          <SignUpShortcut />
        ) : (
          <Box
            height={"60px"}
            style={{
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SignUpShortcut />
          </Box>
        )}
        <AppStoreShortcut />
      </div>
    </Container>
  );
}

export default Login;

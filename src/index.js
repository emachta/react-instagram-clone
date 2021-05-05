import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD55deneBZYvdSwU7102HWM4Eejht-j9xU",
  authDomain: "react-instagram-clone-ac086.firebaseapp.com",
  projectId: "react-instagram-clone-ac086",
  storageBucket: "react-instagram-clone-ac086.appspot.com",
  messagingSenderId: "134972014515",
  appId: "1:134972014515:web:e5120eea6a063ed8a995c6",
  measurementId: "G-FDYSY4RWJG",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

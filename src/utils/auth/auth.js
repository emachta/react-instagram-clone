import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const useAuthState = () => {
  const [details, setDetails] = useState({
    loggedIn: null,
    user: null,
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setDetails({
          user,
          loggedIn: true,
        });
      } else {
        setDetails({
          user: null,
          loggedIn: false,
        });
      }
    });
  }, []);

  return [details.loggedIn, details.user];
};

import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

function Home() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // const deleteAccount = async () => {
  //   await firebase.auth().currentUser.delete().catch(err=>{
  //     if(err.code === "auth/requires-recent-login")
  //   })
  // }

  const userId = firebase.auth().currentUser.uid;
  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .onSnapshot((snapshot) => {
        setEmail(snapshot?.data()?.email || "");
        setFullName(snapshot?.data()?.fullName || "");
        setUserName(snapshot?.data()?.userName || "");
        setPassword(snapshot?.data()?.password || "");
      });
    return () => unsub();
  }, [userId]);
  return (
    <div>
      <p>HOME</p>
      <p>EMAIL: {email}</p>
      <p>NAME: {fullName}</p>
      <p>USERNAME: {userName}</p>
      <p>PASSWORD: {password}</p>
      <button onClick={async () => await firebase.auth().signOut()}>
        SIGN OUT
      </button>
      {/* <button
        onClick={async () =>
          await firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({ test: "test" })
        }
      >
        Test
      </button> */}
      {/* <button onClick={async () => await firebase.auth().currentUser.delete()}>
        DELETE ACCOUNT
      </button> */}
    </div>
  );
}

export default Home;

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEuh-CxoLHTjIRjZvPih1hlPXAZf8iUO8",
  authDomain: "crwn-clothing-ea87f.firebaseapp.com",
  databaseURL: "https://crwn-clothing-ea87f.firebaseio.com",
  projectId: "crwn-clothing-ea87f",
  storageBucket: "",
  messagingSenderId: "378518715977",
  appId: "1:378518715977:web:3b654bf5f9cca70c4a8998",
  measurementId: "G-ZER1EDR4R6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

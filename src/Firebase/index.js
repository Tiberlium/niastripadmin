// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-

import "firebase/compat/storage";
import "firebase/compat/firestore";

// Initialize Firebase

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const App = firebase.initializeApp({
  apiKey: "AIzaSyCIhkhFdpfK5drItixB4zeavdY8z8wmmbE",
  authDomain: "niastrip-26adf.firebaseapp.com",
  projectId: "niastrip-26adf",
  storageBucket: "niastrip-26adf.appspot.com",
  messagingSenderId: "630789254968",
  appId: "1:630789254968:web:a183f05004a02dcb3ddbcd",
  measurementId: "G-HQBVR8FXZL",
});

export const storages = firebase.storage();

export const db = firebase.firestore();

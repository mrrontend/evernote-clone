import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
  apiKey: "AIzaSyBXT9Vtj9tsTeDCdfz8W_03xIYAqFI8GvI",
  authDomain: "evernote-clone-319e5.firebaseapp.com",
  databaseURL: "https://evernote-clone-319e5.firebaseio.com",
  projectId: "evernote-clone-319e5",
  storageBucket: "evernote-clone-319e5.appspot.com",
  messagingSenderId: "1024293222415",
  appId: "1:1024293222415:web:bd75820e9bdf81c3"
});

ReactDOM.render(<App />, document.getElementById("root"));

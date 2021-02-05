import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBDX2a0q5OO42UrjOlyBHA5R01VMsSyfDo",
    authDomain: "flash-grid.firebaseapp.com",
    projectId: "flash-grid",
    storageBucket: "flash-grid.appspot.com",
    messagingSenderId: "539677319516",
    appId: "1:539677319516:web:a6246002c6c628caa2a199",
    measurementId: "G-BNXMXLH7KK"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
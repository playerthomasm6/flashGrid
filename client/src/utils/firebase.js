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

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};







export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};



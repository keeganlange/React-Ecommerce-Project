import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCVfmkalZP8vxbRx_n8wIwb8kSAvebrrhc",
  authDomain: "treasure-db.firebaseapp.com",
  projectId: "treasure-db",
  storageBucket: "treasure-db.appspot.com",
  messagingSenderId: "829197509223",
  appId: "1:829197509223:web:a1592841fabed193f76ac2",
  measurementId: "G-1SPWCZNZ2C",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//provider.setCustomParameters({ prompt: "select_amount" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

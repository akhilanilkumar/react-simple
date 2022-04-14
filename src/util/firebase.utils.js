//  Create an instance of an App.
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz2fnrJypSkzBdwRQ581qP4_AzdzRat8w",
  authDomain: "react-learning-18d91.firebaseapp.com",
  projectId: "react-learning-18d91",
  storageBucket: "react-learning-18d91.appspot.com",
  messagingSenderId: "170603611916",
  appId: "1:170603611916:web:e8557f3694c3cbcc466b29",
};

// Initialize Firebase
// All the CRUD operation is going to happen using this firebase instance
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider().setCustomParameters({
  // Whenever user communicating with Firebase, always select an account.
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // Create a user doc reference
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  // Check if the document is exists in the table.
  if (!userSnapshot.exists()) {
    // Create new Document
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

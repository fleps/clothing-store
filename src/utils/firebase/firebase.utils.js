import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNe7LQgwwQRC0GY4XqZQOCSI0NcPJWpPI",
  authDomain: "capstone-db-d45e0.firebaseapp.com",
  projectId: "capstone-db-d45e0",
  storageBucket: "capstone-db-d45e0.appspot.com",
  messagingSenderId: "165932300125",
  appId: "1:165932300125:web:f957cd53f455823e7e1ab4"
};


const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

// Google Auth
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Firebase authenticate / create user from Google Login
export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log(`Error creating user: ${error.message}`);
    }
  }

  return userDocRef;
};

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNe7LQgwwQRC0GY4XqZQOCSI0NcPJWpPI",
  authDomain: "capstone-db-d45e0.firebaseapp.com",
  projectId: "capstone-db-d45e0",
  storageBucket: "capstone-db-d45e0.appspot.com",
  messagingSenderId: "165932300125",
  appId: "1:165932300125:web:f957cd53f455823e7e1ab4"
};


const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Google Auth
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Firebase authenticate / create user from Google Login
export const db = getFirestore();

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = await collection(db, collectionKey);
  const batch = await writeBatch(db);

  objectsToAdd.forEach((category) => {
    const docRef = doc(collectionRef, category.title.toLowerCase());
    batch.set(docRef, category);
  });

  await batch.commit();
}

export const getCategories = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}

export const createUserDocFromAuth = async (userAuth, extraInfo = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...extraInfo
      })
    } catch (error) {
      console.log(`Error creating user: ${error.message}`);
    }
  }

  return userDocRef;
};

export const createUserWithEmailPwd = async (email, password) => {
  if (email && password) {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
};

export const loginUserWithEmailPwd = async (email, password) => {
  if (email && password) {
    return await signInWithEmailAndPassword(auth, email, password);
  }
};

export const logOutUser = async () => await signOut(auth);

export const authChangedListener = (callback) => onAuthStateChanged(auth, callback)

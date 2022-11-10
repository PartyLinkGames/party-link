import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvlmtl-MAO5rnnmmtc5dw2OkiKrJaFlnM",
  authDomain: "party-link.firebaseapp.com",
  projectId: "party-link",
  storageBucket: "party-link.appspot.com",
  messagingSenderId: "872817686730",
  appId: "1:872817686730:web:e9d11c1ff0514bfeb55c33",
  measurementId: "G-LBMPLNKLSZ",
  // experimentalForce
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

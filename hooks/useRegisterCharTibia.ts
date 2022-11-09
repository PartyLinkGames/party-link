import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import {
  addDoc,
  doc,
  setDoc,
  collection,
  FieldValue,
  arrayUnion,
  updateDoc,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { app, db } from "../firebase/config";

export const useRegisterCharTibia = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const auth = getAuth(app);
  const database = getDatabase(app);
  useEffect(() => {
    const getUserUid = () => {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
    };
    getUserUid();
  });
  const registerChar = async (uid: string, nickName: string) => {
    const data = await getDoc(doc(db, "users", uid));
    const chars = data.data();
    if (chars?.nickName?.length > 0) {
      updateDoc(doc(db, "users", uid), {
        nickName: arrayUnion(nickName),
      });
    } else {
      try {
        setDoc(doc(db, "users", uid), {
          nickName: arrayUnion(nickName),
        });
      } catch (error) {}
    }
  };

  return {
    currentUser,
    registerChar,
  };
};

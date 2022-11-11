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
  query,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { app, db } from "../firebase/config";
import { instance } from "../services/api";
// import { axios } from "axios";
import { get } from "http";

export const useRegisterCharTibia = () => {
  const [currentUser, setCurrentUser] = useState<
    (object & { uid: string }) | null
  >(null);
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
    let arrayForConsult: any = [];
    try {
      const response = await instance(`v3/character/${nickName}`);
      if (response.data.characters.character.name !== "") {
        const q = query(
          collection(db, "users"),
          where("nickName", "array-contains", nickName)
        );
        onSnapshot(q, (docs) => {
          docs.docs.map((doc) => {
            arrayForConsult.push(doc.data());
          });
        });
        try {
          setDoc(
            doc(db, "users", uid),
            {
              nickName: arrayUnion(response.data.characters.character.name),
            },
            { merge: true }
          );
        } catch (error) {}
      } else {
        toast.error("Account does not exist", {
          theme: "dark",
          autoClose: 2000,
        });
      }
    } catch (error) {}
  };

  return {
    currentUser,
    registerChar,
  };
};

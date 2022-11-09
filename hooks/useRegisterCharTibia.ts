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
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { app, db } from "../firebase/config";
import { instance } from "../services/api";

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
    try {
      const response = await instance(`v3/character/${nickName}`);
      if (response.data.characters.character.name !== "") {
        const data = await getDoc(doc(db, "users", uid));
        const chars = data.data();
        // console.log(
        //   query(
        //     collection(db, "users"),
        //     where("nickName", "array-contains", nickName)
        //   )
        // );
        if (chars?.nickName)
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

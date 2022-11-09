import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app, db } from "../firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

export const useGetInfoUser = (uid?: string) => {
  const [userName, setUserName] = useState<string | null | undefined>(null);
  const [userUid, setUserUid] = useState<string | null | undefined>(null);
  const [photoURL, setPhotoURL] = useState<string | null | undefined>(null);
  const auth = getAuth(app);
  useEffect(() => {
    const getUserName = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUserName(currentUser?.displayName);
        setUserUid(currentUser?.uid);
        setPhotoURL(currentUser?.photoURL);
      });
    };
    getUserName();
  }, []);
  return {
    userName,
    userUid,
    photoURL,
  };
};
export const useGetCharCollection = () => {
  const [charsCollection, setcharsCollection] = useState<[]>([]);
  const getCharCollection = async (uid: string | undefined) => {
    if (uid) {
      const unsub = onSnapshot(doc(db, "users", uid), (doc) => {
        const chars = doc.data();
        setcharsCollection(chars?.nickName);
        return chars?.nickName;
      });
    }
  };
  return {
    charsCollection,
    getCharCollection,
  };
};

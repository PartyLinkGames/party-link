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
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const useDeleteCharTibia = () => {
  const deleteChar = async (
    uid: string | undefined,
    nickName: string | null
  ) => {
    if (uid) {
      const data = await getDoc(doc(db, "users", uid));
      updateDoc(doc(db, "users", uid), {
        nickName: arrayRemove(nickName),
      });
    }
  };
  return {
    deleteChar,
  };
};

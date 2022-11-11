import { async } from "@firebase/util";
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
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const useScheduleHunt = () => {
  const scheduleHunt = async (
    nickName: string | null,
    idHunt: string,
    date: string,
    hour: string
  ) => {
    const data = await getDoc(doc(db, "teste", idHunt));
    const hunt = data.data();
    try {
      setDoc(
        doc(db, "teste", idHunt),
        {
          marcacoes: {
            [date]: {
              [hour]: arrayUnion(nickName),
            },
          },
        },
        { merge: true }
      );
    } catch (error) {}
  };
  const joinInExistingHunt = (
    nickName: string | null,
    idHunt: string,
    date: string,
    hour?: string
  ) => {
    try {
      if (hour)
        setDoc(
          doc(db, "teste", idHunt),
          {
            marcacoes: {
              [date]: {
                [hour]: arrayUnion(nickName),
              },
            },
          },
          { merge: true }
        );
    } catch (error) {}
  };
  const deleteHuntMark = (
    nickName: string | null,
    idHunt: string,
    date: string,
    hour?: string
  ) => {
    try {
      if (hour)
        setDoc(
          doc(db, "teste", idHunt),
          {
            marcacoes: {
              [date]: {
                [hour]: arrayRemove(nickName),
              },
            },
          },
          { merge: true }
        );
    } catch (error) {}
  };
  return {
    scheduleHunt,
    joinInExistingHunt,
    deleteHuntMark,
  };
};

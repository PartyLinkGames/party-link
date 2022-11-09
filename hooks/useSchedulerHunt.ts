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
    nickName: string,
    idHunt: string,
    date: string,
    hour: string
  ) => {
    console.log(nickName, idHunt, date, hour);
    const data = await getDoc(doc(db, "teste", idHunt));
    const hunt = data.data();
    // console.log(hunt?.marcações);
    // if (hunt?.marcações)
    try {
      //   setDoc(
      //     doc(db, "teste", idHunt),
      //     {
      //       marcacoes: {
      //         [date]: {
      //           [hour]: arrayUnion(nickName),
      //         },
      //       },
      //     },
      //     { merge: true }
      //   );
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
      console.log("deuBOM");
    } catch (error) {
      console.log(error);
      console.log("deuRUIM");
    }
  };
  return {
    scheduleHunt,
  };
};

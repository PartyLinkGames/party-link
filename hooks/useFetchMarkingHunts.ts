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
  onSnapshot,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/config";

export const useFetchMarkingHunts = () => {
  const [markedHunt, setMarkedHunts] = useState<any>([]);
  const fetchMarkingHunts = async (idHunt: string, dateee?: string) => {
    const data = await getDoc(doc(db, "teste", idHunt));
    const hunt = data.data();
    let q = query(collection(db, "teste"));
    onSnapshot(q, (doc) => {
      setMarkedHunts([]);
      doc.docs.map((hunt) => {
        if (hunt.id === idHunt) {
          if (dateee) {
            const currentHunt = hunt.get("marcacoes");
            for (let i in currentHunt) {
              if (i === dateee) {
                Object.keys(currentHunt[i]).forEach((key) => {
                  setMarkedHunts((previousState: any) => [
                    ...previousState,
                    {
                      key: key,
                      chars: currentHunt[i][key],
                    },
                  ]);
                });
              }
            }
          }
        }
      });
    });
  };
  return {
    fetchMarkingHunts,
    markedHunt,
    setMarkedHunts,
  };
};

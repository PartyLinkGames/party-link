import { onSnapshot, query, collection } from "firebase/firestore";
import { use, useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useFetchHunts = () => {
  const [hunt, setHunts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean | null>(null);
  useEffect(() => {
    const fetchHunt = () => {
      const collectionRef = collection(db, "teste");
      let q = query(collectionRef);

      onSnapshot(q, (hunts) => {
        setHunts(
          hunts.docs.map((currentHunt: any) => ({
            ...currentHunt.data(),
          }))
        );
      });
    };
    fetchHunt();
  }, []);
  return {
    hunt,
  };
};

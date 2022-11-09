import { onSnapshot, query, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export interface iHunt {
  dungeon: iDungeon;
  image: string;
  id: string;
  isFavorite: string;
  isUpvoted: string;
  minLevel: number;
  maxLevel: number;
  maxProfitH: number;
  maxXpH: number;
  minProfitH: number;
  minXpH: number;
  status: string;
  teamSize: string;
  title: string;
  type: string;
  vocation: string;
  upvoteCount: number;
  user: object;
}

export interface iDungeon {
  accountStatus: string;
  id: number;
  title: string;
  type: string;
  city: object;
}

export const useFetchHunts = () => {
  const [hunt, setHunts] = useState<iHunt[]>([]);
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

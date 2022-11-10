import React, { useEffect, useState } from "react";

import { iDungeon, iHunt, useFetchHunts } from "../../hooks/useFetchHunts";

import { CardHunts } from "../modalCardHunts/cardHunts";

interface iClassName {
  name: string;
  level: number | null;
  isPlayer: boolean;
  setChoseHuntId: React.Dispatch<React.SetStateAction<string>>;
  handleOpenModalMarkingHunt: () => void;
}
export interface iHuntObjNew {
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
  idFB: string;
}
export default function HuntCard({
  name,
  level,
  isPlayer,
  setChoseHuntId,
  handleOpenModalMarkingHunt,
}: iClassName) {
  const [selectHunt, setSelectHunt] = useState<iHuntObjNew[]>([]);
  const [isHunt, setIsHunt] = useState<boolean>(false);

  const { hunt, ids } = useFetchHunts();

  useEffect(() => {
    const selectedHunt = () => {
      setSelectHunt([]);
      hunt.map((elem, index) => {
        if (ids) {
          const newObj = {
            dungeon: elem.dungeon,
            id: elem.id,
            image: elem.image,
            isFavorite: elem.isFavorite,
            isUpvoted: elem.isUpvoted,
            maxLevel: elem.maxLevel,
            maxProfitH: elem.maxProfitH,
            maxXpH: elem.maxXpH,
            minLevel: elem.minLevel,
            minProfitH: elem.minProfitH,
            minXpH: elem.minXpH,
            status: elem.status,
            teamSize: elem.teamSize,
            title: elem.title,
            type: elem.type,
            upvoteCount: elem.upvoteCount,
            user: elem.user,
            vocation: elem.vocation,
            idFB: ids[index],
          };

          if (isPlayer) {
            if (level) {
              if (newObj.minLevel <= level && newObj.maxLevel >= level) {
                setSelectHunt((previous) => [...previous, newObj]);
                setIsHunt(true);
              }
            }
          }
        }
      });
    };
    selectedHunt();
  }, [isPlayer, level]);

  return (
    <>
      {isHunt ? (
        <ul className={name}>
          {selectHunt.map((elem, index) => (
            <CardHunts
              data={elem}
              key={index}
              setChoseHuntId={setChoseHuntId}
              handleOpenModalMarkingHunt={handleOpenModalMarkingHunt}
            />
          ))}
        </ul>
      ) : null}
    </>
  );
}

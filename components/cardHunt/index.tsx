import React, { useEffect, useState } from "react";

import { iHunt, useFetchHunts } from "../../hooks/useFetchHunts";

import { CardHunts } from "../modalCardHunts/cardHunts";

interface iClassName {
  name: string;
  level: number | null;
  isPlayer: boolean;
}
export default function HuntCard({ name, level, isPlayer }: iClassName) {
  const [selectHunt, setSelectHunt] = useState<iHunt[]>([]);
  const [isHunt, setIsHunt] = useState<boolean>(false);


  const { hunt, ids } = useFetchHunts();
  console.log(ids);

  useEffect(() => {
    const selectedHunt = () => {
      setSelectHunt([]);
      hunt.map((elem) => {
        if (isPlayer) {
          if (level) {
            if (elem.minLevel <= level && elem.maxLevel >= level) {
              setSelectHunt((previous) => [...previous, elem]);
              setIsHunt(true);
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
            <CardHunts data={elem} key={index} />
          ))}
        </ul>
      ) : null}
    </>
  );
}

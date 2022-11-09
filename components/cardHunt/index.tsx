import React, { useEffect, useState } from "react";

import { iHunt, useFetchHunts } from "../../hooks/useFetchHunts";

import { CardHunts } from "../modalCardHunts/cardHunts";

interface iClassName {
  name: string;
  level: number | null;
}
export default function HuntCard({ name, level }: iClassName) {
  const [selectHunt, setSelectHunt] = useState<iHunt[]>([]);
  const [isHunt, setIsHunt] = useState<boolean>(false);

  const { hunt } = useFetchHunts();
  //   console.log(level);
  useEffect(() => {
    const selectedHunt = () => {
      hunt.map((elem) => {
        if (level) {
          if (elem.minLevel <= level && elem.maxLevel >= level) {
            setSelectHunt((previous) => [...previous, elem]);
            setIsHunt(true);
          }
        }
      });
    };
    selectedHunt();
  }, [level]);

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

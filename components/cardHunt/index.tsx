import React, { useEffect, useState } from "react";

import { iHunt, useFetchHunts } from "../../hooks/useFetchHunts";

import { CardHunts } from "../modalCardHunts/cardHunts";

interface iClassName {
  name: string;
}
export default function HuntCard({ name }: iClassName) {
  const [selectHunt, setSelectHunt] = useState<iHunt[]>([]);
  const [isHunt, setIsHunt] = useState<boolean>(false);

  const { hunt } = useFetchHunts();
  let level = 60;

  useEffect(() => {
    const selectedHunt = () => {
      hunt.map((elem) => {
        if (elem.minLevel <= level && elem.maxLevel >= level) {
          setSelectHunt((previous) => [...previous, elem]);
          setIsHunt(true);
        }
      });
    };
    selectedHunt();
  }, [hunt]);

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

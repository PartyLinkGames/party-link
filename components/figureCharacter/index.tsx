import React, { useEffect, useState } from "react";
import Image from "next/image";

//Paladin
import DarkPaladin from "../../assets/imgPaladin/Dark_Paladin.gif";
import PaladinApparition from "../../assets/imgPaladin/Paladin's_Apparition.gif";

//Druid
import DiabolicImp from "../../assets/imgDruid/Diabolic_Imp.gif";
import DruidFamiliar from "../../assets/imgDruid/Druid_Familiar.gif";
import AscendingFerumbras from "../../assets/imgDruid/Ascending_Ferumbras.gif";
import DeathPriestShargon from "../../assets/imgDruid/Death_Priest_Shargon.gif";
import DoctorPerhaps from "../../assets/imgDruid/Doctor_Perhaps.gif";
import DruidApparition from "../../assets/imgDruid/Druid's_Apparition.webp";
import EnergizedRagingMage from "../../assets/imgDruid/Energized_Raging_Mage.gif";
import Ferumbras from "../../assets/imgDruid/Ferumbras.gif";
import MadMage from "../../assets/imgDruid/Mad_Mage.gif";
import SorcererApparition from "../../assets/imgDruid/Sorcerer's_Apparition.webp";

//Knight
import BlackKnight from "../../assets/imgKnight/Black_Knight.webp";
import EclipseKnight from "../../assets/imgKnight/Eclipse_Knight.gif";
import FalconKnight from "../../assets/imgKnight/Falcon_Knight.webp";
import KnightFamiliar from "../../assets/imgKnight/Knight_Familiar.gif";
import LionKnight from "../../assets/imgKnight/Lion_Knight.gif";
import RenegadeKnight from "../../assets/imgKnight/Renegade_Knight.webp";

interface Props {
  charName: string;
  charVocation: string;
}

export function FigureCharacter({ charName, charVocation }: Props) {
  const paladinImages = [DarkPaladin, PaladinApparition];
  const magoImages = [
    DiabolicImp,
    DruidFamiliar,
    AscendingFerumbras,
    DeathPriestShargon,
    DoctorPerhaps,
    DruidApparition,
    EnergizedRagingMage,
    Ferumbras,
    MadMage,
    SorcererApparition,
  ];
  const knightImages = [
    BlackKnight,
    EclipseKnight,
    FalconKnight,
    KnightFamiliar,
    LionKnight,
    RenegadeKnight,
  ];

  const [img, setImage] = useState("" as any);

  useEffect(() => {
    let mago = ["sorcerer", "druid", "master sorcerer", "elder druid"];
    let knight = ["knight", "elite knight"];

    if (charVocation) {
      if (mago.includes(charVocation.toLowerCase())) {
        let indexMago = Math.floor(Math.random() * (magoImages.length - 1 - 0));
        setImage(magoImages[indexMago]);
      } else if (knight.includes(charVocation.toLowerCase())) {
        let indexMago = Math.floor(
          Math.random() * (paladinImages.length - 1 - 0)
        );
        setImage(paladinImages[indexMago]);
      } else {
        let indexMago = Math.floor(
          Math.random() * (knightImages.length - 1 - 0)
        );
        setImage(knightImages[indexMago]);
      }
    }
  }, [charName]);

  return (
    <figure className="relative h-full w-3/6">
      <Image
        src={img}
        alt={charName}
        className="absolute bottom-10 right-0 sm:right-3 rounded-sm"
      />
    </figure>
  );
}

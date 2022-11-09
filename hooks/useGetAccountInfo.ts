import { useState } from "react";
import { instance } from "../services/api";

export const useGetAccountInfo = () => {
  const [charName, setCharName] = useState<string | null>(null);
  const [charLevel, setCharLevel] = useState<number | null>(null);
  const [charVocation, setCharVocation] = useState<string | null>(null);
  const getAccountInfo = async (nickName: string) => {
    try {
      const response = await instance(`v3/character/${nickName}`);

      if (response.data.characters.character.name !== "") {
        setCharName(nickName);
        setCharLevel(response.data.characters.character.level);
        setCharVocation(response.data.characters.character.vocation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getAccountInfo,
    charName,
    charLevel,
    charVocation,
  };
};

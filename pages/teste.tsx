import React, { useEffect, useState } from "react";
import { useRegisterCharTibia } from "../hooks/useRegisterCharTibia";
// import {}
import { useFetchHunts } from "./../hooks/useFetchHunts";
type Props = {};

const teste = (props: Props) => {
  const { hunt } = useFetchHunts();
  const { currentUser, registerChar } = useRegisterCharTibia();
  const [nickName, setNickName] = useState("");
  const [date, setDte] = useState("");
  const handleSubmmit = (e: any) => {
    e.preventDefault();
    registerChar(currentUser.uid, nickName);
  };
  return (
    <>
      <form onSubmit={handleSubmmit}>
        <input
          type="text"
          placeholder="Digite o nome do char"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <button type="submit">Adicionar Char</button>
      </form>
    </>
  );
};

export default teste;

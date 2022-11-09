import React, { useEffect, useState } from "react";
import { useRegisterCharTibia } from "../hooks/useRegisterCharTibia";
// import {}
import { useFetchHunts } from "./../hooks/useFetchHunts";
import { useScheduleHunt } from "./../hooks/useSchedulerHunt";
type Props = {};

const teste = (props: Props) => {
  const { hunt } = useFetchHunts();
  const { currentUser, registerChar } = useRegisterCharTibia();
  const [nickName, setNickName] = useState("");


  const [hour, setHour] = useState("");
  const { scheduleHunt } = useScheduleHunt();
  const handleSubmmit = (e: any) => {
    e.preventDefault();
    scheduleHunt(nickName, "0fUKPCpezFkYrFipPv8P", date, hour);

  const [date, setDte] = useState("");
  const handleSubmmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser) {
      registerChar(currentUser.uid, nickName);
    }
  };
  // useEffect(() => {
  //   scheduleHunt("teste", "0fUKPCpezFkYrFipPv8P", "12/12/2022", "02:00");
  // }, []);
  return (
    <>
      <form onSubmit={handleSubmmit}>
        <input
          type="text"
          placeholder="Ditgite o nome do char"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <input type="date" onChange={(e) => setDate(e.target.value)} />
        <select name="" id="" onChange={(e) => setHour(e.target.value)}>
          <option value="00:00">00:00</option>
          <option value="02:00">02:00</option>
          <option value="04:00">04:00</option>
        </select>
        <button type="submit">Adcionar Char</button>
      </form>
    </>
  );
};

export default teste;

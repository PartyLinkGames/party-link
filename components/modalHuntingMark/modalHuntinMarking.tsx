import personImage from "../../assets/Bandit 1.png";
import Image from "next/image";
import { useContext, useState } from "react";
import HuntingHours from "../huntingHours";
import { ModalContext } from "../../contexts/ContextModal";
import { useFetchMarkingHunts } from "../../hooks/useFetchMarkingHunts";
import { useScheduleHunt } from "../../hooks/useSchedulerHunt";

interface iHuntingMarkingProps {
  choseHuntId: string;
  charName: string | null;
  charLevel: number | null;
  charVocation: string | null;
}
export default function HuntingMarking({
  choseHuntId,
  charName,
  charLevel,
  charVocation,
}: iHuntingMarkingProps) {
  const { modalHuntingMarkIsOpen, setModalHuntingMarkIsOpen } =
    useContext(ModalContext);
  const [row, setRow] = useState<number>(4);
  const [maxLenght, setMaxLength] = useState<number>(100);
  const [date, setDate] = useState<string>("");
  const [newHuntHours, setNewHuntHours] = useState<string>("");
  const { fetchMarkingHunts, markedHunt, setMarkedHunts } =
    useFetchMarkingHunts();
  const handleCloseModalHuntingMark = () => {
    setModalHuntingMarkIsOpen(false);
  };
  const { scheduleHunt } = useScheduleHunt();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMarkingHunts(choseHuntId, date);
  };
  const handleRegisterNewHunt = (e: React.FormEvent) => {
    e.preventDefault();
    fetchMarkingHunts(choseHuntId, date);
    scheduleHunt(charName, choseHuntId, date, newHuntHours);
  };
  return (
    <div
      className={
        modalHuntingMarkIsOpen
          ? "modal-contaneir opacity-100 pointer-events-auto "
          : "modal-contaneir2 opacity-0 pointer-events-none"
      }
    >
      <div
        className={
          modalHuntingMarkIsOpen
            ? "bg-gradient-to-r   from-primary-dark to-purple-800 via-[#2f0b4d] translate-y-0 rounded-md flex w-full max-w-[700px] h-[500px] flex-col gap-6 p-5 shadow-[0px_0px_10px_2px_#3f2972,0px_0px_40px_2px_#1e1b36]"
            : "modal-div-container translate-y-[-200%]"
        }
      >
        <div className="flex   items-center justify-between">
          <h2 className="leading-4 font-extrabold text-backGroundButton text-[14px]">
            Select a date:
          </h2>
          <h2 className="leading-4 font-extrabold text-backGroundButton text-[14px]">
            Select a hour:
          </h2>
          <button
            className="w-[70px] h-[20px] rounded-lg bg-backGroundButton text-center font-bold text-[13px]"
            onClick={() => {
              setMarkedHunts([]);
              handleCloseModalHuntingMark();
            }}
          >
            {" "}
            Close{" "}
          </button>
        </div>
        <div className="flex gap-10 h-[100px] md:h-[40px]">
          <form
            className="flex  gap-1 w-[30%] items-start h-[40px] flex-col"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col  md:flex-row gap-2">
              <input
                className="bg-gray-300 rounded-md h-[40px] font-bold   text-md text-center"
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />

              <button
                className="w-[90px] h-[40px] rounded-lg bg-backGroundButton text-center font-bold text-[13px]"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
          <form
            className="flex flex-col md:flex-row gap-1  h-[full] items-start"
            onSubmit={handleRegisterNewHunt}
          >
            <div className="flex  md:px-5 items-center ">
              <select
                required
                name=""
                id=""
                className="bg-gray-300 w-[90px] h-[40px] font-bold  rounded-md text-md text-center "
                onChange={(e) => setNewHuntHours(e.target.value)}
              >
                <option value="00:00">00:00</option>
                <option value="02:00">02:00</option>
                <option value="04:00">04:00</option>
                <option value="06:00">06:00</option>
                <option value="08:00">08:00</option>
                <option value="10:00">10:00</option>
                <option value="12:00">12:00</option>
                <option value="14:00">14:00</option>
                <option value="16:00">16:00</option>
                <option value="18:00">18:00</option>
                <option value="20:00">20:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>
            <button
              className="w-16 h-10 rounded-lg bg-backGroundButton text-center font-bold text-[13px]"
              type="submit"
            >
              Gerar Horário
            </button>
          </form>
        </div>
        <ul className="py-2 rounded-md px-5 max-w-max w-full  flex flex-col gap-2">
          {markedHunt?.map((hourHunt: any) => {
            return (
              <HuntingHours
                hour={hourHunt.key}
                team={hourHunt.chars}
                charName={charName}
                charLevel={charLevel}
                charVocation={charVocation}
                choseHuntId={choseHuntId}
                date={date}
                newHuntHours={newHuntHours}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

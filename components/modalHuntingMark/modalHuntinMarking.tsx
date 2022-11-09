import personImage from "../../assets/Bandit 1.png";
import Image from "next/image";
import { useState } from "react";
import HuntingHours from "../huntingHours";

export default function HuntingMarking() {
  const [row, setRow] = useState<number>(4);
  const [maxLenght, setMaxLength] = useState<number>(100);
  return (
    <div className="modal-contaneir opacity-100 pointer-events-auto ">
      <div className="  bg-gradient-to-r from-primary-dark to-purple-800 via-[#2f0b4d] rounded-md flex w-[700px] h-[500px] flex-col gap-6 p-5 shadow-[0px_0px_10px_2px_#3f2972,0px_0px_40px_2px_#1e1b36]">
        <div className="flex px-5 items-center justify-between">
          <h2 className="leading-4 font-extrabold text-backGroundButton text-[14px]">
            Select a date:
          </h2>
          <button className="w-[70px] h-[20px] rounded-lg bg-backGroundButton text-center font-bold text-[13px]">
            {" "}
            Close{" "}
          </button>
        </div>
        <form className="flex px-5 gap-1 w-[30%] items-start flex-col">
          <div className="flex gap-2">
            <input
              className="bg-gray-300 rounded-md text-md text-center"
              type="date"
            />

            <button className="w-[70px] h-[20px] rounded-lg bg-backGroundButton text-center font-bold text-[13px]">
              Search
            </button>
          </div>
        </form>
        <ul className="  py-2 rounded-md px-5 max-w-full overflow-y-auto flex flex-col gap-2">
          <HuntingHours />
          <HuntingHours />
          <HuntingHours />
          <HuntingHours />
          <HuntingHours />
          <HuntingHours />
          <HuntingHours />
          <HuntingHours />
          <HuntingHours />
        </ul>
      </div>
    </div>
  );
}

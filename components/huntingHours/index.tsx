import Image from "next/image";
import personImage from "../../assets/Bandit 1.png";
import CardPlayerOnHunt from "../cardPlayerHunt";

export default function HuntingHours() {
  return (
    <li className="p-2 flex flex-col   rounded-md gap-4 border   shadow-[0px_0px_6px_2px_#4a3086,0px_0px_15px_0px_#1e1b36]">
      <h3 className="leading-4 font-extrabold text-[14px] text-yellow-400 ">
        Horario da hunt: 12:00 / 14:00
      </h3>
      <div className="flex justify-around">
        <CardPlayerOnHunt />
        <button className=" shadow-[0px_0px_6px_2px_#565f03,0px_0px_15px_0px_#02221a]  hover:shadow-[0px_0px_6px_2px_#9aaa05,0px_0px_15px_0px_#85bb08] w-[125px] max-h-[150px] bg-gradient-to-tr text-opacity-[0.5] hover:text-opacity-[100] text-yellow-300 font-extrabold from-[#0a316bc5] via-[#29096688] to-[#1a4e9196] rounded-md">
          join
        </button>
        <button className=" shadow-[0px_0px_6px_2px_#565f03,0px_0px_15px_0px_#02221a]  hover:shadow-[0px_0px_6px_2px_#9aaa05,0px_0px_15px_0px_#85bb08] w-[125px] max-h-[150px] bg-gradient-to-tr text-opacity-[0.5] hover:text-opacity-[100] text-yellow-300 font-extrabold from-[#0a316bc5] via-[#29096688] to-[#1a4e9196] rounded-md">
          join
        </button>
        <button className=" shadow-[0px_0px_6px_2px_#565f03,0px_0px_15px_0px_#02221a] hover:shadow-[0px_0px_6px_2px_#9aaa05,0px_0px_15px_0px_#85bb08] w-[125px] max-h-[150px] bg-gradient-to-tr text-opacity-[0.5] hover:text-opacity-[100] text-yellow-300 opacity-[] font-extrabold from-[#0a316bc5] via-[#29096688] to-[#1a4e9196] rounded-md">
          join
        </button>
      </div>
    </li>
  );
}

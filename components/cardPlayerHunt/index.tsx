import Image from "next/image";
import personImage from "../../assets/Bandit 1.png";
import { useScheduleHunt } from "../../hooks/useSchedulerHunt";
interface iCardPlayerOnHuntProps {
  char: string;
  charName: string | null;
  choseHuntId: string;
  date: string;
  hour?: string;
  charLevel: number | null;
  charVocation: string | null;
}
export default function CardPlayerOnHunt({
  char,
  charName,
  choseHuntId,
  date,
  hour,
  charLevel,
  charVocation,
}: iCardPlayerOnHuntProps) {
  const { deleteHuntMark } = useScheduleHunt();
  const handleDeleteHunt = () => {
    deleteHuntMark(charName, choseHuntId, date, hour);
  };
  return (
    <div
      className="w-[125px] max-h-[150px] min-w-[125px]  rounded-md shadow-[0px_0px_6px_2px_#3b1064,0px_0px_15px_0px_#02221a]  hover:shadow-[0px_0px_6px_2px_#9aaa05,0px_0px_15px_0px_#85bb08] overflow-y-auto bg-gradient-to-tr from-[#0a316bc5] via-[#29096688] to-[#1a4e9196] 
      "
    >
      <div className="flex p-2 gap-1 rounded-md flex-col  ">
        <div className="flex flex-col gap-2 ">
          <p className="leading-4 font-bold text-[13px] text-yellow-400 ">
            {char}
          </p>
        </div>
        <div className="flex items-center justify-center"></div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-2">
            <p className="leading-4 font-bold text-[13px] text-yellow-400  ">
              Level:157
            </p>
            <p className="leading-4 font-bold text-[15px] text-yellow-400 ">
              Druid
            </p>
          </div>
          <Image
            className=" self-center pb-2 w-12 h-12"
            src={personImage}
            alt=""
          />
        </div>
        {char === charName ? (
          <button
            className=" bg-backGroundButton opacity-[0.5] hover:opacity-[100] w-20 rounded-md text-sm font-bold self-center text-black"
            onClick={handleDeleteHunt}
          >
            {" "}
            Exit
          </button>
        ) : null}
      </div>
    </div>
  );
}

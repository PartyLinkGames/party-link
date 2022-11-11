import Image from "next/image";
import personImage from "../../assets/Bandit 1.png";
import { useScheduleHunt } from "../../hooks/useSchedulerHunt";
import CardPlayerOnHunt from "../cardPlayerHunt";
interface iHoutingHoursProps {
  hour?: string;
  team?: Array<object>;
  charName: string | null;
  charLevel: number | null;
  charVocation: string | null;
  choseHuntId: string;
  date: string;
  newHuntHours: string;
}
export default function HuntingHours({
  hour,
  team,
  charName,
  charLevel,
  charVocation,
  choseHuntId,
  date,
  newHuntHours,
}: iHoutingHoursProps) {
  const { joinInExistingHunt } = useScheduleHunt();
  const handleJoinInHunt = () => {
    joinInExistingHunt(charName, choseHuntId, date, hour);
  };

  return (
    <li className="p-2 w-full  flex flex-col rounded-md gap-4 border   shadow-[0px_0px_6px_2px_#4a3086,0px_0px_15px_0px_#1e1b36]">
      <h3 className="leading-4 font-extrabold text-[14px] text-yellow-400 ">
        Horario de inicio da hunt: {hour}
      </h3>
      <div className="gap-4 py-2  sm:py-2 sm:gap-4 w-full max-w-max overflow-x-auto px-2 flex sm:justify-around">
        {team?.map((char: any) => {
          return (
            <CardPlayerOnHunt
              char={char}
              charName={charName}
              choseHuntId={choseHuntId}
              date={date}
              hour={hour}
              charLevel={charLevel}
              charVocation={charVocation}
            />
          );
        })}
        {team && team.length <= 3 ? (
          <button
            className=" shadow-[0px_0px_6px_2px_#565f03,0px_0px_15px_0px_#02221a] min-w-[125px]  hover:shadow-[0px_0px_6px_2px_#9aaa05,0px_0px_15px_0px_#85bb08] w-[125px] max-h-[150px] bg-gradient-to-tr text-opacity-[0.5] hover:text-opacity-[100] text-yellow-300 font-extrabold from-[#0a316bc5] via-[#29096688] to-[#1a4e9196] rounded-md"
            onClick={handleJoinInHunt}
          >
            join
          </button>
        ) : null}
      </div>
    </li>
  );
}

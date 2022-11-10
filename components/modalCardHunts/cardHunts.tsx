import Image from "next/image";
import { useFetchMarkingHunts } from "../../hooks/useFetchMarkingHunts";

import { iHuntObjNew } from "../cardHunt";

interface iCardHunts {
  data: iHuntObjNew;
  setChoseHuntId: any;
  handleOpenModalMarkingHunt: any;
}

export function CardHunts({
  data,
  setChoseHuntId,
  handleOpenModalMarkingHunt,
}: iCardHunts) {
  const { fetchMarkingHunts } = useFetchMarkingHunts();
  return (
    <li className="bg-gradient-to-b from-backGroundGradient1 to-backGroundGradient2 translate-[z-0] rounded-lg list-none hover:scale-[1.02] max-w-[330px]  md:transform-none ease-in-out duration-200 ">
      <Image
        className="rounded-t-lg w-max"
        width={330}
        height={330}
        alt={data.dungeon.title}
        loader={() => data.image}
        unoptimized={true}
        src={data.image}
      />
      <div className="px-2 py-4">
        <div>
          <h2 className="font-extrabold text-headline3 leading-[16.41px] text-white">
            {data.dungeon.title}
          </h2>
          <span className="text-[10px] leading-[11.72px] font-bold text-gray-300">
            {data.vocation == "mage"
              ? "🧙"
              : data.vocation == "paladin"
              ? "🏹"
              : "⚔️"}
            {data.vocation == "no_vocation" ? "All Vocation" : data.vocation} •
            {data.title == null ? data.dungeon.title : data.title}
          </span>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-3 pt-4">
            <h3 className="font-extrabold text-headline leading-[14.06px] text-gray-300">
              Recommended level:
              <span className="text-green-400">
                {data.minLevel} to {data.maxLevel}
              </span>
            </h3>
            <h3 className="font-extrabold text-headline leading-[14.06px] text-gray-300">
              Estimated XP/H:
              <span className="text-green-400">
                {data.minXpH} to {data.maxXpH}
              </span>
            </h3>
            <h3 className="font-extrabold text-headline leading-[14.06px] text-gray-300">
              Profit:
              <span className="text-green-400">
                {data.minProfitH} to {data.maxProfitH}
              </span>
            </h3>
          </div>
          <button
            className="self-end bg-backGroundButton h-[28px] w-[89px] rounded-lg font-bold text-[13px] hover:bg-opacity-[0.9]"
            id={data.idFB}
            onClick={(e: any) => {
              handleOpenModalMarkingHunt();
              fetchMarkingHunts(e.target.id);
              setChoseHuntId(e.target.id);
            }}
          >
            More info
          </button>
        </div>
      </div>
    </li>
  );
}

import Image from "next/image";
import imgHuntExample from "../../assets/imageHuntExample.png";

export default function cardHunts() {
  return (
    <li className="bg-gradient-to-b from-backGroundGradient1 to-backGroundGradient2 translate-[z-0] rounded-lg list-none hover:scale-[1.02]  md:transform-none ease-in-out duration-200 ">
      <Image className="rounded-t-lg" alt="" src={imgHuntExample} />
      <div className="px-2 py-4">
        <div>
          <h2 className="font-extrabold text-headline3 leading-[16.41px] text-white">
            Gnome Deep Hub
          </h2>
          <span className="text-[10px] leading-[11.72px] font-bold text-gray-300">
            🧙 Mages • Ravenous Lava Lurkers + Avalanches
          </span>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-3 pt-4">
            <h3 className="font-extrabold text-headline leading-[14.06px] text-gray-300">
              Recommended level:{" "}
              <span className="text-green-400">100 to 300</span>
            </h3>
            <h3 className="font-extrabold text-headline leading-[14.06px] text-gray-300">
              Estimated XP/H:{" "}
              <span className="text-green-400">1kk to 2.5kk</span>
            </h3>
            <h3 className="font-extrabold text-headline leading-[14.06px] text-gray-300">
              Profit: <span className="text-green-400"> -300k to -150k</span>
            </h3>
          </div>
          <button className="self-end bg-backGroundButton h-[28px] w-[89px] rounded-lg font-bold text-[13px] hover:bg-opacity-[0.9] ">
            {" "}
            More info
          </button>
        </div>
      </div>
    </li>
  );
}

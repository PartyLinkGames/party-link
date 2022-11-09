import Image from "next/image";
import image from "../../assets/imageTeste.svg";

export function CardsTeamTibia({}) {
  return (
    <li className="w-full max-w-xs  col-center pb-7 sm:pb-0 ">
      <figure className="w-full overflow-hidden flex justify-center rounded-t-xl">
        <Image src={image} alt="Gnome Deep Hub" className="w-full" />
      </figure>
      <div className="py-4 px-3 flex flex-col bg-white rounded-b-xl">
        <div className="flex flex-col gap-3">
          <h3>Gnome Deep Hub</h3>
          <p className="card-info">
            Mages • Ravenous Lava Lurkers + Avalanches
          </p>
          <p className="card-p-data">
            Recommended Level:{" "}
            <span className="card-span-data">100 to 300</span>
          </p>
          <p className="card-p-data">
            Estimated XP/h: <span className="card-span-data">100 to 300</span>
          </p>
          <div className="flex items-center justify-between">
            <p className="card-p-data">
              Profit: <span className="card-span-data">100 to 300</span>
            </p>
            <button className="bg-yellow-400 max-w-[108px] w-[40%] h-9 rounded-xl font-bold">
              Set a date
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

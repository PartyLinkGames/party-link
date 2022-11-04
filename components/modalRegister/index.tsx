import Image from "next/image";
import MonsterIcon from "../../assets/Monster Icon.svg";
import { AiOutlineMail } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { VscLock } from "react-icons/vsc";

export default function ModalRegister() {
  return (
    <div className="h-screen w-full bg-colors-background-color-cloudy fixed z-1">
      <div className="flex flex-col items-cente/ max-w-sm z-10 m-auto text-white mt-52 bg-colors-primary-dark rounded-3xl">
        <span className="text-end mr-4 mt-4 relative">X</span>
        <div className="content flex flex-col items-center gap-3.5">
          <Image alt="monster icon" src={MonsterIcon} />

          <h1 className="text-yellow-400 font-extrabold text-xl leading-6">
            Create Your account
          </h1>

          <form action="" className="flex flex-col gap-4 w-4/5">
            <label htmlFor="email">Your email :</label>
            <div className=" flex bg-colors-primary-ligth rounded-lg pl-2.5">
              <AiOutlineMail className="w-6 h-8" />
              <input
                type="email"
                className="w-full h-8 bg-colors-primary-ligth outline-0 rounded-lg pr-px pl-1"
              />
            </div>

            <label htmlFor="name">Your name :</label>
            <div className=" flex bg-colors-primary-ligth rounded-lg pl-2.5">
              <IoPersonOutline className="w-6 h-8" />
              <input
                type="text"
                className="w-full h-8 bg-colors-primary-ligth outline-0 rounded-lg pr-px pl-1"
              />
            </div>

            <label htmlFor="password">Your password :</label>
            <div className=" flex bg-colors-primary-ligth rounded-lg pl-2.5">
              <VscLock className="w-6 h-8" />
              <input
                type="password"
                className="w-full h-8 bg-colors-primary-ligth outline-0 rounded-lg pr-px pl-1"
              />
            </div>

            <label htmlFor="confirmPassword">Confirm password : </label>
            <div className=" flex bg-colors-primary-ligth rounded-lg pl-2.5">
              <VscLock className="w-6 h-8" />
              <input
                type="password"
                className="w-full h-8 bg-colors-primary-ligth outline-0 rounded-lg pr-px pl-1"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 w-full h-8 rounded-2xl font-bold text-xl max-w-[350px] text-black mb-7 mt-2"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

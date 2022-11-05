import MonsterIcon from "../../assets/Monster Icon.svg";
import checkIcon from "../../assets/Check Icon.svg";
import Image from "next/image";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineMail } from "react-icons/ai";
import { VscLock } from "react-icons/vsc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ILogin } from "./interface";

export default function ModalLogin() {
  const [check, setCheck] = useState<boolean>(false);

  const schema = yup.object({
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Required field"),
    password: yup
      .string()
      .min(6, "Password must contain at least 6 characters")
      .required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });

  function toRememberFunction(event: React.SyntheticEvent) {
    event.preventDefault();
    if (check) {
      setCheck(false);
    } else setCheck(true);
  }

  function onSubmitFunctionLogin(data: ILogin) {
    console.log(data);
  }

  return (
    <div className="h-screen w-full bg-colors-background-color-cloudy fixed z-1 flex px-5 justify-center items-center">
      <div className="flex flex-col items-cente/ max-w-lg w-full z-10  text-white m-auto bg-colors-primary-dark rounded-3xl pb-10">
        <div className="flex items-center justify-center flex-col mt-4">
          <Image alt="monster icon" src={MonsterIcon} />
          <h1 className="sm:flex sm:h-12 text-4xl logo mt-10">PartyLink</h1>
          <span className="text-headline leading-4 text-gray-400 ">
            Log and start using
          </span>
        </div>
        <form
          action=""
          className="flex flex-col items-center m-auto gap-3 mt-5"
          onSubmit={handleSubmit(onSubmitFunctionLogin)}
        >
          <label
            className="self-start text-headline3 font-bold leading-[17.58px]"
            htmlFor="email"
          >
            E-mail adress:
          </label>
          <div className=" flex bg-colors-primary-ligth rounded-lg pl-2.5">
            <AiOutlineMail className="w-6 h-8" />
            <input
              className="w-full h-8 bg-colors-primary-ligth outline-0 rounded-lg pr-px pl-1"
              type={"text"}
              {...register("email")}
            />
          </div>
          <span className="font-normal text-[9.5px]">
            {" "}
            {errors.email?.message}
            {""}
          </span>
          <label
            className="self-start text-headline3 font-bold leading-[17.58px]"
            htmlFor="password"
          >
            Your password:
          </label>
          <div className=" flex bg-colors-primary-ligth rounded-lg pl-2.5">
            <VscLock className="w-6 h-8" />
            <input
              className="w-full h-8 bg-colors-primary-ligth outline-0 rounded-lg pr-px pl-1"
              type={"password"}
              {...register("password")}
            />
          </div>
          <span className="font-normal text-[9.5px]">
            {" "}
            {errors.password?.message}{" "}
          </span>
          <label
            className="w-[25px] h-[21px] bg-colors-primary-ligth rounded-lg flex gap- 10 itens-center self-start align-middle "
            htmlFor=""
          >
            <button
              className="w-full flex items-center justify-center"
              onClick={toRememberFunction}
            >
              {" "}
              {check ? <Image alt="monster icon" src={checkIcon} /> : ""}{" "}
            </button>{" "}
            <span className="absolute ml-10  text-sm">Remember me</span>
          </label>
          <button
            type="submit"
            className="bg-yellow-400 w-full h-8 rounded-2xl font-bold text-xl max-w-[350px] text-black mb-7 mt-2"
          >
            {" "}
            login{" "}
          </button>
        </form>
        <div className="flex items-center justify-center flex-col gap-4">
          <button className="text-headline text-colors-textPrimary underline cursor-pointer">
            Forgot your password?
          </button>
          <span className="text-headline text-colors-textPrimary ">
            Dont have an account?{" "}
            <button className="text-headline text-colors-textPrimary underline cursor-pointer">
              Create your own!
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

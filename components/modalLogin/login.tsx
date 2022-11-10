import MonsterIcon from "../../assets/MonsterIcon.svg";
import checkIcon from "../../assets/Check Icon.svg";
import Image from "next/image";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

import { AiOutlineMail } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { VscLock } from "react-icons/vsc";
import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { ILogin } from "./interface";
import { ModalContext } from "../../contexts/ContextModal";
import { useAuthentication } from "../../hooks/useAuthentication";

export default function ModalLogin() {
  const { modalLoginIsOpen, setModalLoginIsOpen } = useContext(ModalContext);
  const [check, setCheck] = useState<boolean>(false);
  const { loginUser } = useAuthentication();
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
    loginUser(data);
  }

  const handleModalClose = () => {
    setModalLoginIsOpen(false);
  };

  return (
    <div
      className={
        modalLoginIsOpen
          ? "modal-contaneir opacity-100 pointer-events-auto bg-background-color-cloudy"
          : "modal-contaneir opacity-0 pointer-events-none"
      }
    >
      <div
        className={
          modalLoginIsOpen
            ? "modal-div-container translate-y-0"
            : "modal-div-container translate-y-[-200%]"
        }
      >
        <button
          className="text-end mr-4 mt-4 absolute right-2 text-2xl cursor-pointer"
          onClick={handleModalClose}
        >
          <IoClose />
        </button>
        <div className="flex items-center justify-center flex-col mt-4">
          <Image alt="monster icon" src={MonsterIcon} />
          <h1 className="sm:flex sm:h-12 text-4xl logo mt-10">PartyLink</h1>
          <span className="text-headline leading-4 text-gray-400 ">
            Log and start using
          </span>
        </div>
        <form
          className="flex flex-col w-[80%] gap-3 mt-5"
          onSubmit={handleSubmit(onSubmitFunctionLogin)}
        >
          <label htmlFor="email">E-mail adress:</label>
          <div className="modal-form-div-input">
            <AiOutlineMail className="w-6 h-8" />
            <input
              className="modal-form-input"
              type={"text"}
              {...register("email")}
            />
          </div>
          <p className="form_mensage_alert">
            {" "}
            {errors.email?.message}
            {""}
          </p>
          <label className="mt-2" htmlFor="password">
            Your password:
          </label>
          <div className="modal-form-div-input">
            <VscLock className="w-6 h-8" />
            <input
              className="modal-form-input"
              type={"password"}
              {...register("password")}
            />
          </div>
          <span className="font-normal text-[9.5px]">
            {errors.password?.message}
          </span>
          {/* <label
            className="w-[25px] h-[21px] bg-primary-ligth rounded-lg flex gap- 10 itens-center self-start align-middle"
            htmlFor=""
          >
            <button
              className="w-full flex items-center justify-center border-indigo-500/0 hover:border-yellow-400/100 border-[2px] border-solid rounded-lg"
              onClick={toRememberFunction}
            >
              {check ? <Image alt="monster icon" src={checkIcon} /> : ""}
            </button>
            <span className="absolute ml-10  text-sm">Remember me</span>
          </label> */}
          <button type="submit" className="btn-yellow mb-8 mt-2">
            Login
          </button>
        </form>
        <div className="flex items-center justify-center flex-col gap-4">
          <button className="text-[14px] text-textPrimary underline cursor-pointer">
            Forgot your password?
          </button>
          <span className="text-sm text-textPrimary text-center">
            Dont have an account?{" "}
            <button className="text-sm text-textPrimary underline cursor-pointer">
              Create your own!
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

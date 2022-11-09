import Image from "next/image";
import MonsterIcon from "../../assets/MonsterIcon.svg";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AiOutlineMail } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { VscLock } from "react-icons/vsc";
import { useContext, useRef } from "react";
import { ModalContext } from "../../contexts/ContextModal";
import { useAuthentication } from "../../hooks/useAuthentication";
export interface iRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function ModalRegister() {
  const { modalRegisterIsOpen, setModalRegisterIsOpen } =
    useContext(ModalContext);
  const { createUser, loading } = useAuthentication();
  const handleModalClose = () => {
    setModalRegisterIsOpen(false);
  };
  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("It has to be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password needs at least 6 digits")
      .required("Password  is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Both passwords must be the same"),
  });

  function registerUser(data: iRegisterForm) {
    createUser(data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterForm>({
    resolver: yupResolver(schema),
  });

  return (
    <div
      className="h-screen w-full bg-background-color-cloudy px-5 flex fixed z-20"
      style={{
        transition: "0.5s",
        opacity: modalRegisterIsOpen ? "1" : "0",
        pointerEvents: modalRegisterIsOpen ? "all" : "none",
      }}
    >
      <div
        className="flex flex-col w-full max-w-sm z-10 m-auto text-white bg-primary-dark rounded-3xl"
        style={{
          transition: "0.5s ease-in-out",
          transform: modalRegisterIsOpen
            ? "translateY(0%)"
            : "translateY(-200%)",
        }}
      >
        <span
          className="text-end mr-4 mt-4 relative cursor-pointer"
          onClick={handleModalClose}
        >
          X
        </span>
        <div className="content flex flex-col items-center gap-3.5">
          <Image alt="monster icon" src={MonsterIcon} />

          <h1 className="text-yellow-400 font-extrabold text-xl leading-6">
            Create Your account
          </h1>

          <form
            action=""
            className="flex flex-col gap-4 w-4/5"
            onSubmit={handleSubmit(registerUser)}
          >
            <label htmlFor="email">Your email :</label>
            <div className=" flex bg-primary-ligth rounded-lg pl-2.5">
              <AiOutlineMail className="w-6 h-8" />
              <input
                type="email"
                className="w-full h-8 bg-primary-ligth outline-0 rounded-lg pr-px pl-1"
                {...register("email")}
              />
            </div>
            <span className="text-rose-600 font-bold text-base">
              {errors.email?.message}
            </span>

            <label htmlFor="name">Your name :</label>
            <div className=" flex bg-primary-ligth rounded-lg pl-2.5">
              <IoPersonOutline className="w-6 h-8" />
              <input
                type="text"
                className="w-full h-8 bg-primary-ligth outline-0 rounded-lg pr-px pl-1"
                {...register("name")}
              />
            </div>
            <span className="text-rose-600 font-bold text-base">
              {errors.name?.message}
            </span>

            <label htmlFor="password">Your password :</label>
            <div className=" flex bg-primary-ligth rounded-lg pl-2.5">
              <VscLock className="w-6 h-8" />
              <input
                type="password"
                className="w-full h-8 bg-primary-ligth outline-0 rounded-lg pr-px pl-1"
                {...register("password")}
              />
            </div>
            <span className="text-rose-600 font-bold text-base">
              {errors.password?.message}
            </span>

            <label htmlFor="confirmPassword">Confirm password : </label>
            <div className=" flex bg-primary-ligth rounded-lg pl-2.5">
              <VscLock className="w-6 h-8" />
              <input
                type="password"
                className="w-full h-8 bg-primary-ligth outline-0 rounded-lg pr-px pl-1"
                {...register("confirmPassword")}
              />
            </div>
            <span className="text-rose-600 font-bold text-base">
              {errors.confirmPassword?.message}
            </span>
            {loading && (
              <button
                type="submit"
                className="bg-primary-ligth w-full h-8 rounded-2xl font-bold text-xl max-w-[350px] text-black mb-7 mt-2"
                disabled
              >
                Registering...
              </button>
            )}
            {!loading && (
              <button
                type="submit"
                className="bg-yellow-400 w-full h-8 rounded-2xl font-bold text-xl max-w-[350px] text-black mb-7 mt-2"
              >
                Register
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import MonsterIcon from "../../assets/Monster Icon.svg";

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
  const { createUser } = useAuthentication();
  const handleModalClose = () => {
    setModalRegisterIsOpen(false);
  };
  const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Tem que ser um email válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha precisa de no minimo 6 digitos")
      .required("Senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Ambas as senhas tem que ser iguais"),
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
      className="h-screen w-full bg-colors-background-color-cloudy fixed z-1"
      style={{
        transition: "0.5s",
        opacity: modalRegisterIsOpen ? "1" : "0",
        pointerEvents: modalRegisterIsOpen ? "all" : "none",
      }}
    >
      <div
        className="flex flex-col items-cente/ max-w-sm z-10 m-auto text-white mt-52 bg-colors-primary-dark rounded-3xl"
        style={{
          transition: "0.5s ease-in-out",
          transform: modalRegisterIsOpen
            ? "translateY(-20%)"
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
            <div className=" flex bg-colors-primary-ligth rounded-lg pl-2.5">
              <AiOutlineMail className="w-6 h-8" />
              <input
                type="email"
                className="w-full h-8 bg-colors-primary-ligth outline-0 rounded-lg pr-px pl-1"
                {...register("email")}
              />
            </div>
            <span className="text-rose-600 font-bold text-base">
              {errors.email?.message}
            </span>

            <label htmlFor="name">Your name :</label>
            <div className=" flex bg-colors-primary-ligth rounded-lg pl-2.5">
              <IoPersonOutline className="w-6 h-8" />
              <input
                type="text"
                className="w-full h-8 bg-colors-primary-ligth outline-0 rounded-lg pr-px pl-1"
                {...register("name")}
              />
            </div>
            <span className="text-rose-600 font-bold text-base">
              {errors.name?.message}
            </span>

            <label htmlFor="password">Your password :</label>
            <div className=" flex bg-colors-primary-ligth rounded-lg pl-2.5">
              <VscLock className="w-6 h-8" />
              <input
                type="password"
                className="w-full h-8 bg-colors-primary-ligth outline-0 rounded-lg pr-px pl-1"
                {...register("password")}
              />
            </div>
            <span className="text-rose-600 font-bold text-base">
              {errors.password?.message}
            </span>

            <label htmlFor="confirmPassword">Confirm password : </label>
            <div className=" flex bg-colors-primary-ligth rounded-lg pl-2.5">
              <VscLock className="w-6 h-8" />
              <input
                type="password"
                className="w-full h-8 bg-colors-primary-ligth outline-0 rounded-lg pr-px pl-1"
                {...register("confirmPassword")}
              />
            </div>
            <span className="text-rose-600 font-bold text-base">
              {errors.confirmPassword?.message}
            </span>

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

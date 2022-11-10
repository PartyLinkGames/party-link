import Image from "next/image";
import MonsterIcon from "../../assets/MonsterIcon.svg";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AiOutlineMail } from "react-icons/ai";
import { IoPersonOutline, IoClose } from "react-icons/io5";

import { VscLock } from "react-icons/vsc";
import { useContext } from "react";
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
      className={
        modalRegisterIsOpen
          ? "modal-contaneir opacity-100 pointer-events-auto bg-background-color-cloudy"
          : "modal-contaneir opacity-0 pointer-events-none"
      }
    >
      <div
        className={
          modalRegisterIsOpen
            ? "modal-div-container  translate-y-0"
            : "modal-div-container translate-y-[-200%]"
        }
      >
        <button
          className="text-end mr-4 mt-4 absolute right-2 text-2xl cursor-pointer"
          onClick={handleModalClose}
        >
          <IoClose />
        </button>
        <div className="content flex flex-col items-center gap-3.5 w-full h-full pt-3">
          <Image alt="monster icon" src={MonsterIcon} />

          <h1 className="text-yellow-400 font-extrabold text-xl leading-6">
            Create Your account
          </h1>

          <form
            action=""
            className="flex flex-col gap-4 w-4/5"
            onSubmit={handleSubmit(registerUser)}
          >
            <label htmlFor="email" className="mt-5">
              Your email :
            </label>
            <div className=" flex bg-primary-ligth rounded-lg pl-2.5">
              <AiOutlineMail className="w-6 h-8" />
              <input
                type="email"
                className="modal-form-input"
                {...register("email")}
              />
            </div>
            <p className="form_mensage_alert">{errors.email?.message}</p>

            <label htmlFor="name">Your name :</label>
            <div className=" flex bg-primary-ligth rounded-lg pl-2.5">
              <IoPersonOutline className="w-6 h-8" />
              <input
                type="text"
                className="modal-form-input"
                {...register("name")}
              />
            </div>
            <p className="form_mensage_alert">{errors.name?.message}</p>

            <label htmlFor="password">Your password :</label>
            <div className=" flex bg-primary-ligth rounded-lg pl-2.5">
              <VscLock className="w-6 h-8" />
              <input
                type="password"
                className="modal-form-input"
                {...register("password")}
              />
            </div>
            <p className="form_mensage_alert">{errors.password?.message}</p>

            <label htmlFor="confirmPassword">Confirm password : </label>
            <div className=" flex bg-primary-ligth rounded-lg pl-2.5">
              <VscLock className="w-6 h-8" />
              <input
                type="password"
                className="modal-form-input"
                {...register("confirmPassword")}
              />
            </div>
            <p className="form_mensage_alert">
              {errors.confirmPassword?.message}
            </p>
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
              <button type="submit" className="btn-yellow">
                Register
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

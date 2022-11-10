import React, { useContext, useEffect } from "react";

import { useForm } from "react-hook-form";

import { IoHome, IoClose } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaWalking, FaBars } from "react-icons/fa";
import { BsFillPersonFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import imageProfile from "../../../assets/Ellipse.svg";

import imagePedro from "../../../assets/Pedro.png";
import imageGindri from "../../../assets/Gindri.png";
import imageAndressa from "../../../assets/Andressa.png";
import imageJhonatas from "../../../assets/Jhonatas.png";
import imageMarcio from "../../../assets/Marcio.png";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import {
  useGetCharCollection,
  useGetInfoUser,
} from "../../../hooks/useGetUserInfo";
import { useRegisterCharTibia } from "../../../hooks/useRegisterCharTibia";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { UserContext } from "../../../contexts/ContextUser";
import { useGetAccountInfo } from "../../../hooks/useGetAccountInfo";
import { useDeleteCharTibia } from "../../../hooks/useDeleteCharTibia";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  infoName: yup.string().required(),
});
interface iValueNick {
  infoName: string;
  value?: string;
}

export default function Developers() {
  const { user } = useContext(UserContext);

  const { userName, userUid } = useGetInfoUser();
  const { logout } = useAuthentication();
  const { charsCollection, getCharCollection } = useGetCharCollection();
  const { getAccountInfo, charName, charLevel, charVocation } =
    useGetAccountInfo();

  const [hideNavDesktop, setHideNavDesktop] = useState(false);
  const [hideNavMobile, setHideNavMobile] = useState(false);

  const { registerChar, currentUser } = useRegisterCharTibia();
  const { deleteChar } = useDeleteCharTibia();

  return (
    <div className=" w-screen min-h-[100vh] col-center">
      <div className="w-screen h-screen relative">
        <div className="bg-[url('https://wallpapercave.com/wp/wp7219130.jpg')] w-full h-full fixed"></div>
        <div className="w-full h-full fixed bg-[#00000058]"></div>
      </div>

      <header className="fixed z-40 w-screen bg-primary flex items-center justify-between py-3 text-white ">
        <p className="text-2xl logo ml-5">PartyLink</p>
        <div className=" mr-5 flex items-center gap-3">
          <p className="hidden sm:flex">Hello, {userName}</p>
          <Image src={imageProfile} alt="nameUser" />
          <button
            className={!hideNavMobile ? "sm:hidden w-6 text-center" : "hidden"}
            onClick={(event) => {
              event.preventDefault();
              setHideNavMobile(true);
            }}
          >
            <FaBars className="text-2xl" />
          </button>
          <button
            className={hideNavMobile ? "sm:hidden w-6 text-center" : "hidden"}
            onClick={(event) => {
              event.preventDefault();
              setHideNavMobile(false);
            }}
          >
            <IoClose className="text-3xl" />
          </button>
        </div>
      </header>

      <main className="main-Home">
        <aside
          className={
            hideNavMobile
              ? "aside-home"
              : "absolute top-[-200%] w-full ease-in-out duration-500 sm:aside-home"
          }
          onMouseLeave={(event) => {
            event.preventDefault();
            setHideNavDesktop(false);
          }}
        >
          <div
            className={hideNavDesktop ? "hidden" : "h-full z-30"}
            onMouseEnter={(event) => {
              event.preventDefault();
              setHideNavDesktop(true);
            }}
          >
            <div className="aside-bar">
              <IoHome />
              {/* <HiUserGroup /> */}
              <FaWalking />
              <BsFillPersonFill />
            </div>

            <FiLogOut className="aside-bar-logout" />
          </div>

          <div
            className={hideNavDesktop ? "sm:aside-div" : "sm:aside-div-hidden"}
          >
            <nav className="aside-nav">
              <Link href={"/dashboard/"} className="hover:scale-110">
                <button className="aside-nav-btn">
                  <IoHome className="text-2xl" />
                  <p>Home</p>
                </button>
              </Link>
              {/* <button className="aside-nav-btn">
                <HiUserGroup className="text-2xl" />
                <p>Teams</p>
              </button> */}
              <Link href={"/dashboard/developers"} className="hover:scale-110">
                <button className="aside-nav-btn">
                  <FaWalking className="text-2xl" />
                  <p>Developers</p>
                </button>
              </Link>
              <Link href={"/dashboard/profile"} className="hover:scale-110">
                <button className="aside-nav-btn">
                  <BsFillPersonFill className="text-2xl" />
                  <p>Profile</p>
                </button>
              </Link>
              <button className="aside-nav-logout" onClick={logout}>
                <FiLogOut className="text-2xl" />
                <p>Logout</p>
              </button>
            </nav>
          </div>
        </aside>

        <section className="section-mobile h-full">
          <div className="w-90 h-full mt-24 sm:mt-40 col-center gap-10 max-w-[1400px]">
            <div className="flex sm:flex-row flex-col gap-10">
              <section className="bg-[#2C1471] hover:scale-110">
                <Image
                  className="rounded-t-lg"
                  alt="picture-Pedro"
                  width={300}
                  height={300}
                  src={imagePedro}
                />
                <p className="text-white mt-4 px-4 font-bold text-sm h-11">
                  Pedro, 25, Belo Horizonte - MG
                </p>
                <p className="text-[#FCDA2A] mt-4 px-4 font-bold text-sm">
                  Product Owner
                </p>
                <div className="text-white flex flex-col items-center w-full gap-4 mt-4 justify-between px-4 pb-4">
                  <a
                    className="flex w-full bg-black rounded-lg px-2 pt-1 pb-1 text-center gap-16"
                    href="https://www.linkedin.com/in/pedrohenriquefeitosa/"
                  >
                    <BsLinkedin className="cursor-pointer" />
                    <p>Linkedin</p>
                  </a>
                  <a
                    className="flex w-full bg-black rounded-lg px-2 pt-1 pb-1 text-center gap-16"
                    href="https://github.com/pedrofeitosa97"
                  >
                    <BsGithub className="cursor-pointer" />
                    <p>Github</p>
                  </a>
                </div>
              </section>
              <section className="bg-[#2C1471] hover:scale-110">
                <Image
                  className="rounded-t-lg"
                  alt="picture-Andressa"
                  width={300}
                  height={300}
                  src={imageAndressa}
                />
                <p className="text-white mt-4 px-4 font-bold text-sm text-ellipsis h-11">
                  Andressa, 19, Angra dos Reis - RJ
                </p>
                <p className="text-[#FCDA2A] mt-4 px-4 font-bold text-sm">
                  Quality Assurance
                </p>
                <div className="text-white flex flex-col items-center w-full gap-4 mt-4 justify-between px-4 pb-4">
                  <a
                    className="flex w-full bg-black rounded-lg px-2 pt-1 pb-1 text-center gap-16"
                    href="https://www.linkedin.com/in/andressalsmenezes"
                  >
                    <BsLinkedin className="cursor-pointer" />
                    <p>Linkedin</p>
                  </a>
                  <a
                    className="flex w-full bg-black rounded-lg px-2 pt-1 pb-1 text-center gap-16"
                    href="https://github.com/AndressaLSMenezes"
                  >
                    <BsGithub className="cursor-pointer" />
                    <p>Github</p>
                  </a>
                </div>
              </section>
              <section className="bg-[#2C1471] hover:scale-110">
                <Image
                  className="rounded-t-lg"
                  alt="picture-Jhonatas"
                  width={300}
                  height={300}
                  src={imageMarcio}
                />
                <p className="text-white mt-4 px-4 font-bold text-sm h-11">
                  Márcio, 19, Rio de Janeiro - RJ
                </p>
                <p className="text-[#FCDA2A] mt-4 px-4 font-bold text-sm">
                  Quality Assurance
                </p>
                <div className="text-white flex flex-col items-center w-full gap-4 mt-4 justify-between px-4 pb-4">
                  <a
                    className="flex w-full bg-black rounded-lg px-2 pt-1 pb-1 text-center gap-16"
                    href="https://www.linkedin.com/in/marciocalenzo/"
                  >
                    <BsLinkedin className="cursor-pointer" />
                    <p>Linkedin</p>
                  </a>
                  <a
                    className="flex w-full bg-black rounded-lg px-2 pt-1 pb-1 text-center gap-16"
                    href="https://github.com/PzLeMoNBR"
                  >
                    <BsGithub className="cursor-pointer" />
                    <p>Github</p>
                  </a>
                </div>
              </section>
              <section className="bg-[#2C1471] hover:scale-110">
                <Image
                  className="rounded-t-lg"
                  alt="picture-Gindri"
                  width={300}
                  height={300}
                  src={imageGindri}
                />
                <p className="text-white mt-4 px-4 font-bold text-sm h-11">
                  Leonardo Gindri, 24, Florianópolis - SC
                </p>
                <p className="text-[#FCDA2A] mt-4 px-4 font-bold text-sm">
                  Scrum Master
                </p>
                <div className="text-white flex flex-col items-center w-full gap-4 mt-4 justify-between px-4 pb-4">
                  <a
                    className="flex w-full bg-black rounded-lg px-2 pt-1 pb-1 text-center gap-16"
                    href="https://www.linkedin.com/in/leonardogindri/"
                  >
                    <BsLinkedin className="cursor-pointer" />
                    <p>Linkedin</p>
                  </a>
                  <a
                    className="flex w-full bg-black rounded-lg px-2 pt-1 pb-1 text-center gap-16"
                    href="https://github.com/LeoGindri"
                  >
                    <BsGithub className="cursor-pointer" />
                    <p>Github</p>
                  </a>
                </div>
              </section>
              <section className="bg-[#2C1471] hover:scale-110">
                <Image
                  className="rounded-t-lg"
                  alt="picture-Jhonatas"
                  width={300}
                  height={300}
                  src={imageJhonatas}
                />
                <p className="text-white mt-4 px-4 font-bold text-sm h-11">
                  Jhonatas, 25, Mossoró - RN
                </p>
                <p className="text-[#FCDA2A] mt-4 px-4 font-bold text-sm">
                  Tech Lead
                </p>
                <div className="text-white flex flex-col items-center w-full gap-4 mt-4 justify-between px-4 pb-4">
                  <a
                    className="flex w-full bg-black rounded-lg px-2 pt-1 pb-1 text-center gap-16"
                    href="https://www.linkedin.com/in/jhonatasalves/"
                  >
                    <BsLinkedin className="cursor-pointer" />
                    <p>Linkedin</p>
                  </a>
                  <a
                    className="flex w-full bg-black rounded-lg px-2 pt-1 pb-1 text-center gap-16"
                    href="https://github.com/Jhonatas-Matheus"
                  >
                    <BsGithub className="cursor-pointer" />
                    <p>Github</p>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

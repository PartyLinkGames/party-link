import React, { useContext, useEffect } from "react";

import { useForm } from "react-hook-form";

import { IoHome, IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { FaWalking, FaBars } from "react-icons/fa";
import { BsFillPersonFill, BsPlusLg } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import imageProfile from "../../../assets/Ellipse.svg";
import characterImage from "../../../assets/Black_Knight.webp";

import Image from "next/image";

import { useState } from "react";
import { LiCharacters } from "../../../components/LiCharacter";

import {
  useGetCharCollection,
  useGetInfoUser,
} from "../../../hooks/useGetUserInfo";
import { useRegisterCharTibia } from "../../../hooks/useRegisterCharTibia";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { UserContext } from "../../../contexts/ContextUser";
import HuntCard from "../../../components/cardHunt";
import { useGetAccountInfo } from "../../../hooks/useGetAccountInfo";
import { useDeleteCharTibia } from "../../../hooks/useDeleteCharTibia";
import { protectedRoutesUserOff } from "../../../components/protectedRoutes/ProtectedRoutes";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  infoName: yup.string().required(),
});
interface iValueNick {
  infoName: string;
  value?: string;
}

function HomePage() {
  const { user } = useContext(UserContext);

  const { userName, userUid } = useGetInfoUser();
  const { logout } = useAuthentication();
  const { charsCollection, getCharCollection } = useGetCharCollection();
  const { getAccountInfo, charName, charLevel, charVocation } =
    useGetAccountInfo();

  const [hideNavDesktop, setHideNavDesktop] = useState(false);
  const [hideNavMobile, setHideNavMobile] = useState(false);
  const [showCharacter, setShowCharacter] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [character, setCharacter] = useState(false);

  const { registerChar, currentUser } = useRegisterCharTibia();
  const { deleteChar } = useDeleteCharTibia();

  useEffect(() => {
    const getBonecos = () => {
      getCharCollection(user?.uid);
    };
    getBonecos();
  }, []);

  const { register, handleSubmit, reset } = useForm<iValueNick>({
    resolver: yupResolver(schema),
  });

  const handleCreateChracter = (value: iValueNick) => {
    registerChar(currentUser.uid, value.infoName.toLowerCase());
    reset();
  };
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
              <HiUserGroup />
              <FaWalking />
              <BsFillPersonFill />
            </div>

            <FiLogOut className="aside-bar-logout" />
          </div>

          <div
            className={hideNavDesktop ? "sm:aside-div" : "sm:aside-div-hidden"}
          >
            <nav className="aside-nav">
              <button className="aside-nav-btn">
                <IoHome className="text-2xl" />
                <p>Home</p>
              </button>
              <button className="aside-nav-btn">
                <HiUserGroup className="text-2xl" />
                <p>Teams</p>
              </button>
              <button className="aside-nav-btn">
                <FaWalking className="text-2xl" />
                <p>Developers</p>
              </button>
              <button className="aside-nav-btn">
                <BsFillPersonFill className="text-2xl" />
                <p>Profile</p>
              </button>
              <button className="aside-nav-logout" onClick={logout}>
                <FiLogOut className="text-2xl" />
                <p>Logout</p>
              </button>
            </nav>
          </div>
        </aside>

        <section className="section-mobile h-full">
          <div className="w-90 h-full mt-24 sm:mt-40 col-center gap-10 max-w-[1400px]">
            <header className="section-div-header">
              <div className="col-center sm:w-[32%] gap-3 justify-center bg-[#00000058] py-2 sm:h-full">
                <div className="flex items-center justify-between w-90">
                  <label
                    htmlFor="newCharacter"
                    className="w-90 font-bold text-lg text-yellow-400"
                  >
                    Add your Character
                  </label>
                  <button
                    className={
                      !showForm ? "text-xl text-yellow-400 sm:hidden" : "hidden"
                    }
                    onClick={(event) => {
                      event.preventDefault();
                      setShowForm(true);
                    }}
                  >
                    <BsPlusLg />
                  </button>
                  <button
                    className={showForm ? "icon-yellow" : "hidden"}
                    onClick={(event) => {
                      event.preventDefault();
                      setShowForm(false);
                    }}
                  >
                    <IoIosArrowUp />
                  </button>
                </div>
                <form
                  onSubmit={handleSubmit(handleCreateChracter)}
                  className={
                    showForm
                      ? "section-div-header-form-div"
                      : "hidden sm:section-div-header-form-div"
                  }
                >
                  <input
                    type="text"
                    id="newCharacter"
                    className="w-90 h-8 rounded-sm"
                    {...register("infoName")}
                  />
                  <button
                    type="submit"
                    className="w-90 bg-yellow-400 h-8 rounded-sm"
                  >
                    Add character
                  </button>
                </form>
              </div>
              <div className="sm:w-[32%] col-center justify-center bg-[#00000058] mt-5 sm:mt-0 relative py-2 sm:py-0 sm:h-full">
                <div className="flex items-center justify-between w-90">
                  <p className="font-bold text-lg text-yellow-400">
                    Choose your character
                  </p>
                  <button
                    className={!showCharacter ? "icon-yellow" : "hidden"}
                    onClick={(event) => {
                      event.preventDefault();
                      setShowCharacter(true);
                    }}
                  >
                    <IoIosArrowDown />
                  </button>

                  <button
                    className={showCharacter ? "icon-yellow" : "hidden"}
                    onClick={(event) => {
                      event.preventDefault();
                      setShowCharacter(false);
                    }}
                  >
                    <IoIosArrowUp />
                  </button>
                </div>
                <ul
                  className={
                    showCharacter
                      ? "section-div-header-choose-ul"
                      : "hidden sm:section-div-header-choose-ul"
                  }
                >
                  {charsCollection &&
                    charsCollection?.map((element: any, i: number) => (
                      <LiCharacters
                        name={element}
                        key={i}
                        onClick={(e: any) => {
                          setCharacter(true);
                          getAccountInfo(e.target.innerText);
                        }}
                      />
                    ))}
                </ul>
              </div>
              <div
                className={
                  character == false
                    ? "hidden"
                    : "flex sm:w-[32%] items-center bg-[#00000058] h-36 mt-5 sm:h-full sm:mt-0"
                }
              >
                <figure className="relative h-full w-3/6">
                  <Image
                    src={characterImage}
                    alt="Tiu Chiko"
                    className="absolute bottom-10 right-3 rounded-sm"
                  />
                </figure>
                <div className="flex flex-col items-end justify-between w-3/6 mr-3 text-white h-80">
                  <div className="flex flex-col items-end gap-2">
                    <p>Name: {charName}</p>
                    <p>Class: {charVocation}</p>
                    <p>Level: {charLevel}</p>
                  </div>

                  <button
                    className="bg-yellow-400 w-32 h-7 rounded-sm text-gray-900 font-bold"
                    onClick={() => {
                      setCharacter(false);
                      deleteChar(user?.uid, charName);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </header>
            <HuntCard
              isPlayer={character}
              level={charLevel ? charLevel : null}
              name="col-center sm:flex-row sm:flex-wrap sm:justify-center gap-4 w-full"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default protectedRoutesUserOff(HomePage);

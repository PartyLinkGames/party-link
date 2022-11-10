import React, { useContext, useEffect } from "react";

import { IoHome, IoClose } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaWalking, FaBars } from "react-icons/fa";
import { BsFillPersonFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import imageProfile from "../../../assets/Ellipse.svg";
import ModalEditUser from "../../../components/EditUser/EditUser";

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

export default function Profile() {
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
            className={
              hideNavDesktop ? "sm:aside-div z-50" : "sm:aside-div-hidden z-50"
            }
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
          <ModalEditUser />
        </section>
      </main>
    </div>
  );
}

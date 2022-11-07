import { IoHome, IoClose } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaWalking, FaBars } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import tibiaImage from "../../assets/TibiaImage.svg";
import imageProfile from "../../assets/Ellipse.svg";
import valorantImage from "../../assets/ValorantImage.svg";
import boysWalking from "../../assets/BoysWalking.gif";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { protectedRoutesUserOff } from "../../components/protectedRoutes/ProtectedRoutes";

import CardHunts from "../../components/modalCardHunts/cardHunts";

function HomePage() {
  const [hideNavDesktop, setHideNavDesktop] = useState(false);
  const [navStyle, setNavStyle] = useState("sm:aside-div-hidden");
  const [bar, setBar] = useState("h-full z-30");

  const [hideNavMobile, setHideNavMobile] = useState(false);
  const [barMenuIcon, setBarMenuIcon] = useState("sm:hidden w-6 text-center");
  const [closeIcon, setCloseIcon] = useState("hidden");
  const [asideClass, setAsideClass] = useState(
    "absolute top-[-200%] ease-in-out duration-500 w-full sm:aside-home"
  );
  const { logout } = useAuthentication();

  useEffect(() => {
    if (hideNavDesktop) {
      setNavStyle("sm:aside-div");
      setBar("hidden");
    } else {
      setNavStyle("sm:aside-div-hidden");
      setBar("h-full z-30");
    }
    console.log("EITA PORRA");
  }, [hideNavDesktop]);

  useEffect(() => {
    if (hideNavMobile) {
      setBarMenuIcon("hidden");
      setCloseIcon("sm:hidden w-6 text-center");
      setAsideClass("aside-home");
    } else {
      setBarMenuIcon("sm:hidden w-6 text-center");
      setCloseIcon("hidden");
      setAsideClass(
        "absolute top-[-200%] w-full ease-in-out duration-500 sm:aside-home"
      );
    }
  }, [hideNavMobile]);

  return (
    <div className="bg-violet-300 w-screen h-screen  col-center">
      {/* <header className="fixed z-20 w-screen bg-primary flex items-center justify-between py-3 text-white ">
        <p className="text-2xl logo ml-5">PartyLink</p>
        <div className=" mr-5 flex items-center gap-3">
          <p className="hidden sm:flex">Hello, nameUser</p>
          <Image src={imageProfile} alt="nameUser" />
          <button
            className={barMenuIcon}
            onClick={(event) => {
              event.preventDefault();
              setHideNavMobile(true);
            }}
          >
            <FaBars className="text-2xl" />
          </button>
          <button
            className={closeIcon}
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
          className={asideClass}
          onMouseLeave={(event) => {
            event.preventDefault();
            setHideNavDesktop(false);
          }}
        >
          <div
            className={bar}
            onMouseEnter={(event) => {
              event.preventDefault();
              console.log("oi");
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

          <div className={navStyle}>
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

        <section className="section-mobile">
          <div className="bg-primary text-white flex items-center gap-4 h-12 w-90 max-w-[1000px] rounded-lg">
            <IoHome className="ml-3 text-2xl" />
            <p className="">Home</p>
          </div>

          <div className="section-div">
            <h1 className="text-3xl text-primary font-bold">
              Select your game
            </h1>

            <div className="section-div-games">
              <Link href={""}>
                <Image
                  src={tibiaImage}
                  alt="Tibia Image"
                  className="rounded-lg"
                />
              </Link>
              <p className="font-bold text-2xl text-gray-600 mt-12 mb-6">
                Em breve...
              </p>
              <div className="col-center sm:flex-row gap-5 sm:flex-wrap sm:justify-center">
                <Image
                  src={valorantImage}
                  alt="Valorant Image"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main> */}
      <CardHunts />
    </div>
  );
}
export default protectedRoutesUserOff(HomePage);

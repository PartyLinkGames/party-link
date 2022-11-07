import { IoHome } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaWalking, FaBars } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import tibiaImage from "../../assets/TibiaImage.svg";
import imageProfile from "../../assets/Ellipse.svg";
import valorantImage from "../../assets/ValorantImage.svg";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { protectedRoutesUserOff } from "../../components/protectedRoutes/ProtectedRoutes";

function HomePage() {
  const [hideNav, setHideNav] = useState(false);
  const [navStyle, setNavStyle] = useState("hidden");
  const [bar, setBar] = useState("h-full");
  const [buttonLogout, setButtonLogout] = useState("hidden");
  const { logout } = useAuthentication();

  useEffect(() => {
    if (hideNav) {
      setNavStyle("aside-nav");
      setButtonLogout("aside-nav-logout");
      setBar("hidden");
    } else {
      setNavStyle("hidden");
      setButtonLogout("hidden");
      setBar("h-full");
    }
  }, [hideNav]);

  return (
    <div className="bg-violet-300 w-screen h-screen  col-center">
      <header className="fixed z-20 w-screen bg-primary flex items-center justify-between py-3 text-white ">
        <p className="text-2xl logo ml-5">PartyLink</p>
        <div className=" mr-5 flex items-center gap-3">
          <p className="hidden sm:flex">Hello, nameUser</p>
          <Image src={imageProfile} alt="nameUser" />
          <button className="sm:hidden ">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </header>

      <main className="main-Home">
        <aside
          className="aside-home"
          onMouseLeave={(event) => {
            event.preventDefault();
            setHideNav(false);
          }}
        >
          <div
            className={bar}
            onMouseEnter={(event) => {
              event.preventDefault();
              setHideNav(true);
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

          <nav className={navStyle}>
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
          </nav>

          <button className={buttonLogout} onClick={logout}>
            <FiLogOut className="text-2xl" />
            <p>Logout</p>
          </button>
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
              <div className="col-center sm:flex-row gap-5">
                <Image
                  src={valorantImage}
                  alt="Valorant Image"
                  className="rounded-xl"
                />

                <Image
                  src={valorantImage}
                  alt="Valorant Image"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default protectedRoutesUserOff(HomePage);

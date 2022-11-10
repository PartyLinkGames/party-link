import { IoHome, IoClose } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaWalking, FaBars } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import tibiaImage from "../../assets/TibiaImage.svg";
import imageProfile from "../../assets/Ellipse.svg";
import valorantImage from "../../assets/ValorantImage.svg";
import leagueImage from "../../assets/LeagueImage.svg";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { protectedRoutesUserOff } from "../../components/protectedRoutes/ProtectedRoutes";

// import CardHunts from "../../components/modalCardHunts/cardHunts";
import { useGetInfoUser } from "../../hooks/useGetUserInfo";

function HomePage() {
  const [hideNavDesktop, setHideNavDesktop] = useState(false);
  const [hideNavMobile, setHideNavMobile] = useState(false);
  const [barMenuIcon, setBarMenuIcon] = useState("sm:hidden w-6 text-center");
  const [closeIcon, setCloseIcon] = useState("hidden");
  const [asideClass, setAsideClass] = useState(
    "absolute top-[-200%] ease-in-out duration-500 w-full sm:aside-home"
  );
  const { logout } = useAuthentication();
  const { userName, photoURL } = useGetInfoUser();

  return (
    <div className="w-screen h-screen col-center relative">
      <div className="w-screen h-screen relative">
        <div className="bg-[url('https://wallpapercave.com/wp/wp7219130.jpg')] bg-cover w-full h-full fixed"></div>
        <div className="w-full h-full fixed bg-[#00000069]"></div>
      </div>

      <header className="fixed z-30 w-screen bg-primary flex items-center justify-between text-white h-14">
        <p className="text-2xl logo ml-5">PartyLink</p>
        <div className=" mr-5 flex items-center gap-3">
          <p className="hidden sm:flex">Hello, {userName}</p>

          <Image
            className="rounded-xl"
            loader={() => (photoURL ? photoURL : imageProfile)}
            src={photoURL ? photoURL : imageProfile}
            unoptimized={true}
            alt={userName as string}
            width={50}
            height={50}
          />

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
              <button className="aside-nav-btn">
                <IoHome className="text-2xl" />
                <p>Home</p>
              </button>
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

        <section className="section-mobile">
          <div className="section-div">
            <h1 className="text-4xl font-bold">Select your game</h1>

            <div className="section-div-games">
              <Link href={"/dashboard/tibia"} className="hover:scale-110">
                <Image
                  src={tibiaImage}
                  alt="Tibia Image"
                  className="rounded-lg "
                />
              </Link>
              <p className="font-bold text-2xl mt-12 mb-6">Coming soon...</p>
              <div className="col-center sm:flex-row gap-4 sm:flex-wrap sm:justify-center">
                <figure className="rounded-3xl overflow-hidden hover:scale-110 hover:rounded-4xl">
                  <Image
                    src={valorantImage}
                    alt="Valorant Image"
                    // height={290}
                  />
                </figure>

                <figure className="rounded-xl overflow-hidden hover:scale-110">
                  <Image src={leagueImage} alt="Valorant Image" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export default protectedRoutesUserOff(HomePage);

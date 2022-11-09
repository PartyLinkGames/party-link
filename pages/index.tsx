import { useContext, useState } from "react";

import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

import MonsterIcon from "../assets/MonsterIcon.svg";

import ModalLogin from "../components/modalLogin/login";
import ModalRegister from "../components/modalRegister";

import { protectedRoutesUserLoged } from "../components/protectedRoutes/ProtectedRoutes";
import { ModalContext } from "../contexts/ContextModal";

function LandingPage() {
  const [positionIcon, setPositionIcon] = useState("figure-icon");
  const {
    modalRegisterIsOpen,
    setModalRegisterIsOpen,
    setModalLoginIsOpen,
    modalLoginIsOpen,
  } = useContext(ModalContext);

  const handleModalOpen = () => {
    setModalRegisterIsOpen(true);
  };

  const modalLoginOpen = () => {
    setModalLoginIsOpen(true);
  };

  return (
    <>
      <main className="main">
        <div className="main-div">
          <header className="col-center gap-4">
            <p className="text-6xl logo">PartyLink</p>
            <p className="text-white text-base">Find your game duo</p>
          </header>
          <figure className="w-full h-full flex justify-center items-center hover:animate-bounce">
            <div
              className="w-3/6 h-full sm:flex hidden"
              onMouseEnter={(event) => {
                event.preventDefault();
                setPositionIcon("figure-icon left-[60vw]");
              }}
              onMouseLeave={(event) => {
                event.preventDefault();
                setPositionIcon("figure-icon");
              }}
            ></div>

            <div
              className="w-3/6 h-full sm:flex hidden"
              onMouseEnter={(event) => {
                event.preventDefault();
                setPositionIcon("figure-icon right-[50vw]");
              }}
              onMouseLeave={(event) => {
                event.preventDefault();
                setPositionIcon("figure-icon");
              }}
            ></div>

            <Image
              alt="boys Playing"
              src={MonsterIcon}
              className={positionIcon}
            />
          </figure>
        </div>
        <aside
          className={
            modalRegisterIsOpen
              ? "aside-dark z-0"
              : modalLoginIsOpen
              ? "aside-dark z-0"
              : "aside-dark z-20"
          }
        >
          <p className="hidden sm:flex sm:h-12 text-2xl logo mt-10">
            PartyLink
          </p>
          <nav className="col-center w-4/5 gap-8 sm:gap-8 sm:mt-20">
            <button className="btn-yellow h-11" onClick={modalLoginOpen}>
              Login
            </button>
            <button className="btn-yellow h-11" onClick={handleModalOpen}>
              Register
            </button>
          </nav>
          <div className="hidden sm:flex absolute bottom-4 gap-8">
            <Link href={""} className="social">
              <BsInstagram />
            </Link>
            <Link href={""} className="social">
              <AiFillTwitterCircle />
            </Link>
          </div>
        </aside>
      </main>
      <footer className="footer">
        <nav className="nav_footer">
          <Link href={""}>About Us</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>Developers</Link>
        </nav>
      </footer>
      <ModalRegister />
      <ModalLogin />
    </>
  );
}
export default protectedRoutesUserLoged(LandingPage);

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFillMoonFill, BsInstagram, BsCircleFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

import mainImg from "../assets/boysPlaying.png";
import ModalLogin from "../components/modalLogin/login";
import ModalRegister from "../components/modalRegister";
import { protectedRoutesUserLoged } from "../components/protectedRoutes/ProtectedRoutes";
import { ModalContext, ModalProvider } from "../contexts/ContextModal";

function LandingPage() {
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
        <div className="main_div">
          <header className="col-center gap-4">
            <p className="text-6xl logo">PartyLink</p>
            <p className="text-white text-base">Find your game duo</p>
          </header>
          <Image alt="boys Playing" src={mainImg} className="sm:w-72" />
        </div>
        <aside className={modalRegisterIsOpen ? "aside-dark z-0" : modalLoginIsOpen ? "aside-dark z-0" : "aside-dark z-20"}>
          <p className="hidden sm:flex sm:h-12 text-2xl logo mt-10">
            PartyLink
          </p>
          <nav className="col-center w-4/5 gap-8 sm:gap-12 sm:mt-20">
            <button className="btn_yellow" onClick={modalLoginOpen}>
              Login
            </button>
            <button className="btn_yellow" onClick={handleModalOpen}>
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

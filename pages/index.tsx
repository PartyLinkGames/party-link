import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPage from "./LandingPages";
import ModalRegister from "../components/modalRegister";
import { ModalProvider } from "../contexts/ContextModal";
import ModalLogin from "../components/modalLogin/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./Home";

export default function Home() {
  return (
    <>
    <HomePage/>
      {/* <LandingPage></LandingPage> */}
      <ToastContainer />
      <ModalProvider>
        <LandingPage></LandingPage>
      </ModalProvider>
      {/* <ModalRegister></ModalRegister> */}
    </>
  );
}

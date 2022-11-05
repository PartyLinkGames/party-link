import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPage from "./LandingPages";
import ModalRegister from "../components/modalRegister";
import { ModalProvider } from "../contexts/ContextModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer />
      <ModalProvider>
        <LandingPage></LandingPage>
      </ModalProvider>
      {/* <ModalRegister></ModalRegister> */}
    </>
  );
}

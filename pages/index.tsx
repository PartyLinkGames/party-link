import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPage from "./LandingPages";
import ModalRegister from "../components/modalRegister";
import { ModalProvider } from "../contexts/ContextModal";

export default function Home() {
  return (
    <>
      <ModalProvider>
        <LandingPage></LandingPage>
      </ModalProvider>
      {/* <ModalRegister></ModalRegister> */}
    </>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LandingPage from "./LandingPages";
import ModalRegister from "../components/modalRegister";

export default function Home() {
  return (
    <>
      <LandingPage></LandingPage>
      {/* <ModalRegister></ModalRegister> */}
    </>
  );
}

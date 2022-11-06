import "../styles/global.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "../contexts/ContextModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}

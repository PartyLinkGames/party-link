import "../styles/global.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "../contexts/ContextModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadScreen from "../components/loadScreen/LoadScreen";
import { UserProvider } from "../contexts/ContextUser";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <ToastContainer />
        <LoadScreen>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </LoadScreen>
      </UserProvider>
    </>
  );
}

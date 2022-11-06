import "../styles/global.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "../contexts/ContextModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}

import React, { createContext, useState } from "react";

export const ModalContext = createContext({} as iModalProviderValues);
interface iModalProviderProps {
  children: React.ReactNode;
}
interface iModalProviderValues {
  modalRegisterIsOpen?: boolean;
  setModalRegisterIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const [modalRegisterIsOpen, setModalRegisterIsOpen] =
    useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{ modalRegisterIsOpen, setModalRegisterIsOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};

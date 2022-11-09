import React, { createContext, useState } from "react";

export const ModalContext = createContext({} as iModalProviderValues);
interface iModalProviderProps {
  children: React.ReactNode;
}
interface iModalProviderValues {
  modalRegisterIsOpen?: boolean;
  setModalRegisterIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalLoginIsOpen?: boolean;
  setModalLoginIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalHuntingMarkIsOpen?: boolean;
  setModalHuntingMarkIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const [modalRegisterIsOpen, setModalRegisterIsOpen] =
    useState<boolean>(false);

  const [modalLoginIsOpen, setModalLoginIsOpen] = useState<boolean>(false);
  const [modalHuntingMarkIsOpen, setModalHuntingMarkIsOpen] =
    useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        modalRegisterIsOpen,
        setModalRegisterIsOpen,
        modalLoginIsOpen,
        setModalLoginIsOpen,
        modalHuntingMarkIsOpen,
        setModalHuntingMarkIsOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

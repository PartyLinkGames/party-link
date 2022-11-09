import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Component, useContext } from "react";
import { UserContext } from "../../contexts/ContextUser";
import { app } from "../../firebase/config";
import LoadScreen from "../loadScreen/LoadScreen";
import loading from "../../assets/loading-gif.gif";
export const protectedRoutesUserLoged = (Component: () => JSX.Element) => {
  return function ProtectedRoute(props: object | null) {
    const { user } = useContext(UserContext);
    const router = useRouter();

    if (user) {
      router.replace("/dashboard");
      return (
        <Image
          src={loading}
          alt="Gif de carregamento"
          className="mx-auto my-auto  object-contain"
        />
      );
    }
    return <Component {...props} />;
    // Tinha um user={user} porem ele sempre voltava null , eu Pecof removi !
  };
};
export const protectedRoutesUserOff = (Component: () => JSX.Element) => {
  return function ProtectedRoute(props: object | null) {
    const { user } = useContext(UserContext);
    const router = useRouter();
    if (!user) {
      router.replace("/");
      return (
        <Image
          src={loading}
          alt="Gif de carregamento"
          className="mx-auto my-auto  object-contain"
        />
      );
    }
    return <Component {...props} />;
    // Tinha um user={user} porem ele sempre voltava null , eu Pecof removi !
  };
};

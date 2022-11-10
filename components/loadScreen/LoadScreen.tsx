import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { app } from "../../firebase/config";
import Image from "next/image";
import loadingGif from "../../assets/loading-gif.gif";

type Props = {
  children: any;
};

const LoadScreen = ({ children }: Props) => {
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <Image
        src={loadingGif}
        alt="Gif de carregamento"
        className="mx-auto my-auto  object-contain"
      />
    );
  }
  return children;
};

export default LoadScreen;

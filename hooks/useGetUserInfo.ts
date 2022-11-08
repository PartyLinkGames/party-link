import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app, db } from "../firebase/config";

export const useGetInfoUser = () => {
  const [userName, setUserName] = useState<string | null | undefined>(null);
  const auth = getAuth(app);
  useEffect(() => {
    const getUserName = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUserName(currentUser?.displayName);
      });
    };
    getUserName();
  }, []);
//   console.log(userName);
  return {
    userName,
  };
};

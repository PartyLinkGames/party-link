import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/config";
interface iUserContextProps {
  children: React.ReactNode;
}

export const UserContext = createContext({});

export const UserProvider = ({ children }: iUserContextProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<null | User>(null);
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

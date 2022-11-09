import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/config";
interface iUserContextProps {
  children: React.ReactNode;
}
export interface iUserContextValues {
  user: User | null;
}
export const UserContext = createContext({} as iUserContextValues);

export const UserProvider = ({ children }: iUserContextProps) => {
  const [user, setUser] = useState<null | User>(null);

  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

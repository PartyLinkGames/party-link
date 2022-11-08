import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, set, ref, update } from "firebase/database";
import { useEffect, useState } from "react";
import { app } from "../firebase/config";

export const useRegisterCharTibia = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const auth = getAuth(app);
  const database = getDatabase(app);
  useEffect(() => {
    const getUserUid = () => {
      onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
      });
    };
    getUserUid();
  });
  const registerChar = (uid: string, nickName: string) => {
    update(ref(database, "users/" + uid), {
      games: {
        tibia: {
          nickName: nickName,
        },
      },
    });
  };
  return {
    currentUser,
    registerChar,
  };
};

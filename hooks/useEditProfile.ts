import {
  getAuth,
  updateProfile,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { app } from "../firebase/config";
export const useEditProfile = () => {
  let currentUser: User | null;
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    currentUser = user;
  });
  const updateCurrentProfile = (userName: string, photoUrl?: string) => {
    console.log(currentUser);
    if (currentUser) {
      console.log("Caiu no primeiro if referente a currentUser");
      if (photoUrl) {
        console.log("Caiu no segundo if referente a photoURL");
        try {
          new URL(photoUrl);
          updateProfile(currentUser, {
            displayName: userName,
            photoURL: photoUrl,
          });
        } catch (error) {}
      }
      updateProfile(currentUser, {
        displayName: userName,
      });
    }
  };
  return {
    updateCurrentProfile,
  };
};

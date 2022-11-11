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
    if (currentUser) {
      if (photoUrl) {
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

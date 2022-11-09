import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { db } from "../firebase/config";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { iRegisterForm } from "../components/modalRegister";
import { toast } from "react-toastify";
import { app } from "../firebase/config";
import { ILogin } from "./../components/modalLogin/interface";
export const useAuthentication = () => {
  const auth = getAuth(app);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [users, setUsers] = useState<object>([]);
  const router = useRouter();

  const createUser = async (data: iRegisterForm) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, {
        displayName: data.name,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes("email-already-in-use")) {
          toast.error("Email already used", {
            theme: "dark",
            autoClose: 2000,
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };
  const loginUser = async (data: ILogin) => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (
          error.message.includes("auth/user-not-found") ||
          error.message.includes("auth/wrong-password")
        ) {
          toast.error("Invalid Email/Password", {
            theme: "dark",
            autoClose: 2000,
          });
        }
      }
    }
  };
  const logout = () => {
    try {
      signOut(auth);
      router.push("/");
    } catch (error) {}
  };
  return {
    createUser,
    loading,
    loginUser,
    logout,
    users,
  };
};

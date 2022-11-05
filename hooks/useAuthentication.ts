import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import { iRegisterForm } from "../components/modalRegister";
import { toast } from "react-toastify";
import { app } from "../firebase/config";

export const useAuthentication = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState<boolean>(false);
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
          toast.error("O email já está cadastrado", {
            theme: "dark",
            autoClose: 2000,
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };
  return {
    createUser,
    loading,
  };
};

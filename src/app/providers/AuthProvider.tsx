import { addUser, deleteUser } from "@/entities/auth/store/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../main";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unListen = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          addUser({
            id: authUser.uid,
            name: authUser.displayName ?? "",
            email: authUser.email || "",
          }),
        );
      } else {
        dispatch(deleteUser());
      }
    });
    return () => {
      unListen();
    };
  }, [dispatch]);

  return <div>{children}</div>;
};

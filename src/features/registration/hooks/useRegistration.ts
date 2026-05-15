import { auth, db } from "@/app/main";
import { pageRouter } from "@/shared/constants/page-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const regSchema = z.object({
  displayName: z.string("Enter a display name").min(3, "Display name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type TypeRegistrationForm = z.infer<typeof regSchema>;

export const useRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm<TypeRegistrationForm>({
    resolver: zodResolver(regSchema),
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onSubmitRegister: SubmitHandler<TypeRegistrationForm> = async (data) => {
    try {
      const newUser = await createUserWithEmailAndPassword(auth, data.email, data.password);

      const user = newUser.user;

      await updateProfile(user, { displayName: data.displayName });

      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        email: data.email,
        name: data.displayName,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      if (newUser) {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        reset();
        navigate(pageRouter.PROFILE);
        toast.success("Account created successfully!");
      }
    } catch (error) {
      if (error instanceof FirebaseError) {
        let message = "Registration failed";

        switch (error.code) {
          case "auth/email-already-in-use":
            message = "This email is already registered";
            break;
          case "auth/invalid-email":
            message = "Invalid email format";
            break;
          case "auth/weak-password":
            message = "Password should be at least 6 characters";
            break;
          case "auth/network-request-failed":
            message = "Network error. Please check your connection.";
            break;
          default:
            message = error.message;
        }
        toast.error(message);
      } else {
        toast.error("Unexpected error. Please try again.");
      }
    }
  };

  return { register, handleSubmit, errors, isSubmitted, reset, onSubmitRegister };
};

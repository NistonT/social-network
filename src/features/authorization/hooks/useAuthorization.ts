import { auth } from "@/app/main";
import { pageRouter } from "@/shared/constants/page-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import z from "zod";

const authSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type TypeAuthorizationForm = z.infer<typeof authSchema>;

export const useAuthorization = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TypeAuthorizationForm>({
    resolver: zodResolver(authSchema),
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onSubmitAuth: SubmitHandler<TypeAuthorizationForm> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      reset();
      navigate(pageRouter.PROFILE);
      toast.success("Successfully authorized!");
    } catch (error) {
      if (error instanceof FirebaseError) {
        let message = "An error occurred during sign in";

        switch (error.code) {
          case "auth/invalid-credential":
          case "auth/user-not-found":
          case "auth/wrong-password":
            message = "Invalid email or password";
            break;
          case "auth/network-request-failed":
            message = "Network error. Please check your internet connection.";
            break;
          case "auth/too-many-requests":
            message = "Too many attempts. Please try again later or reset your password.";
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

  const onSubmitAuthGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Successfully authorized!");
      navigate(pageRouter.PROFILE);
    } catch (error) {
      if (error instanceof FirebaseError) {
        toast.error("Unexpected error during sign-in");
      }
    }
  };

  return { register, handleSubmit, onSubmitAuth, onSubmitAuthGoogle, isSubmitting, errors };
};

import { auth } from "@/app/main";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
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

  const onSubmitRegister: SubmitHandler<TypeRegistrationForm> = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        const message = "An error occurred during sign in";

        toast.error(message);
      } else {
        toast.error("Unexpected error. Please try again.");
      }
    }
  };

  return { register, handleSubmit, errors, isSubmitted, reset, onSubmitRegister };
};

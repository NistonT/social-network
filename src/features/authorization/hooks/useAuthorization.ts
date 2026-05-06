import { auth } from '@/app/main'
import type { IAuthorization } from '@/shared/model/types/auth'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export const useAuthorization = () => {
	  const { register, handleSubmit } = useForm<IAuthorization>();

  const navigate = useNavigate();

  const onSubmitAuth: SubmitHandler<IAuthorization> = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    navigate("/");
  };

  const onSubmitAuthGoogle = () => {
    const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
    .then(() => {})
    .catch((error) => {
      console.error(error);
    });
    navigate("/");
  };

	return { register, handleSubmit, onSubmitAuth, onSubmitAuthGoogle };
};

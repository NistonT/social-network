
import { auth } from '@/app/main'
import type { RootState } from '@/app/store/store'
import { deleteUser } from '@/entities/auth/store/userSlice'
import { Message } from '@/widgets/Message'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export const App = () => {

	const {user, isAuthChecked} = useSelector((state: RootState) => state.user);
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuthChecked) {
			return;
		}

		if (!user) {
			navigate("/auth")
		}
	}, [user, navigate, isAuthChecked])

	
	const dispatch = useDispatch();

	const handleCloseUser = () => {
		dispatch(deleteUser());
		auth.signOut();
		navigate("/auth")
		localStorage.removeItem("refreshToken")
	}
	  if (!isAuthChecked) {
        return <div>Loading...</div>;
    }

	return <div>Hello <div>{user?.name || "user"}</div> <div>{user?.email}</div> <div>{user?.id}</div>
	<div><Message /></div>
		<button onClick={handleCloseUser}>Close</button>
	</div>;
};

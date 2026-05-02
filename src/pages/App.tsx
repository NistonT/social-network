
import type { RootState } from '@/app/store/store'
import { deleteUser } from '@/entities/auth/store/userSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export const App = () => {

	const user = useSelector((state: RootState) => state.user.user);
	const navigate = useNavigate()

	useEffect(() => {
		if (!user) {
			navigate("/auth")
		}
	}, [user, navigate])

	const dispatch = useDispatch();

	const handleCloseUser = () => {
		dispatch(deleteUser());
		navigate("/auth")
		localStorage.removeItem("refreshToken")
	}

	return <div>Hello world
		<button onClick={handleCloseUser}>Close</button>
	</div>;
};

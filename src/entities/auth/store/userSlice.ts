import type { IUser } from '@/shared/model/types/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserSlice {
	user: IUser | null;
}

const initialState: IUserSlice = {
	user: null
}

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		addUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},
		deleteUser(state) {
			state.user = null;
		}
	}
})

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
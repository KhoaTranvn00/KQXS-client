import authApi from "api/user/authApi";
import { ACCESS_TOKEN_NAME } from "constant";
import setToken from "utils/setToken";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadUser = createAsyncThunk("user/loadUser", async () => {
	if (localStorage.getItem(ACCESS_TOKEN_NAME)) {
		setToken(localStorage.getItem(ACCESS_TOKEN_NAME));
	} else setToken(null);
	const userCurrent = await authApi.loadUser();
	return userCurrent;
});

const userSlice = createSlice({
	name: "user",
	initialState: {
		isLoading: false,
		isLogin: false,
		user: null,
		notify: [],
	},
	reducers: {},
	extraReducers: {
		[loadUser.pending]: (state, action) => {
			state.isLoading = true;
		},
		[loadUser.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.isLogin = true;
			state.user = action.payload.user;
		},
		[loadUser.rejected]: (state, action) => {
			state.isLoading = false;
			state.isLogin = false;
			state.user = null;
		},
	},
});

const { actions, reducer } = userSlice;
export const {} = actions;
export default reducer;

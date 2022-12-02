import authApi from "api/admin/authApi";
import { ACCESS_TOKEN_ADMIN_NAME } from "constant";
import setToken from "utils/setToken";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadadmin = createAsyncThunk("admin/loadadmin", async () => {
	if (localStorage.getItem(ACCESS_TOKEN_ADMIN_NAME)) {
		setToken(localStorage.getItem(ACCESS_TOKEN_ADMIN_NAME));
	} else setToken(null);
	const adminCurrent = await authApi.loadAdmin();
	return adminCurrent;
});

const adminSlice = createSlice({
	name: "admin",
	initialState: {
		isLoading: true,
		isLogin: false,
		admin: null,
		notify: [],
	},
	reducers: {},
	extraReducers: {
		[loadadmin.pending]: (state, action) => {
			state.isLoading = true;
		},
		[loadadmin.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.isLogin = true;
			state.admin = action.payload.admin;
		},
		[loadadmin.rejected]: (state, action) => {
			state.isLoading = false;
			state.isLogin = false;
			state.admin = null;
		},
	},
});

const { actions, reducer } = adminSlice;
export const {} = actions;
export default reducer;

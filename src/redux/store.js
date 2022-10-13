import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import adminReducer from "./adminSlice";

const rootReducer = {
	user: userReducer,
	admin: adminReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;

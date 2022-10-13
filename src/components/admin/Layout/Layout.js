import React, { useEffect } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadadmin } from "redux/adminSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const Layout = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			try {
				const actionResult = await dispatch(loadadmin());
				const currentUser = unwrapResult(actionResult);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<div className="layout">
			<Sidebar style={{ width: "200px" }} />
			<div className="container">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default Layout;

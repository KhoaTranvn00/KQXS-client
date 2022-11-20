import Footer from "components/user/layout/Footer/Footer";
import Header from "components/user/layout/Header/Header";
import Nav from "components/user/layout/Nav/Nav";
import React from "react";
import { useSelector } from "react-redux";

import { Outlet, Navigate } from "react-router-dom";
import SidebarAccount from "./SidebarAccountAgent/SidebarAccountAgent";

const AccountAgent = () => {
	const userState = useSelector((state) => state.user);
	const { user, isLoading } = userState;
	if (isLoading) return <h1>Loading...</h1>;
	return user !== null ? (
		<>
			<Header />
			<Nav />
			<div className="container">
				<SidebarAccount />
				<div>
					<Outlet />
				</div>
				<img
					src="/asset/img/dst.gif"
					alt=""
					class="sidebar__img"
					style={{ marginTop: "0px" }}
				/>
			</div>
			<Footer />
		</>
	) : (
		// <Navigate to="/auth/login" />
		<></>
	);
};

export default AccountAgent;

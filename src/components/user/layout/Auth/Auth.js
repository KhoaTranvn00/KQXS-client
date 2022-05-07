import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = () => {
	const userState = useSelector((state) => state.user);
	const { isLoading, isLogin, user } = userState;
	if (isLoading) return <h1>Loading...</h1>;
	return (
		<>
			{!isLogin ? (
				<>
					<Header />
					<Nav />
					<Outlet />
					<Footer />
				</>
			) : (
				<Navigate to="/" />
			)}
		</>
	);
};

export default Auth;

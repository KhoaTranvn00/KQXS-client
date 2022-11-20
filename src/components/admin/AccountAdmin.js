import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AccountAdmin = () => {
	const adminState = useSelector((state) => state.admin);
	const { admin, isLoading } = adminState;
	if (isLoading) return <h1>Loading...</h1>;
	else
		return admin !== null ? (
			<>
				<Outlet />
			</>
		) : (
			// <Navigate to="/admin/dang-nhap" />
			<></>
		);
};

export default AccountAdmin;

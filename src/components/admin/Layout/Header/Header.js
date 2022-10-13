import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN_ADMIN_NAME } from "constant";
import { unwrapResult } from "@reduxjs/toolkit";
import { loadadmin } from "redux/adminSlice";

const Header = () => {
	const adminState = useSelector((state) => state.admin);
	const dispatch = useDispatch();

	const { admin, isLoading } = adminState;
	if (isLoading) return <h1>Loading...</h1>;

	const handleLogout = async () => {
		localStorage.removeItem(ACCESS_TOKEN_ADMIN_NAME);
		try {
			const actionResult = await dispatch(loadadmin());
			const currentUser = unwrapResult(actionResult);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="header-admin">
			<h1>Quản lý KQXS Minh Ngọc</h1>
			<div className="auth">
				{admin && (
					<>
						<span>Xin chao, {admin.username}</span>
						<button className="a" onClick={handleLogout}>
							Đăng xuất
						</button>
					</>
				)}
				{!admin && <Link to="/admin/dang-nhap">Đăng nhập</Link>}
			</div>
		</div>
	);
};

export default Header;

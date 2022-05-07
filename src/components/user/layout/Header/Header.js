import React from "react";
import "./Header.css";
import HeaderForm from "./HeaderForm/HeaderForm";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN_NAME } from "constant";
import { loadUser } from "redux/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const Header = () => {
	const userState = useSelector((state) => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = async () => {
		localStorage.removeItem(ACCESS_TOKEN_NAME);
		try {
			const actionResult = await dispatch(loadUser());
			const currentUser = unwrapResult(actionResult);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="header-top">
				<strong>
					www.minhngoc.com.vn - Mạng xổ số Việt Nam - Minh Ngọc™ - Đổi Số Trúng
				</strong>
				{userState.user ? (
					<div className="header-top-right">
						Chào bạn: {userState.user.username} | <Link to="">Mua ve do</Link> |{" "}
						<button className="a" onClick={handleLogout}>
							Đăng xuất
						</button>
					</div>
				) : (
					<div className="header-top-right">
						<Link to="/auth/register">Đăng kí</Link> |
						<Link to="/auth/login">Đăng nhập</Link>
					</div>
				)}
			</div>
			<header className="header">
				<div className="header__logo">
					<Link to="/">
						<img src="/asset/img/logo.png" alt="" />
					</Link>
				</div>
				<div className="header__main">
					<div className="header__content">
						<strong className="header__sus">
							CHUYÊn TRANG KẾT QUẢ XỔ SỐ KIẾN THIẾT
						</strong>
						<h1 className="header__name">MINH NGỌC</h1>
					</div>
				</div>
				<HeaderForm />
			</header>
		</>
	);
};

export default Header;

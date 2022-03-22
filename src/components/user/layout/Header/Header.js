import React from "react";
import "./Header.css";
import HeaderForm from "./HeaderForm/HeaderForm";
import { Link } from "react-router-dom";

const Header = () => {
	return (
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
	);
};

export default Header;

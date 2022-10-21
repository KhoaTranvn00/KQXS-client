import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SidebarAccount.css";

const SidebarAccountAgent = () => {
	const userState = useSelector((state) => state.user);
	const { user, isLoading } = userState;
	return (
		<div>
			<div className="sidebar-account">
				<strong>Chao {user && user.username}</strong>
				<Link to="thong-bao">Thông báo</Link>
				<Link to="dang-ve-so">Đăng vé số</Link>
				<Link to="ve-da-dang">Quản lý vé bán</Link>
			</div>
		</div>
	);
};

export default SidebarAccountAgent;

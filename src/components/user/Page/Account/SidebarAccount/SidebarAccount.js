import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./SidebarAccount.css";

const SidebarAccount = () => {
	const userState = useSelector((state) => state.user);
	const { user, isLoading } = userState;
	return (
		<div>
			<div className="sidebar-account">
				<strong>Chao {user && user.username}</strong>
				<Link to="thong-bao">Thông báo</Link>
				<Link to="mua-ve-so">Mua vé số</Link>
				<Link to="ve-da-mua">Vé đã mua</Link>
			</div>
		</div>
	);
};

export default SidebarAccount;

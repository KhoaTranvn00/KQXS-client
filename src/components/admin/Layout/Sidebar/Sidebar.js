import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar-admin">
			<div className="header">Dashboard</div>
			<ul>
				<li>
					<Link to="/admin/account/dat-kqxs">Đặt KQXS</Link>
				</li>
				<li>
					<Link to="/admin/account/quan-ly-ve-mua">Quản lý vé số đã mua</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;

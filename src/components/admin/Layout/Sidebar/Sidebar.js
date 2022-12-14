import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar-admin">
			<div className="header">Dashboard</div>
			<ul>
				<li>
					<Link to="/admin/account/dat-kqxs">Lấy KQXS</Link>
				</li>
				<li>
					<Link to="/admin/account/quan-ly-ve-mua">Quản lý vé số</Link>
				</li>
				<li>
					<Link to="/admin/account/them-dai-ly">Thêm đại lý</Link>
				</li>
				<li>
					<Link to="/admin/account/bao-cao">Thống kê vé số</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;

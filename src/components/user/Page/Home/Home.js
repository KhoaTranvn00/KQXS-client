import Footer from "components/user/layout/Footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layout/Header/Header";
import MyCalendar from "../../layout/MyCalendar/MyCalendar";
import Nav from "../../layout/Nav/Nav";
import SideBar from "../../layout/Sidebar/Sidebar";
import "./Home.css";

const Home = () => {
	return (
		<div>
			<Header />
			<Nav />
			<div className="container">
				<div className="left">
					<SideBar />
				</div>
				<div className="main">
					<Outlet />
				</div>
				<div className="right">
					<MyCalendar style={{ marginBottom: "20px" }} />
					<img src="/asset/img/dst.gif" alt="" class="sidebar__img" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;

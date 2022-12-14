import { unwrapResult } from "@reduxjs/toolkit";
import AccountAdmin from "components/admin/AccountAdmin";
import LoginAdmin from "components/admin/auth/Login/LoginAdmin";
import Chart from "components/admin/Chart/Chart";
import Layout from "components/admin/Layout/Layout";
import QLVM from "components/admin/QLVM/QLVM";
import SetKQXS from "components/admin/SetKQXS/SetKQXS";
import ThemDaiLy from "components/admin/TheoDaiLy/ThemDaiLy";
import AccountAgent from "components/agent/AccountAgent/AccountAgent";
import PostedLottery from "components/agent/PostedLottery/PostedLottery";
import PostLottery from "components/agent/PostLottery/PostLottery";
import ThongBaoAgent from "components/agent/ThongBaoAgent/ThongBaoAgent";
import Login from "components/user/auth/Login/Login";
import Register from "components/user/auth/Login/Register";
import BoughtLottery from "components/user/BoughtLottery/BoughtLottery";
import BuyLottery from "components/user/BuyLottery/BuyLottery";
import DoiMatKhau from "components/user/DoiMatKhau/DoiMatKhau";
import DaiMB from "components/user/KQXS/MB/DaiMB/DaiMB";
import ThuMB from "components/user/KQXS/MB/ThuMB/ThuMB";
import DaiNgayMN from "components/user/KQXS/MN/DaiNgayMN/DaiNgayMN";
import NgayMN from "components/user/KQXS/MN/NgayMN/NgayMN";
import DaiNgayMT from "components/user/KQXS/MT/DaiNgayMT/DaiNgayMT";
import NgayMT from "components/user/KQXS/MT/NgayMT/NgayMT";
import ThuMT from "components/user/KQXS/MT/ThuMT/ThuMT";
import Auth from "components/user/layout/Auth/Auth";
import LotteryBought from "components/user/LotteryBought/LotteryBought";
import Notify from "components/user/Notify/Notify";
import Account from "components/user/Page/Account/Account";
import { Pay } from "components/user/Pay/Pay";
import ThongBaoUser from "components/user/ThongBaoUser/ThongBaoUser";
import ThongTinUser from "components/user/ThongTinUser/ThongTinUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadUser } from "redux/userSlice";
import "./App.css";
import DaiMN from "./components/user/KQXS/MN/DaiMN/DaiMN";
import ThuMN from "./components/user/KQXS/MN/ThuMN/ThuMN";
import DaiMT from "./components/user/KQXS/MT/DaiMT/DaiMT";
import Home from "./components/user/Page/Home/Home";
import Landing from "./components/user/Page/Landing/Landing";
import Test from "./components/user/Page/Test";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			try {
				const actionResult = await dispatch(loadUser());
				const currentUser = unwrapResult(actionResult);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/kqxs" element={<Home />}>
					<Route path="mien-nam">
						<Route path="ngay/:ngay" element={<NgayMN />} />
						<Route path="thu/:slug" element={<ThuMN />} />
						<Route path=":dai/:ngay" element={<DaiNgayMN />} />
						<Route path=":dai" element={<DaiMN />} />
					</Route>
					<Route path="mien-trung">
						<Route path="thu/:slug" element={<ThuMT />} />
						<Route path="ngay/:ngay" element={<NgayMT />} />
						<Route path=":dai/:ngay" element={<DaiNgayMT />} />
						<Route path=":dai" element={<DaiMT />} />
					</Route>
					<Route path="mien-bac">
						<Route path="ngay/:id" element={<Test />} />
						<Route path="thu/:slug" element={<ThuMB />} />
						<Route path=":dai" element={<DaiMB />} />
					</Route>
				</Route>
				<Route path="auth" element={<Auth />}>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
				<Route path="account" element={<Account />}>
					<Route path="mua-ve-so" element={<BuyLottery />} />
					<Route path="ve-da-mua" element={<BoughtLottery />} />
					<Route path="thong-bao" element={<ThongBaoUser />} />
					<Route path="thong-tin-tai-khoan" element={<ThongTinUser />} />
					<Route path="doi-mat-khau" element={<DoiMatKhau />} />
					<Route path="pay" element={<Pay />} />
				</Route>
				<Route path="admin" element={<Layout />}>
					<Route path="dang-nhap" element={<LoginAdmin />} />
					<Route path="account" element={<AccountAdmin />}>
						<Route path="bao-cao" element={<Chart />} />
						<Route path="dat-kqxs" element={<SetKQXS />} />
						<Route path="quan-ly-ve-mua" element={<QLVM />} />
						<Route path="them-dai-ly" element={<ThemDaiLy />} />
					</Route>
				</Route>
				<Route path="agent" element={<AccountAgent />}>
					<Route path="dang-ve-so" element={<PostLottery />} />
					<Route path="ve-da-dang" element={<PostedLottery />} />
					<Route path="thong-bao" element={<ThongBaoAgent />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;

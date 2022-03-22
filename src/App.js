import DaiMB from "components/user/KQXS/MB/DaiMB/DaiMB";
import ThuMB from "components/user/KQXS/MB/ThuMB/ThuMB";
import DaiNgayMN from "components/user/KQXS/MN/DaiNgayMN/DaiNgayMN";
import NgayMN from "components/user/KQXS/MN/NgayMN/NgayMN";
import DaiNgayMT from "components/user/KQXS/MT/DaiNgayMT/DaiNgayMT";
import NgayMT from "components/user/KQXS/MT/NgayMT/NgayMT";
import ThuMT from "components/user/KQXS/MT/ThuMT/ThuMT";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import DaiMN from "./components/user/KQXS/MN/DaiMN/DaiMN";
import ThuMN from "./components/user/KQXS/MN/ThuMN/ThuMN";
import DaiMT from "./components/user/KQXS/MT/DaiMT/DaiMT";
import Home from "./components/user/Page/Home/Home";
import Landing from "./components/user/Page/Landing/Landing";
import Test from "./components/user/Page/Test";

function App() {
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
			</Routes>
		</Router>
	);
}

export default App;

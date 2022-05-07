import userApi from "api/user/userApi";
import React, { useEffect, useState } from "react";
import "./LotteryBought.css";
import { Link } from "react-router-dom";

const LotteryBought = () => {
	const [veDaMuas, setVeDaMuas] = useState(null);
	useEffect(() => {
		(async () => {
			try {
				const response = await userApi.veDaMua();
				if (response.success) {
					setVeDaMuas(response.veDaMuas);
				}
			} catch (error) {
				console.log(error);
			}
			console.log(1);
		})();
	}, []);

	function padTo2Digits(num) {
		return num.toString().padStart(2, "0");
	}

	function formatDate(date) {
		return [
			padTo2Digits(date.getDate()),
			padTo2Digits(date.getMonth() + 1),
			date.getFullYear(),
		].join("-");
	}

	return (
		<div className="lottery-bought">
			<h1>Danh sách vé đã mua</h1>
			{veDaMuas && veDaMuas.length === 0 && (
				<p>
					Bạn chưa mua vé số nào <Link to="../mua-ve-so">nhấn vào đây</Link> để
					mua vé số
				</p>
			)}
			{veDaMuas && veDaMuas.length > 0 && (
				<table>
					<tr>
						<th>STT</th>
						<th>Vé số</th>
						<th>Số lượng</th>
						<th>Đài</th>
						<th>Ngày mua</th>
						<th>Trạng thái</th>
						<th>Xem vé dò</th>
					</tr>
					{veDaMuas.map((veDaMua, index) => (
						<tr>
							{}
							<td>{index + 1}</td>
							<td>{veDaMua.veso}</td>
							<td>{veDaMua.soluong}</td>
							<td>{veDaMua.daiId.ten}</td>
							<td>{formatDate(new Date(veDaMua.ngay))}</td>
							{veDaMua.status === 0 ? (
								<td style={{ backgroundColor: "#ffcc009e" }}>Chưa dò</td>
							) : veDaMua.status === 1 ? (
								<td style={{ backgroundColor: "#ff0000d6" }}>Không trúng</td>
							) : (
								<td style={{ backgroundColor: "#6fff00d6" }}>Trúng thưởng</td>
							)}
							<td>
								<Link
									to={`/kqxs/mien-nam/${veDaMua.daiId.slug}/${formatDate(
										new Date(veDaMua.ngay)
									)}`}
								>
									Xem
								</Link>
							</td>
						</tr>
					))}
				</table>
			)}
		</div>
	);
};

export default LotteryBought;

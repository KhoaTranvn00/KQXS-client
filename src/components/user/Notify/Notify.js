import userApi from "api/user/userApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Notify.css";

const Notify = () => {
	const [thongBaos, setThongBaos] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await userApi.thongBao();
				if (response.success) {
					setThongBaos(response.thongbaos);
				}
			} catch (error) {
				console.log(error);
			}
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
		<div className="notify">
			<h1>Danh sách vé đã mua</h1>
			{thongBaos && thongBaos.length === 0 && (
				<p>
					Bạn chưa có thông báo nào <Link to="../mua-ve-so">nhấn vào đây</Link>{" "}
					để mua vé số
				</p>
			)}
			{thongBaos && thongBaos.length > 0 && (
				<table>
					<tr>
						<th>STT</th>
						<th>Thông báo</th>
						<th>Xem vé dò</th>
					</tr>
					{thongBaos.map((thongbao, index) => (
						<tr
							style={{
								backgroundColor: `${
									thongbao.status ? "#6fff00d6" : "#ff0000d6 "
								}`,
							}}
						>
							{}
							<td>{index + 1}</td>
							<td>{thongbao.message}</td>

							<td>
								<Link
									to={`/kqxs/mien-nam/${
										thongbao.veMuaId.daiId.slug
									}/${formatDate(new Date(thongbao.veMuaId.ngay))}`}
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

export default Notify;

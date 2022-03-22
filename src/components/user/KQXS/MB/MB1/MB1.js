import React from "react";
import formatDate from "utils/formatDate";
import "./MB1.css";
const MB1 = ({ info }) => {
	const { dai, ketqua, ngay } = info;
	console.log(info);
	return (
		<div className="kqxsmb1d">
			<div className="xs-header">
				<div className="xs-header-left">
					<span>
						KẾT QUẢ XỔ SỐ {dai.ten} -{" "}
						{formatDate.dayMonthFromDate(new Date(ngay))}
					</span>
				</div>
			</div>
			<table className="xs xsmb">
				<tr className="gdb">
					<td className="gl">Giai DB</td>
					<td className="">
						<div className="giai">
							<div className="giaiso">{ketqua[0][0]}</div>
						</div>
					</td>
				</tr>
				<tr className="g1">
					<td className="gl">Giai nhất</td>
					<td>
						<div className="giai">
							<div className="giaiso">{ketqua[1][0]}</div>
						</div>
					</td>
				</tr>
				<tr className="g2">
					<td className="gl">Giai nhì</td>
					<td>
						<div className="giai">
							<div className="giaiso">{ketqua[2][0]}</div>
							<div className="giaiso">{ketqua[2][1]}</div>
						</div>
					</td>
				</tr>
				<tr className="g3">
					<td className="gl">Giai ba</td>
					<td>
						<div className="giai">
							<div className="giaiso">{ketqua[3][0]}</div>
							<div className="giaiso">{ketqua[3][1]}</div>
							<div className="giaiso">{ketqua[3][2]}</div>
							<div className="giaiso">{ketqua[3][3]}</div>
							<div className="giaiso">{ketqua[3][4]}</div>
							<div className="giaiso">{ketqua[3][5]}</div>
						</div>
					</td>
				</tr>
				<tr className="g4">
					<td className="gl">Giai tư</td>
					<td>
						<div className="giai">
							{ketqua[4].map((kq) => (
								<div className="giaiso">{kq}</div>
							))}
						</div>
					</td>
				</tr>
				<tr className="g5">
					<td className="gl">Giai năm</td>
					<td>
						<div className="giai">
							<div className="giaiso">{ketqua[5][0]}</div>
							<div className="giaiso">{ketqua[5][1]}</div>
							<div className="giaiso">{ketqua[5][2]}</div>
							<div className="giaiso">{ketqua[5][3]}</div>
							<div className="giaiso">{ketqua[5][4]}</div>
							<div className="giaiso">{ketqua[5][5]}</div>
						</div>
					</td>
				</tr>
				<tr className="g6">
					<td className="gl">Giai sáu</td>
					<td>
						<div className="giai">
							<div className="giaiso">{ketqua[6][0]}</div>
							<div className="giaiso">{ketqua[6][1]}</div>
							<div className="giaiso">{ketqua[6][2]}</div>
						</div>
					</td>
				</tr>
				<tr className="g7">
					<td className="gl">Giai bảy</td>
					<td>
						<div className="giai">
							<div className="giaiso">{ketqua[7][0]}</div>
							<div className="giaiso">{ketqua[7][1]}</div>
							<div className="giaiso">{ketqua[7][2]}</div>
							<div className="giaiso">{ketqua[7][3]}</div>
						</div>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default MB1;

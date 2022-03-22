import React from "react";
import formatDate from "../../../../../utils/formatDate";
import "./MT1.css";

const MT1 = ({ info }) => {
	const { dai, ketqua, ngay } = info;
	return (
		<div className="kqxsmt1d">
			<div className="xs-header">
				<div className="xs-header-left">
					<span>
						KẾT QUẢ XỔ SỐ {dai.ten} -{" "}
						{formatDate.dayMonthFromDate(new Date(ngay))}
					</span>
				</div>
				<div className="xs-header-right">
					<span className="xs-header-lv">Loại vé: AG-1K2</span>
				</div>
			</div>
			<table className="xs xsmn">
				<tr className="gdb">
					<td className="gl">Giai DB</td>
					<td className="">
						<div className="giai">
							<div className="giaiso">309921</div>
						</div>
					</td>
				</tr>
				<tr className="g1">
					<td className="gl">Giai nhất</td>
					<td>
						<div className="giai">
							<div className="giaiso">44173</div>
						</div>
					</td>
				</tr>
				<tr className="g2">
					<td className="gl">Giai nhì</td>
					<td>
						<div className="giai">
							<div className="giaiso">48149</div>
						</div>
					</td>
				</tr>
				<tr className="g3">
					<td className="gl">Giai ba</td>
					<td>
						<div className="giai">
							<div className="giaiso">10090</div>
							<div className="giaiso">27011</div>
						</div>
					</td>
				</tr>
				<tr className="g4">
					<td className="gl">Giai tư</td>
					<td>
						<div className="giai">
							<div className="giaiso">12849</div>
							<div className="giaiso">59312</div>
							<div className="giaiso">58886</div>
							<div className="giaiso">96676</div>
							<div className="giaiso">15886</div>
							<div className="giaiso">62902</div>
							<div className="giaiso">28628</div>
						</div>
					</td>
				</tr>
				<tr className="g5">
					<td className="gl">Giai năm</td>
					<td>
						<div className="giai">
							<div className="giaiso">0763</div>
						</div>
					</td>
				</tr>
				<tr className="g6">
					<td className="gl">Giai sáu</td>
					<td>
						<div className="giai">
							<div className="giaiso">1846</div>
							<div className="giaiso">9767</div>
							<div className="giaiso">4164</div>
						</div>
					</td>
				</tr>
				<tr className="g7">
					<td className="gl">Giai bảy</td>
					<td>
						<div className="giai">
							<div className="giaiso">675</div>
						</div>
					</td>
				</tr>
				<tr className="g8">
					<td className="gl">Giai tám</td>
					<td>
						<div className="giai">
							<div className="giaiso">64</div>
						</div>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default MT1;

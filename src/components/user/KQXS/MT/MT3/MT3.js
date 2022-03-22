import React from "react";
import formatDate from "utils/formatDate";
import "./MT3.css";
import { Link } from "react-router-dom";

const MT3 = ({ info }) => {
	const { ngay, thu, ketqua } = info;
	console.log(ketqua);
	return (
		<div className="kqxsmn1d">
			<div className="xs-header">
				<div className="xs-header-left">
					<span>
						KẾT QUẢ XỔ SỐ MIỀN TRUNG -{" "}
						{formatDate.dayMonthFromDate(new Date(ngay))}
					</span>
				</div>
			</div>
			<div className="xs xsmn3d">
				<div className="loaigiai">
					<div className="title">{thu}</div>
					<div className="lg8">Giải 8</div>
					<div className="lg7">Giải 7</div>
					<div className="lg6">Giải 6</div>
					<div className="lg5">Giải 5</div>
					<div className="lg4">Giải 4</div>
					<div className="lg3">Giải 3</div>
					<div className="lg2">Giải 2</div>
					<div className="lg1">Giải 1</div>
					<div className="lgdb">Giải DB</div>
				</div>
				<div className="ketqua">
					{ketqua.map((dai) => (
						<div className="dai">
							<Link to={`../${dai.dai.slug}`} className="ten-dai gs">
								{dai.dai.ten}
							</Link>
							<div className="giai8 gs">
								<div className="giaiso">{dai.ketqua[8][0]}</div>
							</div>
							<div className="giai7 gs">
								<div className="giaiso">{dai.ketqua[7][0]}</div>
							</div>
							<div className="giai6 gs">
								<div className="giaiso">{dai.ketqua[6][0]}</div>
								<div className="giaiso">{dai.ketqua[6][1]}</div>
								<div className="giaiso">{dai.ketqua[6][2]}</div>
							</div>
							<div className="giai5 gs">
								<div className="giaiso">{dai.ketqua[5][0]}</div>
							</div>
							<div className="giai4 gs">
								<div className="giaiso">{dai.ketqua[4][0]}</div>
								<div className="giaiso">{dai.ketqua[4][1]}</div>
								<div className="giaiso">{dai.ketqua[4][2]}</div>
								<div className="giaiso">{dai.ketqua[4][3]}</div>
								<div className="giaiso">{dai.ketqua[4][4]}</div>
								<div className="giaiso">{dai.ketqua[4][5]}</div>
								<div className="giaiso">{dai.ketqua[4][6]}</div>
							</div>
							<div className="giai3 gs">
								<div className="giaiso">{dai.ketqua[3][0]}</div>
								<div className="giaiso">{dai.ketqua[3][1]}</div>
							</div>
							<div className="giai2 gs">
								<div className="giaiso">{dai.ketqua[2][0]}</div>
							</div>
							<div className="giai1 gs">
								<div className="giaiso">{dai.ketqua[1][0]}</div>
							</div>
							<div className="giaidb gs">
								<div className="giaiso">{dai.ketqua[0][0]}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default MT3;

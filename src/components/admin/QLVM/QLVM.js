import adminApi from "api/admin/adminApi";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import formatDate from "utils/formatDate";
import "./QLVM.css";
import { Link } from "react-router-dom";

const QLVM = () => {
	// Filter
	const [tg, setTg] = useState(null);
	const [status, setStatus] = useState(-1);
	const [veMuas, setVeMuas] = useState([]);
	const [tongSoVe, setTongSoVe] = useState(0);
	const [sort, setSort] = useState({});
	const filter = { tg, status };

	const tgOptions = [
		{ label: "Hôm nay", value: "today" },
		{ label: "3 ngày gần nhất", value: "3dago" },
		{ label: "Trong tháng", value: "month" },
	];

	const statusOptions = [
		{ label: "Trúng thưởng", value: "2" },
		{ label: "Không trúng thưởng", value: "1" },
		{ label: "Chưa có kết quả", value: "0" },
	];

	useEffect(() => {
		(async () => {
			try {
				const response = await adminApi.getVeMua();
				if (response.success) {
					// console.log(response);
					setVeMuas(response.veMuas);
					setTongSoVe(response.tongSoVe);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const handleSortClick = (target) => {
		console.log(target);
		if (sort.hasOwnProperty(target)) {
			setSort({
				[target]: !sort[target],
			});
		} else {
			setSort({ [target]: true });
		}
	};

	useEffect(() => {
		console.log(sort);
		function compare(a, b) {
			if (a[Object.keys(sort)[0]] < b[Object.keys(sort)[0]]) {
				return sort[Object.keys(sort)[0]] ? -1 : 1;
			}
			if (a[Object.keys(sort)[0]] > b[Object.keys(sort)[0]]) {
				return sort[Object.keys(sort)[0]] ? 1 : -1;
			}
			return 0;
		}
		console.log("effect");
		console.log(sort);
		setVeMuas((preVeMuas) => preVeMuas.sort(compare));
	}, [sort]);
	console.log("re-render");

	const handleOnFilterSubmit = async (e) => {
		e.preventDefault();
		const params = { tg: tg.value || null, status: status.value || null };
		try {
			const response = await adminApi.getVeMua(params);
			if (response.success) {
				console.log("filter response");
				console.log(response);
				setVeMuas(response.veMuas);
				setTongSoVe(response.tongSoVe);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleRemoveFilter = async () => {
		try {
			const response = await adminApi.getVeMua();
			if (response.success) {
				// console.log(response);
				setVeMuas(response.veMuas);
				setTongSoVe(response.tongSoVe);
			}
		} catch (error) {
			console.log(error);
		}
	};

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
		<div className="qlvm setKQXS">
			<div className="lottery-form__header">Quản lý vé số đã mua</div>
			<form className="filter-form" onSubmit={handleOnFilterSubmit}>
				<div className="lottery-form__control">
					<label htlmFor="" className="lottery-form__label">
						Thời gian:
					</label>
					<Select
						name="tg"
						value={tg}
						options={tgOptions}
						onChange={setTg}
						className="lottery-form__input"
						type="text"
					/>
				</div>
				<div className="lottery-form__control">
					<label htlmFor="" className="lottery-form__label">
						Tình trạng:
					</label>
					<Select
						name="status"
						value={status}
						options={statusOptions}
						onChange={setStatus}
						className="lottery-form__input"
						type="text"
					/>
				</div>
				<button className="lottery-form__btn">Lọc dữ liệu</button>
				<span
					onClick={handleRemoveFilter}
					className="lottery-form__btn"
					style={{ marginLeft: "10px" }}
				>
					Bỏ dữ liệu
				</span>
			</form>
			{veMuas && veMuas.length === 0 && <p>Không tìm thấy kết quả</p>}
			{veMuas && veMuas.length !== 0 && (
				<table>
					<strong>Trong số vé {tongSoVe}</strong>
					<tr>
						<th>STT</th>
						<th>Vé số</th>
						<th onClick={() => handleSortClick("soluong")}>Số lượng</th>
						<th>Đài</th>
						<th onClick={() => handleSortClick("ngay")}>Ngày</th>
						<th onClick={() => handleSortClick("status")}>Trạng thái</th>
						<th>Chi tiết</th>
					</tr>
					{veMuas.map((veMua, index) => (
						<tr>
							<td>{index + 1}</td>
							<td>{veMua.veso}</td>
							<td>{veMua.soluong}</td>
							<td>{veMua.daiId.ten}</td>
							<td>{formatDate(new Date(veMua.ngay))}</td>
							{veMua.status === 0 ? (
								<td style={{ backgroundColor: "#ffcc009e" }}>Chưa dò</td>
							) : veMua.status === 1 ? (
								<td style={{ backgroundColor: "#ff0000d6" }}>Không trúng</td>
							) : (
								<td style={{ backgroundColor: "#6fff00d6" }}>Trúng thưởng</td>
							)}
							<td>
								<Link
									to={`/kqxs/mien-nam/${veMua.daiId.slug}/${formatDate(
										new Date(veMua.ngay)
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

export default QLVM;

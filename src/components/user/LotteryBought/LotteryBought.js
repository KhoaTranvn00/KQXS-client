import userApi from "api/user/userApi";
import React, { useEffect, useState } from "react";
import "./LotteryBought.css";
import { Link } from "react-router-dom";
import Select from "react-select";

const LotteryBought = () => {
	const [veDaMuas, setVeDaMuas] = useState(null);
	const [tg, setTg] = useState(null);
	const [status, setStatus] = useState(-1);
	const [sort, setSort] = useState({});

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

	const handleOnFilterSubmit = async (e) => {
		e.preventDefault();
		const params = { tg: tg.value || null, status: status.value || null };
		try {
			const response = await userApi.veDaMua(params);
			if (response.success) {
				console.log("filter response");
				console.log(response);
				setVeDaMuas(response.veDaMuas);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleRemoveFilter = async () => {
		try {
			const response = await userApi.veDaMua();
			if (response.success) {
				// console.log(response);
				setVeDaMuas(response.veDaMuas);
			}
		} catch (error) {
			console.log(error);
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
		console.log(veDaMuas);
		setVeDaMuas((preVeMuas) => (preVeMuas ? preVeMuas.sort(compare) : null));
	}, [sort]);

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
			{veDaMuas && (
				<form
					className="filter-form"
					onSubmit={handleOnFilterSubmit}
					style={{
						border: "1px solid #ccc",
						margin: "10px",
						padding: "20px",
					}}
				>
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
			)}
			{veDaMuas && veDaMuas.length > 0 && (
				<>
					<table>
						<tr>
							<th>STT</th>
							<th>Vé số</th>
							<th onClick={() => handleSortClick("soluong")}>Số lượng</th>
							<th>Đài</th>
							<th onClick={() => handleSortClick("ngay")}>Ngày mua</th>
							<th onClick={() => handleSortClick("status")}>Trạng thái</th>
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
				</>
			)}
		</div>
	);
};

export default LotteryBought;

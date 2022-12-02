import userApi from "api/user/userApi";
import utilsApi from "api/utils/utilsApi";
import React, { useEffect, useRef, useState } from "react";
import "./BoughtLottery.css";
import { Link } from "react-router-dom";
import Select from "react-select";
import Pagination from "components/utils/Pagination/Pagination";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useAlert } from "react-alert";
import compareDate from "utils/compareDate";

const BoughtLottery = () => {
	const [veDaDangs, setVeDaDangs] = useState(null);
	const [tg, setTg] = useState(null);
	const [pagination, setPagination] = useState(null);
	const [status, setStatus] = useState(null);
	const [sort, setSort] = useState({});
	const [veso, setVeso] = useState("");
	const [daiOption, setDaiOption] = useState({
		label: "chon ngay",
		value: null,
	});
	const [ngay, setNgay] = useState("");
	const [options, setOptions] = useState([{ label: "Chọn ngày", value: null }]);
	const [queryUrl, setQueryUrl] = useState("");
	const [vesoSelected, setVeSoSelected] = useState([]);

	const navigate = useNavigate();
	const search = useLocation().search;
	const page = new URLSearchParams(search).get("page");
	const [searchParams, setSearchParams] = useSearchParams();
	const url = window.location.href;
	const myRef = useRef(null);
	const alertHook = useAlert();

	const executeScroll = () => myRef.current.scrollIntoView();

	const tgOptions = [
		{ label: "Tương lai", value: "future" },
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
				const response = await userApi.getVeSoDaMua();
				if (response.success) {
					setVeDaDangs(response.vesos);
					setPagination(response.pagination);
				} else {
					setVeDaDangs([]);
				}
				const responseDai = await utilsApi.fullDaiMienNam();
				if (responseDai.success) {
					setDaiOption(responseDai.daiOption[0]);
					setOptions(responseDai.daiOption);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			if (ngay) {
				const response = await utilsApi.daiMienNamTheoNgay(ngay);
				if (response.success) {
					setDaiOption(response.daiOption[0]);
					setOptions(response.daiOption);
				}
			}
		})();
	}, [ngay]);

	useEffect(() => {
		(async () => {
			try {
				const indexQuery = url.indexOf("?");
				const query = url.slice(indexQuery + 1);
				const response = await userApi.getVeSoDaMua(query);
				if (response.success) {
					setVeDaDangs(response.vesos);
					setPagination(response.pagination);
				} else {
					setVeDaDangs([]);
					setPagination(null);
				}
				executeScroll();
			} catch (error) {
				console.log(error);
			}
		})();
	}, [url]);

	const handleSortClick = (target) => {
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
		const body = {
			veso,
			ngay,
			daiId: daiOption.value || null,
			tg: tg ? tg.value : null,
			status: status ? status.value : null,
		};
		let queryString = "";

		for (const key in body) {
			if (body[key]) {
				queryString += `&${key}=${body[key]}`;
			}
		}
		const query = queryString.slice(1);
		setSearchParams(query);

		try {
			const response = await userApi.getVeSoDaMua(query);
			if (response.success) {
				setVeDaDangs(response.vesos);
				setPagination(response.pagination);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleRemoveFilter = async () => {
		try {
			const currentUrl = window.location.href;
			let locationUrl = currentUrl.slice(7);
			const indexQuery = locationUrl.indexOf("?");
			let urlRedirect;
			if (indexQuery > 0) {
				urlRedirect = `//${locationUrl.slice(0, indexQuery)}`;
				// urlRedirect = `//${locationUrl}&page=${event.selected + 1}`;
			} else {
				urlRedirect = `//${locationUrl}`;
			}
			navigate(urlRedirect);
			// const response = await userApi.getVeSoDaMua();
			// if (response.success) {
			// 	setVeDaDangs(response.vesos);
			// 	setPagination(response.pagination);
			// }
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		function compare(a, b) {
			if (a[Object.keys(sort)[0]] < b[Object.keys(sort)[0]]) {
				return sort[Object.keys(sort)[0]] ? -1 : 1;
			}
			if (a[Object.keys(sort)[0]] > b[Object.keys(sort)[0]]) {
				return sort[Object.keys(sort)[0]] ? 1 : -1;
			}
			return 0;
		}
		setVeDaDangs((preVeMuas) => (preVeMuas ? preVeMuas.sort(compare) : null));
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

	const handleInputDateChange = (e) => {
		const today = new Date();
		const ngay = new Date(e.target.value);
		if (compareDate.compareDate(ngay, today) == 1) {
			alertHook.error("Ngày không hợp lệ");
		} else if (
			compareDate.compareDate(ngay, today) == 0 &&
			compareDate.verifyToday()
		) {
			alertHook.error("Ngày không hợp lệ");
		} else {
			setNgay(e.target.value);
		}
	};

	const handleSelectedVeSo = (veso) => {
		const index = vesoSelected.findIndex((vesoS) => vesoS._id === veso._id);
		console.log(index);
		if (index === -1) {
			setVeSoSelected([
				...vesoSelected,
				{
					...veso,
					soVeMua: 1,
				},
			]);
			alertHook.success("Thêm vé số thành công");
		} else {
			const preVeSoSelected = vesoSelected.slice(0, index);
			const nextVeSoSelected = vesoSelected.slice(index + 1);
			const currentSelected = vesoSelected[index];
			if (currentSelected.soVeMua < currentSelected.soluong) {
				currentSelected.soVeMua = currentSelected.soVeMua + 1;
				setVeSoSelected([
					...preVeSoSelected,
					currentSelected,
					...nextVeSoSelected,
				]);
				alertHook.success("Thêm vé số thành công");
			} else {
				alertHook.error("Bạn đã chọn tối đa số vé có thể chọn");
			}
		}
	};

	const handleUnSlectedVoSo = (id) => {
		setVeSoSelected(() => vesoSelected.filter((veso) => veso._id !== id));
	};

	const handleInputVeMuaChange = (e, id) => {
		const index = vesoSelected.findIndex((vesoS) => vesoS._id === id);
		const preVeSoSelected = vesoSelected.slice(0, index);
		const nextVeSoSelected = vesoSelected.slice(index + 1);
		const currentSelected = vesoSelected[index];
		currentSelected.soVeMua = e.target.value;
		console.log(currentSelected);
		setVeSoSelected([...preVeSoSelected, currentSelected, ...nextVeSoSelected]);
	};

	const handleKeyUpInputVeMua = (e, veso) => {
		if (e.target.value > veso.soluong) {
			const index = vesoSelected.findIndex((vesoS) => vesoS._id === veso._id);
			const preVeSoSelected = vesoSelected.slice(0, index);
			const nextVeSoSelected = vesoSelected.slice(index + 1);
			const currentSelected = vesoSelected[index];
			currentSelected.soVeMua = currentSelected.soluong;
			console.log(currentSelected);
			setVeSoSelected([
				...preVeSoSelected,
				currentSelected,
				...nextVeSoSelected,
			]);
		}
		console.log(e.target.value);
	};

	const handleSubmitMuaVeSo = async () => {
		const body = vesoSelected.map((veso) => ({
			_id: veso._id,
			soVeMua: veso.soVeMua,
		}));
		const response = await userApi.muaVeSo({ vemuas: body });
		if (response.success) {
			setVeDaDangs(response.vesos);
			setPagination(response.pagination);
		}
	};

	return (
		<div className="lottery-bought">
			<h1>
				Danh sách vé đã mua
				{pagination ? ` (${pagination.totalItem})` : ""}
			</h1>
			{veDaDangs && veDaDangs.length === 0 && <p>Không có kết quả phù hợp</p>}
			{veDaDangs && (
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
							Vé số:
						</label>
						<input
							name="veso"
							value={veso}
							onChange={(e) => setVeso(e.target.value)}
							className="lottery-form__input"
							type="text"
						/>
					</div>
					<div className="lottery-form__control">
						<label htlmFor="" className="lottery-form__label">
							Ngày:
						</label>
						<input
							name="ngay"
							value={ngay}
							onChange={handleInputDateChange}
							className="lottery-form__input"
							type="date"
						/>
					</div>
					<div className="lottery-form__control">
						<label htlmFor="" className="lottery-form__label">
							Tỉnh:
						</label>
						<Select
							name="dai"
							value={daiOption}
							options={options}
							onChange={setDaiOption}
							className="lottery-form__input"
							type="text"
						/>
					</div>
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
			{veDaDangs && veDaDangs.length > 0 && (
				<>
					<table>
						<tr>
							<th>STT</th>
							<th>Vé số</th>
							<th onClick={() => handleSortClick("soluong")}>Số lượng</th>
							<th onClick={() => handleSortClick("vesoId.daiId.ten")}>Đài</th>
							<th onClick={() => handleSortClick("ngay")}>Ngày sổ</th>
							<th onClick={() => handleSortClick("vesoId.status")}>
								Tính trạng
							</th>
							<th>Xem kết quả</th>
						</tr>
						{veDaDangs.map((veDaMua, index) => (
							<tr>
								{}
								<td>{index + 1}</td>
								<td>{veDaMua.vesoId.veso}</td>
								<td>{veDaMua.soluong}</td>
								<td>{veDaMua.vesoId.daiId.ten}</td>
								<td>{formatDate(new Date(veDaMua.vesoId.ngay))}</td>
								{veDaMua.vesoId.status === 0 ? (
									<td style={{ backgroundColor: "#ffcc009e" }}>Chưa dò</td>
								) : veDaMua.vesoId.status === 1 ? (
									<td style={{ backgroundColor: "#ff0000d6" }}>Không trúng</td>
								) : (
									<td style={{ backgroundColor: "#6fff00d6" }}>Trúng thưởng</td>
								)}
								{veDaMua.vesoId.status !== 0 ? (
									<td>
										<Link
											to={`/kqxs/mien-nam/${
												veDaMua.vesoId.daiId.slug
											}/${formatDate(new Date(veDaMua.vesoId.ngay))}`}
										>
											Xem
										</Link>
									</td>
								) : (
									<td>...</td>
								)}
							</tr>
						))}
					</table>
					{pagination && <Pagination pagination={pagination} />}
				</>
			)}
		</div>
	);
};

export default BoughtLottery;

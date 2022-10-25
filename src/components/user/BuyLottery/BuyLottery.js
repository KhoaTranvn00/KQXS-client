import userApi from "api/user/userApi";
import utilsApi from "api/utils/utilsApi";
import Alert from "components/utils/Alert/Alert";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import "./BuyLottery.css";

const BuyLottery = () => {
	const [ngay, setNgay] = useState(new Date());
	const [veso, setVeso] = useState("");
	const [daiOption, setDaiOption] = useState({
		label: "chon ngay",
		value: null,
	});
	const [soluong, setSoluong] = useState(1);
	const [veDeMuas, setVeDeMuas] = useState(null);
	const [sort, setSort] = useState({});
	const [alert, setAlert] = useState(null);
	const alertHook = useAlert();

	const formValue = { ngay, veso, dai: daiOption, soluong };

	const [options, setOptions] = useState([{ label: "Chọn ngày", value: null }]);

	useEffect(() => {
		(async () => {
			console.log(123);
			const response = await userApi.getVeSoDeMua();
			if (response.success) {
				setVeDeMuas(response.vesos);
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await utilsApi.daiTheoNgay(ngay);
			if (response.success) {
				setDaiOption(response.daiOption[0]);
				setOptions(response.daiOption);
			}
		})();
	}, [ngay]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (veso.length != 6) {
			alertHook.error("Vui lòng nhập đủ 6 số của vé mua");
			return;
		}
		if (!ngay || !veso || !daiOption || soluong < 1) {
			alertHook.error("Vui lòng điền đầy đủ các trường");
			return;
		}
		try {
			const response = await userApi.muaVeSo(formValue);
			console.log(response);
			if (response.success) {
				alertHook.success("Mua vé số thành công. Chúc bạn may mắn");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleInputDateChange = (e) => {
		console.log(e.target.value);
		const today = new Date();
		const ngay = new Date(e.target.value);
		if (ngay < today) {
			alertHook.error("Ngày không hợp lệ");
		} else {
			setNgay(e.target.value);
		}
	};

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
		<div className="lottery-form">
			{alert && <Alert info={alert} />}
			<div className="lottery-form__header">
				Mua vé số Online - May mắn mỗi ngày!...
			</div>
			<form onSubmit={handleSubmit} className="lottery-form__content">
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
						Số lượng:
					</label>
					<input
						name="soluong"
						value={soluong}
						onChange={(e) => {
							if (e.target.value > 0) setSoluong(e.target.value);
							else alertHook.error("Số lượng vé không được âm");
						}}
						className="lottery-form__input"
						type="number"
					/>
				</div>
				<button className="lottery-form__btn">Mua vé số</button>
			</form>
			{veDeMuas && veDeMuas.length > 0 && (
				<>
					<table>
						<tr>
							<th>STT</th>
							<th>Vé số</th>
							<th onClick={() => handleSortClick("soluong")}>Số lượng</th>
							<th>Đài</th>
							<th onClick={() => handleSortClick("ngay")}>Ngày đăng</th>
							<th onClick={() => handleSortClick("status")}>Trạng thái</th>
							<th>Xem vé dò</th>
						</tr>
						{veDeMuas.map((veDaMua, index) => (
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

export default BuyLottery;

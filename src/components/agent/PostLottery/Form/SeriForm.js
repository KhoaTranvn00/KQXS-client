import agentApi from "api/user/agentApi";
import utilsApi from "api/utils/utilsApi";
import Alert from "components/utils/Alert/Alert";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useAlert } from "react-alert";
import compareDate from "utils/compareDate";

const SeriForm = () => {
	const [ngay, setNgay] = useState(new Date());
	const [namSoSau, setnamSoSau] = useState("");
	const [kihieu, setkihieu] = useState("");
	const [daiOption, setDaiOption] = useState({
		label: "chon ngay",
		value: null,
	});
	const [soluong, setSoluong] = useState(1);
	const [alert, setAlert] = useState(null);
	const [toggleSwitch, setToggleSwitch] = useState(true);

	const alertHook = useAlert();

	const formValue = { ngay, namSoSau, dai: daiOption, soluong, kihieu };

	const [options, setOptions] = useState([{ label: "Chọn ngày", value: null }]);

	useEffect(() => {
		(async () => {
			const response = await utilsApi.daiMienNamTheoNgay(ngay);
			if (response.success) {
				setDaiOption(response.daiOption[0]);
				setOptions(response.daiOption);
			}
		})();
	}, [ngay]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (namSoSau.length != 5) {
			alertHook.error("Vui lòng nhập đúng 5 số cuối của vé mua");
			return;
		}
		if (!ngay || !namSoSau || !daiOption || soluong < 1) {
			alertHook.error("Vui lòng điền đầy đủ các trường");
			return;
		}
		try {
			console.log(formValue);
			const response = await agentApi.upLotterySeri(formValue);
			console.log(response);
			if (response.success) {
				alertHook.success(response.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleInputDateChange = (e) => {
		console.log(e.target.value);
		const today = new Date();
		const ngay = new Date(e.target.value);
		if (compareDate.compareDate(ngay, today) == 2) {
			alertHook.error("Ngày không hợp lệ");
		} else if (
			compareDate.compareDate(ngay, today) == 0 &&
			!compareDate.verifyToday()
		) {
			alertHook.error("Ngày không hợp lệ");
		} else {
			setNgay(e.target.value);
		}
	};

	return (
		<div className="lottery-form">
			{alert && <Alert info={alert} />}
			<div className="lottery-form__header">
				Đăng vé số Online - Đăng theo seri
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
						Kí hiệu:
					</label>
					<input
						name="kihieu"
						value={kihieu}
						onChange={(e) => setkihieu(e.target.value)}
						className="lottery-form__input"
						type="text"
					/>
				</div>
				<div className="lottery-form__control">
					<label htlmFor="" className="lottery-form__label">
						Vé số (5 số cuối của vé số):
					</label>
					<input
						name="namSoSau"
						value={namSoSau}
						onChange={(e) => setnamSoSau(e.target.value)}
						className="lottery-form__input"
						type="text"
					/>
				</div>
				{/* <div className="lottery-form__control">
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
				</div> */}
				<button className="lottery-form__btn">Đăng vé số theo seri</button>
			</form>
		</div>
	);
};

export default SeriForm;

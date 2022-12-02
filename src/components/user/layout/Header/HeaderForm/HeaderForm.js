import React, { useEffect, useState } from "react";
import "./HeaderForm.css";
import Select from "react-select";
import utilsApi from "api/utils/utilsApi";
import userApi from "api/user/userApi";
import Alert from "components/utils/Alert/Alert";
import { useAlert } from "react-alert";
import compareDate from "utils/compareDate";

const HeaderForm = () => {
	const [ngay, setNgay] = useState("");
	const [veso, setVeso] = useState("");
	const [daiOption, setDaiOption] = useState({
		label: "chon ngay",
		value: null,
	});
	const [alert, setAlert] = useState(null);
	const alertHook = useAlert();

	const formValue = { ngay, veso, dai: daiOption };

	const [options, setOptions] = useState([{ label: "Chọn ngày", value: null }]);

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
		try {
			const response = await userApi.doXS(formValue);
			console.log(response);
			if (response.ketqua) {
				alertHook.success(response.message);
			} else alertHook.error(response.message);
		} catch (error) {
			console.log(error);
		}
	};

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

	return (
		<div className="header-form">
			{/* {alert && <Alert info={alert} />} */}
			<div className="header-form__header">
				Dò vé số Online - May mắn mỗi ngày!...
			</div>
			<form onSubmit={handleSubmit} className="header-form__content">
				<div className="header-form__control">
					<label htlmFor="" className="header-form__label">
						Ngày:
					</label>
					<input
						name="ngay"
						value={ngay}
						onChange={handleInputDateChange}
						className="header-form__input"
						type="date"
					/>
				</div>
				<div className="header-form__control">
					<label htlmFor="" className="header-form__label">
						Tỉnh:
					</label>
					<Select
						name="dai"
						value={daiOption}
						options={options}
						onChange={setDaiOption}
						className="header-form__input"
						type="text"
					/>
				</div>
				<div className="header-form__control">
					<label htlmFor="" className="header-form__label">
						Vé số:
					</label>
					<input
						name="veso"
						value={veso}
						onChange={(e) => setVeso(e.target.value)}
						className="header-form__input"
						type="text"
					/>
				</div>
				<button className="header-form__btn">Dò kết quả</button>
			</form>
		</div>
	);
};

export default HeaderForm;

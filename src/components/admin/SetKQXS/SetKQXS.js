import adminApi from "api/admin/adminApi";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import Select from "react-select";
import "./SetKQXS.css";
import formatDate from "utils/formatDate";

const SetKQXS = () => {
	const [ngay, setNgay] = useState(new Date());
	const [mien, setMien] = useState("");

	const alertHook = useAlert();

	const options = [
		{ label: "Miền nam", value: "mien-nam" },
		{ label: "Miền trung", value: "mien-trung" },
		{ label: "Miền bắc", value: "mien-bac" },
	];

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log({ ngay, mien });
		try {
			const response = await adminApi.setKQXS(
				mien.value,
				formatDate.ymdTdmy(ngay)
			);
			console.log(response);
			if (response.success) {
				alertHook.success("Lấy KQXS thành công");
			}
		} catch (error) {
			console.log(error);
			alertHook.error("Lấy KQXS không thành công");
		}
	};

	const handleInputDateChange = (e) => {
		console.log(e.target.value);
		const today = new Date();
		const ngay = new Date(e.target.value);
		if (ngay > today) {
			alertHook.error("Ngày không hợp lệ");
		} else {
			setNgay(e.target.value);
		}
	};

	return (
		<div className="setKQXS lottery-form">
			<div className="lottery-form__header">Lấy KQXS về Website!...</div>
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
						Miền:
					</label>
					<Select
						name="dai"
						value={mien}
						options={options}
						onChange={setMien}
						className="lottery-form__input"
						type="text"
					/>
				</div>
				<button className="lottery-form__btn">Lấy KQXS</button>
			</form>
		</div>
	);
};

export default SetKQXS;

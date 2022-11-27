import adminApi from "api/admin/adminApi";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import Select from "react-select";
import "./ThemDaiLy.css";
import formatDate from "utils/formatDate";

const ThemDaiLy = () => {
	const [formValue, setFormValue] = useState({
		username: "",
		password: "",
		password2: "",
		address: "",
		phone: "",
	});

	const handleChangeValueForm = (e) => {
		setFormValue({ [e.target.name]: e.target.value });
	};

	const handleSubmit = {};

	return (
		<div className="setKQXS lottery-form">
			<div className="lottery-form__header">Thêm đại lý</div>
			<form onSubmit={handleSubmit} className="lottery-form__content themdaily">
				<div className="lottery-form__control">
					<label htlmFor="" className="lottery-form__label">
						Tên tài khoản
					</label>
					<input
						name="username"
						value={formValue.username}
						onChange={handleChangeValueForm}
						className="lottery-form__input"
					/>
				</div>
				<div className="lottery-form__control">
					<label htlmFor="" className="lottery-form__label">
						Mật khẩu
					</label>
					<input
						name="password"
						value={formValue.password}
						onChange={handleChangeValueForm}
						className="lottery-form__input"
					/>
				</div>
				<div className="lottery-form__control">
					<label htlmFor="" className="lottery-form__label">
						Xác nhận Mật khẩu
					</label>
					<input
						name="password2"
						value={formValue.password2}
						onChange={handleChangeValueForm}
						className="lottery-form__input"
					/>
				</div>
				<div className="lottery-form__control">
					<label htlmFor="" className="lottery-form__label">
						Địa chỉ
					</label>
					<input
						name="address"
						value={formValue.address}
						onChange={handleChangeValueForm}
						className="lottery-form__input"
					/>
				</div>
				<div className="lottery-form__control">
					<label htlmFor="" className="lottery-form__label">
						Số điện thoại
					</label>
					<input
						name="phone"
						value={formValue.phone}
						onChange={handleChangeValueForm}
						className="lottery-form__input"
					/>
				</div>
				<button className="lottery-form__btn">Thêm đại lý</button>
			</form>
		</div>
	);
};

export default ThemDaiLy;

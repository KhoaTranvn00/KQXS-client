import userApi from "api/user/userApi";
import utilsApi from "api/utils/utilsApi";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Pagination from "components/utils/Pagination/Pagination";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import "./DoiMatKhau.css";

const DoiMatKhau = () => {
	const userState = useSelector((state) => state.user);
	const { user, isLoading } = userState;
	const [formValue, setFormValue] = useState({
		username: "",
		password: "",
		newPassword: "",
		newPassword2: "",
	});

	const handleChangeValueForm = (e) => {
		setFormValue({ [e.target.name]: e.target.value });
	};
	console.log(user);

	if (user)
		return (
			<>
				<h1>Đổi mật khẩu</h1>
				<form
					className="filter-form doimatkhau"
					// onSubmit={handleOnFilterSubmit}
					style={{
						border: "1px solid #ccc",
						margin: "10px",
						padding: "20px",
					}}
				>
					<div className="lottery-form__control">
						<label htlmFor="" className="lottery-form__label">
							Tên tài khoản
						</label>
						<input
							name="username"
							value={formValue.username}
							onChange={handleChangeValueForm}
							className="lottery-form__input"
							type="text"
						/>
					</div>
					<div className="lottery-form__control">
						<label htlmFor="" className="lottery-form__label">
							Mật khẩu cũ
						</label>
						<input
							name="password"
							value={formValue.password}
							onChange={handleChangeValueForm}
							className="lottery-form__input"
							type="text"
						/>
					</div>
					<div className="lottery-form__control">
						<label htlmFor="" className="lottery-form__label">
							Mật khẩu mới
						</label>
						<input
							name="newPassword"
							value={formValue.newPassword}
							onChange={handleChangeValueForm}
							className="lottery-form__input"
							type="text"
						/>
					</div>
					<div className="lottery-form__control">
						<label htlmFor="" className="lottery-form__label">
							Xác nhận mật khẩu
						</label>
						<input
							name="newPassword2"
							value={formValue.newPassword2}
							onChange={handleChangeValueForm}
							className="lottery-form__input"
							type="text"
						/>
					</div>
					<button className="lottery-form__btn">Đổi mật khẩu</button>
				</form>
			</>
		);
};

export default DoiMatKhau;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import authApi from "api/user/authApi";
import { useNavigate } from "react-router-dom";

import "./Register.css";
import { ACCESS_TOKEN_NAME } from "constant";
import { useDispatch } from "react-redux";
import { loadUser } from "redux/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import Alert from "components/utils/Alert/Alert";

const Register = () => {
	const [formValue, setFormValue] = useState({
		username: "",
		password: "",
		conformPassword: "",
	});
	const { username, password, conformPassword } = formValue;
	const [alert, setAlert] = useState(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (password.length < 6) {
			return setAlert({ type: "error", message: "Mật khẩu phải hơn 6 kí tự" });
		}
		if (password !== conformPassword) {
			return setAlert({ type: "error", message: "Mật khẩu không khớp" });
		}
		try {
			const response = await authApi.register(formValue);
			console.log(response);
			if (response.success) {
				localStorage.setItem(ACCESS_TOKEN_NAME, response.accessToken);
				try {
					const actionResult = await dispatch(loadUser());
					const currentUser = unwrapResult(actionResult);
				} catch (error) {
					console.log(error);
				}
				navigate("/");
			} else {
				setAlert({ type: "error", message: response.message });
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="register">
			<h2 className="register-header">ĐĂNG KÍ</h2>
			<form className="register-form" onSubmit={handleOnSubmit}>
				{alert && <Alert info={alert} />}
				<input
					name="username"
					value={username}
					onChange={handleInputChange}
					type="text"
					className="register-input"
					placeholder="Tên đăng nhập"
				/>
				<input
					name="password"
					value={password}
					onChange={handleInputChange}
					type="password"
					className="register-input"
					placeholder="Mật khẩu"
				/>
				<input
					name="conformPassword"
					value={conformPassword}
					onChange={handleInputChange}
					type="password"
					className="register-input"
					placeholder="Nhập lại mật khẩu"
				/>
				<button type="submit" className="register-btn">
					Đăng kí
				</button>
			</form>
			<p>
				Bạn đã có tài khoản{" "}
				<Link className="register-link" to="../login">
					nhấn vào đây
				</Link>{" "}
				để đăng nhập
			</p>
		</div>
	);
};

export default Register;

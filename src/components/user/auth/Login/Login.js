import React, { useState } from "react";
import { Link } from "react-router-dom";
import authApi from "api/user/authApi";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import { ACCESS_TOKEN_NAME } from "constant";
import { useDispatch } from "react-redux";
import { loadUser } from "redux/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import Alert from "components/utils/Alert/Alert";

const Login = () => {
	const [formValue, setFormValue] = useState({
		username: "",
		password: "",
	});
	const { username, password } = formValue;

	const [alert, setAlert] = useState(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await authApi.login(formValue);
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
				// setAlert({ type: "error", message: response.message });
			}
		} catch (error) {
			setAlert({ type: "error", message: error.response.data.message });
		}
	};

	return (
		<div className="login">
			<h2 className="login-header">ĐĂNG NHẬP</h2>
			<form className="login-form" onSubmit={handleOnSubmit}>
				{alert && <Alert info={alert} />}
				<input
					name="username"
					value={username}
					onChange={handleInputChange}
					type="text"
					className="login-input"
					placeholder="Tên đăng nhập"
				/>
				<input
					name="password"
					value={password}
					onChange={handleInputChange}
					type="password"
					className="login-input"
					placeholder="Mật khẩu"
				/>
				<button type="submit" className="login-btn">
					Đăng nhập
				</button>
			</form>
			<p>
				Bạn chưa có tài khoản{" "}
				<Link className="login-link" to="../register">
					nhấn vào đây
				</Link>{" "}
				để đăng kí
			</p>
		</div>
	);
};

export default Login;

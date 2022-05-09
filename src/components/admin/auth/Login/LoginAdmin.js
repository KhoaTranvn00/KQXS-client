import React, { useState } from "react";
import { Link } from "react-router-dom";
import authApi from "api/admin/authApi";
import { useNavigate } from "react-router-dom";

import "./LoginAdmin.css";
import { ACCESS_TOKEN_ADMIN_NAME } from "constant";
import { useDispatch, useSelector } from "react-redux";
import { loadadmin } from "redux/adminSlice";
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
				localStorage.setItem(ACCESS_TOKEN_ADMIN_NAME, response.accessToken);
				try {
					const actionResult = await dispatch(loadadmin());
					const currentUser = unwrapResult(actionResult);
				} catch (error) {
					console.log(error);
				}
				navigate("/admin");
			} else {
				// setAlert({ type: "error", message: response.message });
			}
		} catch (error) {
			setAlert({ type: "error", message: error.response.data.message });
		}
	};

	const adminState = useSelector((state) => state.admin);
	const { admin, isLoading } = adminState;
	if (isLoading) return <h1>Loading...</h1>;
	if (admin) return navigate("/admin");
	else
		return (
			<div className="login-admin">
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
			</div>
		);
};

export default Login;

import userApi from "api/user/userApi";
import utilsApi from "api/utils/utilsApi";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Pagination from "components/utils/Pagination/Pagination";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import "./ThongTinUser.css";

const DoiMatKhau = () => {
	const userState = useSelector((state) => state.user);
	const { user, isLoading } = userState;

	if (user)
		return (
			<>
				<h1>Thông tin tài khoản</h1>
				<table className="thongtinuser">
					<tr>
						<th></th>
						<th></th>
					</tr>
					<tr>
						<td>Tên tài khoản:</td>
						<td>{user.username}</td>
					</tr>
					<tr>
						<td>Địa chỉ:</td>
						<td>{user.address}</td>
					</tr>
					<tr>
						<td>Số điện thoại:</td>
						<td>{user.phone}</td>
					</tr>
				</table>
				<button className="lottery-form__btn">Cập nhật thông tin</button>
			</>
		);
};

export default DoiMatKhau;

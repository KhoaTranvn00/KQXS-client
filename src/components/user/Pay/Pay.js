import React from "react";
import userApi from "api/user/userApi";
import { useNavigate } from "react-router-dom";

export const Pay = () => {
	const navigate = useNavigate();

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const body = {
			orderType: "topup",
			amount: "100000",
			orderDescription: "Thanh toan don hang thoi gian: 2022-11-23 21:11:01",
			bankCode: "",
			language: "vn",
		};
		const response = await userApi.pay({ ...body });
		console.log(response);
		navigate(`//${response.url}`);
	};

	return (
		<div>
			<div class="table-responsive">
				<form
					// id="createOrder"
					// action="http://localhost:4000/api/pay/create_payment_url"
					// method="POST"
					onSubmit={handleOnSubmit}
				>
					<div class="form-group">
						<label>Loại hàng hóa</label>
						<select class="form-control" id="orderType" name="orderType">
							<option value="topup">Nạp tiền điện thoại</option>
							<option value="billpayment">Thanh toán hóa đơn</option>
							<option value="fashion">Thời trang</option>
						</select>
					</div>
					<div class="form-group">
						<label>Số tiền</label>
						<input
							class="form-control"
							id="amount"
							name="amount"
							placeholder="Số tiền"
						/>
					</div>
					<div class="form-group">
						<label>Nội dung thanh toán</label>
						<textarea
							class="form-control"
							id="orderDescription"
							name="orderDescription"
							placeholder="Nội dung thanh toán"
						></textarea>
					</div>
					<div class="form-group">
						<label>Ngân hàng</label>
						<select class="form-control" id="bankCode" name="bankCode">
							<option value="">Không chọn</option>
							<option value="VNPAYQR">Ngân hàng VNPAYQR</option>
							<option value="NCB">Ngân hàng NCB</option>
							<option value="SCB">Ngân hàng SCB</option>
							<option value="SACOMBANK">Ngân hàng SACOMBANK</option>
							<option value="EXIMBANK">Ngân hàng EXIMBANK</option>
							<option value="MSBANK">Ngân hàng MSBANK</option>
							<option value="NAMABANK">Ngân hàng NAMABANK</option>
							<option value="VISA">Ngân hàng VISA</option>
							<option value="VNMART">Ngân hàng VNMART</option>
							<option value="VIETINBANK">Ngân hàng VIETINBANK</option>
							<option value="VIETCOMBANK">Ngân hàng VIETCOMBANK</option>
							<option value="HDBANK">Ngân hàng HDBANK</option>
							<option value="DONGABANK">Ngân hàng Dong A</option>
							<option value="TPBANK">Ngân hàng Tp Bank</option>
							<option value="OJB">Ngân hàng OceanBank</option>
							<option value="BIDV">Ngân hàng BIDV</option>
							<option value="TECHCOMBANK">Ngân hàng Techcombank</option>
							<option value="VPBANK">Ngân hàng VPBank</option>
							<option value="AGRIBANK">Ngân hàng AGRIBANK</option>
							<option value="MBBANK">Ngân hàng MBBank</option>
							<option value="ACB">Ngân hàng ACB</option>
							<option value="OCB">Ngân hàng OCB</option>
							<option value="SHB">Ngân hàng SHB</option>
							<option value="IVB">Ngân hàng IVB</option>
						</select>
					</div>
					<div class="form-group">
						<label>Ngôn ngữ</label>
						<select class="form-control" id="language" name="language">
							<option value="vn">Tiếng Việt</option>
							<option value="en">English</option>
						</select>
					</div>
					<button class="btn btn-default" id="btnPopup" type="submit">
						Thanh toán
					</button>
				</form>
			</div>
		</div>
	);
};

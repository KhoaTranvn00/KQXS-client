import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="info">
				<div>
					<strong>
						Hệ Thống Đại Lý Vé Số Kiến Thiết <span>MINH NGỌC</span>
					</strong>
					<p>
						Địa chỉ: 117-119 Ngô Tất Tố, Phường 22, Quận Bình Thạnh, TP. HCM.
					</p>
					<p>Tel: 028 6266 2222 - 090 363 7779</p>
					<strong>
						<span>ĐỔI VÉ SỐ TRÚNG THƯỞNG</span> Hotline: <span>0973777779</span>
					</strong>
				</div>
				<div>
					<strong>Công Ty TNHH Đầu Tư Thương Mại & Dịch Vụ MINH NGỌC</strong>
					<p>Minh Ngoc Investment Trading And Services Company Limited</p>
					<p>
						Dien Bien Phu Street, 21 Ward, Binh Thanh Dist, HCM City, Vietnam.
					</p>
				</div>
			</div>
			<div className="copy-right">
				<p>
					<a href="https://www.minhngoc.com.vn/thong-tin/dieu-khoan-su-dung.html">
						Điều khoản sử dụng
					</a>{" "}
					| Email: info@minhngoc.com.vn |{" "}
					<a href="www.minhngoc.com.vn">www.minhngoc.com.vn </a> |{" "}
					<a href="www.doisotrung.com">www.doisotrung.com</a>
				</p>

				<p>Copyright © 2005 - 2017 Minh Ngọc™ All right Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;

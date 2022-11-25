import axiosClient from "../axiosClient";

const userApi = {
	getLayout: () => axiosClient.get("/user/getLayout"),
	doXS: (formValue) => axiosClient.post("/user/do-kq", formValue),
	muaVeSo: (formValue) => axiosClient.post("/user/mua-ve-so", formValue),
	veDaMua: (params) => axiosClient.get("/user/ve-da-mua", { params }),
	thongBao: () => axiosClient.get("/user/thong-bao"),
	getVeSoDeMua: (formValue) =>
		axiosClient.get("/user/get-ve-de-mua", formValue),
	getVeSoDeMua: (query) => axiosClient.get(`/user/get-ve-de-mua?${query}`),
	getVeSoDaMua: (query) => axiosClient.get(`/user/get-ve-da-mua?${query}`),
	getThongBao: (query) => axiosClient.get(`/user/get-thong-bao?${query}`),
	pay: (formValue) => axiosClient.post("/pay/create_payment_url", formValue),
	verifyPay: (query) => axiosClient.get(`/pay/vnpay_return?${query}`),
};

export default userApi;

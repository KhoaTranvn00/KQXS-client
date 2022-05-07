import axiosClient from "../axiosClient";

const userApi = {
	getLayout: () => axiosClient.get("/user/getLayout"),
	doXS: (formValue) => axiosClient.post("/user/do-kq", formValue),
	muaVeSo: (formValue) => axiosClient.post("/user/mua-ve-so", formValue),
	veDaMua: () => axiosClient.get("/user/ve-da-mua"),
	thongBao: () => axiosClient.get("/user/thong-bao"),
};

export default userApi;

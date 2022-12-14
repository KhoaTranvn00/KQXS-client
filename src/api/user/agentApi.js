import axiosClient from "../axiosClient";

const agentApi = {
	// getLayout: () => axiosClient.get("/user/getLayout"),
	upLotteryRetail: (formValue) =>
		axiosClient.post("/agent/dang-ve-so-le", formValue),
	upLotterySeri: (formValue) =>
		axiosClient.post("/agent/dang-ve-so-seri", formValue),
	getPostedLottery: (query) => axiosClient.get(`/agent/ve-da-dang?${query}`),
	getThongBao: (query) => axiosClient.get(`/agent/thong-bao?${query}`),
	// muaVeSo: (formValue) => axiosClient.post("/user/mua-ve-so", formValue),
	// veDaMua: (params) => axiosClient.get("/user/ve-da-mua", { params }),
	// thongBao: () => axiosClient.get("/user/thong-bao"),
};

export default agentApi;

import axiosClient from "api/axiosClient";

const adminApi = {
	setKQXS: (mien, ngay) => axiosClient.post(`admin/setKQXS/${mien}/${ngay}`),
	getVeMua: (params) => {
		return axiosClient.get(`admin/get-ve-mua`, { params });
	},
};

export default adminApi;

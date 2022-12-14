import axiosClient from "api/axiosClient";

const adminApi = {
	setKQXS: (mien, ngay) => axiosClient.post(`admin/setKQXS/${mien}/${ngay}`),
	// getVeMua: (params) => {
	// 	return axiosClient.get(`admin/get-ve-mua`, { params });
	// },
	getVeMua: (query) => axiosClient.get(`/admin/get-ve-mua?${query}`),
	getBaoCao: () => axiosClient.get(`/admin/get-bao-cao`),
};

export default adminApi;

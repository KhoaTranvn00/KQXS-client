import axiosClient from "api/axiosClient";

const utilsApi = {
	daiTheoNgay: (ngay) => {
		const n = ngay.split("-");
		return axiosClient.get(`dai-theo-ngay/${n[2]}-${n[1]}-${n[0]}`);
	},
};

export default utilsApi;

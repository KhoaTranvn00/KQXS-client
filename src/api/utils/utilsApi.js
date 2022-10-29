import axiosClient from "api/axiosClient";

const utilsApi = {
	daiTheoNgay: (ngay) => {
		const n = ngay.split("-");
		return axiosClient.get(`dai-theo-ngay-mien/${n[2]}-${n[1]}-${n[0]}/mn`);
	},
	daiMienNamTheoNgay: (ngay) => {
		const n = ngay.split("-");
		return axiosClient.get(`dai-mien-nam-theo-ngay/${n[2]}-${n[1]}-${n[0]}`);
	},
	fullDaiMienNam: () => axiosClient.get("full-dai-mien-nam"),
};

export default utilsApi;

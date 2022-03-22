import axios from "axios";
import axiosClient from "../axiosClient";

const getKqxsApi = {
	mienNamNgay: (ngay) => {
		return axiosClient.get(`user/getKQXS/mien-nam/ngay/${ngay}`);
	},
	mienTrungNgay: (ngay) => {
		return axiosClient.get(`user/getKQXS/mien-trung/ngay/${ngay}`);
	},
	mienBacNgay: (ngay) => {
		return axiosClient.get(`user/getKQXS/mien-bac/ngay/${ngay}`);
	},

	mienNamThu: (slug) => {
		return axiosClient.get(`user/getKQXS/mien-nam/thu/${slug}`);
	},
	mienTrungThu: (slug) => {
		return axiosClient.get(`user/getKQXS/mien-trung/thu/${slug}`);
	},
	mienBacThu: (slug) => {
		return axiosClient.get(`user/getKQXS/mien-bac/thu/${slug}`);
	},

	dai: (slug) => {
		return axiosClient.get(`user/getKQXS/${slug}`);
	},
	daiNgay: (dai, ngay) => {
		return axiosClient.get(`user/getKQXS/${dai}/${ngay}`);
	},
};

export default getKqxsApi;

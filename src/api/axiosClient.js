import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
	baseURL: "http://localhost:4000/api",
	headers: {
		"content-type": "application/json",
	},
	paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use((response) => {
	if (response && response.data) {
		return response.data;
	}
	return response;
});

// axiosClient.interceptors.response.use(
// 	(response) => {
// 		if (response && response.data) {
// 			return response.data;
// 		}
// 		return response;
// 	},
// 	(error) => {
// 		// Handle errors
// 		if (error && error.response && error.response.data) {
// 			return error.response.data;
// 		} else return error;
// 		throw error;
// 	}
// );

export default axiosClient;

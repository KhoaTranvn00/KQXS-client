import axios from "axios";

const axiosClient = axios.create({
	baseURL: "http://localhost:4000/api",
	headers: {
		"content-type": "application/json",
	},
});

axiosClient.interceptors.response.use((response) => {
	if (response && response.data) {
		return response.data;
	}
	return response;
});

export default axiosClient;

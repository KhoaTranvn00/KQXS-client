import axiosClient from "api/axiosClient";

const authApi = {
	loadUser: () => axiosClient.get("user/auth/load"),
	login: (formValue) => axiosClient.post("user/auth/login", formValue),
	register: (formValue) => axiosClient.post("user/auth/register", formValue),
};

export default authApi;

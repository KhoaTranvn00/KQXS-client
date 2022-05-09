import axiosClient from "api/axiosClient";

const authApi = {
	loadAdmin: () => axiosClient.get("admin/auth/load"),
	login: (formValue) => axiosClient.post("admin/auth/login", formValue),
};

export default authApi;

import axiosClient from "../axiosClient";

const userApi = {
	getLayout: () => axiosClient.get("/user/getLayout"),
	doXS: (formValue) => axiosClient.post("/user/do-kq", formValue),
};

export default userApi;

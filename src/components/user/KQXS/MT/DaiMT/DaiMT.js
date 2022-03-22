import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import getKqxsApi from "api/user/getKQXSApi";
import MT1 from "../MT1/MT1";

const DaiMT = () => {
	const [kqs, setKQs] = useState(null);
	const params = useParams();
	const { dai } = params;
	useEffect(() => {
		const loadDate = async () => {
			const response = await getKqxsApi.dai(dai);
			console.log(response);
			setKQs(response.ketquas);
		};
		loadDate();
	}, [dai]);
	return <>{kqs && kqs.map((kq) => <MT1 info={kq} />)}</>;
};

export default DaiMT;

import getKqxsApi from "api/user/getKQXSApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MB1 from "../MB1/MB1";

const DaiMB = () => {
	const [kqs, setKQs] = useState(null);
	const params = useParams();
	const { dai } = params;
	useEffect(() => {
		const loadDate = async () => {
			const response = await getKqxsApi.dai(dai);
			setKQs(response.ketquas);
		};
		loadDate();
	}, [dai]);
	return <>{kqs && kqs.map((kq) => <MB1 info={kq} />)}</>;
};

export default DaiMB;

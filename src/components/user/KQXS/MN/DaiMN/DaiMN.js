import getKqxsApi from "api/user/getKQXSApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MN1 from "../MN1/MN1";

const DaiMN = () => {
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
	return <>{kqs && kqs.map((kq) => <MN1 info={kq} />)}</>;
};

export default DaiMN;

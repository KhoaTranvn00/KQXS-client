import getKqxsApi from "api/user/getKQXSApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MT1 from "../MT1/MT1";

const DaiNgayMT = () => {
	const [kqs, setKQs] = useState(null);
	const params = useParams();
	const { dai, ngay } = params;
	useEffect(() => {
		const loadData = async () => {
			try {
				const response = await getKqxsApi.daiNgay(dai, ngay);
				setKQs(response.kq);
			} catch (error) {
				console.log(error);
			}
		};
		loadData();
	}, []);
	return <>{kqs && <MT1 info={kqs} />}</>;
};

export default DaiNgayMT;

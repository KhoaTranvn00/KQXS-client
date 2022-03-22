import getKqxsApi from "api/user/getKQXSApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MN1 from "../MN1/MN1";

const DaiNgayMN = () => {
	const [kqs, setKQs] = useState(null);
	const params = useParams();
	const { dai, ngay } = params;
	useEffect(() => {
		const loadData = async () => {
			try {
				const response = await getKqxsApi.daiNgay(dai, ngay);
				setKQs(response.kq);
				console.log(kqs);
			} catch (error) {
				console.log(error);
			}
		};
		loadData();
	}, []);
	return <>{kqs && <MN1 info={kqs} />}</>;
};

export default DaiNgayMN;

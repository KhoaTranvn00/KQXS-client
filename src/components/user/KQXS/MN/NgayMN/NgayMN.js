import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getKQXSApi from "../../../../../api/user/getKQXSApi";
import MN3 from "../MN3/MN3";

const NgayMN = () => {
	const params = useParams();
	const [kqs, setKqs] = useState(null);
	const { ngay } = params;
	useEffect(() => {
		(async () => {
			try {
				const response = await getKQXSApi.mienNamNgay(ngay);
				console.log(response);
				if (response.success) {
					setKqs({
						ketqua: response.ketquas,
						thu: response.thu,
						ngay: response.ngay,
					});
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, [ngay]);
	console.log(kqs);
	return <div>{kqs && <MN3 info={{ ...kqs }} />}</div>;
};

export default NgayMN;

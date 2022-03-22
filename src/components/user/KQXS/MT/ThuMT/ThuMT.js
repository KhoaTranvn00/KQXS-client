import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getKQXSApi from "../../../../../api/user/getKQXSApi";
import MT3 from "../MT3/MT3";

const ThuMT = () => {
	const params = useParams();
	const [kqs, setKqs] = useState();
	const [thu, setThu] = useState();
	const { slug } = params;
	useEffect(() => {
		(async () => {
			const response = await getKQXSApi.mienTrungThu(slug);
			if (response.success) {
				setThu(response.thu);
				setKqs(response.kqs);
			}
		})();
	}, [slug]);
	return <div>{kqs && kqs.map((kq) => <MT3 info={{ ...kq, thu }} />)}</div>;
};

export default ThuMT;

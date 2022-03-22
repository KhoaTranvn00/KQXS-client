import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getKQXSApi from "../../../../../api/user/getKQXSApi";
import MN3 from "../MN3/MN3";

const ThuMN = () => {
	const params = useParams();
	const [kqs, setKqs] = useState();
	const [thu, setThu] = useState();
	const { slug } = params;
	useEffect(() => {
		(async () => {
			const response = await getKQXSApi.mienNamThu(slug);
			if (response.success) {
				setThu(response.thu);
				setKqs(response.kqs);
			}
		})();
	}, [slug]);
	return <div>{kqs && kqs.map((kq) => <MN3 info={{ ...kq, thu }} />)}</div>;
};

export default ThuMN;

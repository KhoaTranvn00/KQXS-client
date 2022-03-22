import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getKQXSApi from "../../../../../api/user/getKQXSApi";
import MB1 from "../MB1/MB1";

const ThuMB = () => {
	const params = useParams();
	const [kqs, setKqs] = useState();
	const [thu, setThu] = useState();
	const { slug } = params;
	useEffect(() => {
		(async () => {
			const response = await getKQXSApi.mienBacThu(slug);
			console.log(response);
			if (response.success) {
				setKqs(response.kqs);
			}
		})();
	}, [slug]);
	console.log(kqs);
	return (
		<div>{kqs && kqs.map((kq) => <MB1 info={{ ...kq.ketquas[0] }} />)}</div>
	);
};

export default ThuMB;

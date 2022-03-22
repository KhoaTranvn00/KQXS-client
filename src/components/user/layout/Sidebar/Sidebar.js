import userApi from "api/user/userApi";
import React, { useEffect, useState } from "react";
import SectionSidebar from "../SectionSidebar/SectionSidebar";

const Sidebar = () => {
	const [state, setState] = useState(null);
	useEffect(() => {
		const get = async () => {
			try {
				const response = await userApi.getLayout();
				if (response.success) {
					setState(response);
				} else {
				}
			} catch (error) {
				console.log("error: " + error);
			}
		};
		get();
	}, []);
	return (
		<div>
			{state &&
				state.dsDai.map((daiTheoMien) => (
					<SectionSidebar
						daiTheoMien={daiTheoMien}
						dsNaySo={state.dsNaySo}
						key={daiTheoMien.mien}
					/>
				))}
		</div>
	);
};

export default Sidebar;

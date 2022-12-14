import React, { useState } from "react";
import "./PostLottery.css";
import RetailFrom from "./Form/RetailForm";
import SeriForm from "./Form/SeriForm";

const PostLottery = () => {
	const [switchTag, setSwitchTag] = useState(true);

	return (
		<div>
			<div className="nav__list">
				<div
					class="nav__item nav__item-switch"
					onClick={() => setSwitchTag(false)}
				>
					<div className="nav__link">Đăng theo seri</div>
				</div>
			</div>
			<div>{switchTag ? <SeriForm /> : <RetailFrom />}</div>
		</div>
	);
};

export default PostLottery;

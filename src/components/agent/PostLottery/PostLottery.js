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
					className="nav__item nav__item-switch"
					onClick={() => setSwitchTag(true)}
				>
					<div className="nav__link">Đăng lẻ từng tờ</div>
				</div>
				<div
					class="nav__item nav__item-switch"
					onClick={() => setSwitchTag(false)}
				>
					<div className="nav__link">Đăng theo seri</div>
				</div>
			</div>
			<div>{switchTag ? <RetailFrom /> : <SeriForm />}</div>
		</div>
	);
};

export default PostLottery;

import React from "react";
import "./SectionSidebar.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

const SectionSidebar = ({ daiTheoMien, dsNaySo }) => {
	const { mien, dais } = daiTheoMien;
	return (
		<section className="sidebar">
			<div className="sidebar__header">XỔ SỐ {mien.ten}</div>
			<ul className="sidebar__list">
				{dais.map((dai) => (
					<li className="sidebar__item" key={dai._id}>
						<Link className="sidebar__link" to={`${mien.slug}/${dai.slug}`}>
							{dai.ten}{" "}
						</Link>
						<img
							className={classNames("sidebar__loading", {
								"sidebar__loading--active": dsNaySo.includes(dai._id),
							})}
							src="./asset/img/sidebar_loading.gif "
							alt=""
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default SectionSidebar;

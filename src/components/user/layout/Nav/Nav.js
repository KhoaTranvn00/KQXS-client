import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
	const userState = useSelector((state) => state.user);

	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item">
					<Link to="/" className="nav__link">
						Home
					</Link>
				</li>
				<li className="nav__item">
					<Link to="" className="nav__link">
						Trực tiếp
					</Link>
				</li>
				<li className="nav__item">
					<Link to="/kqxs/mien-nam" className="nav__link">
						XS Miền Nam
					</Link>
					<ul class="second-menu">
						<li class="second-item">
							<Link to="/kqxs/mien-nam" class="second-link">
								XS Miền nam
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-nam/thu/thu-hai" class="second-link">
								Thứ 2
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-nam/thu/thu-ba" class="second-link">
								Thứ 3
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-nam/thu/thu-tu" class="second-link">
								Thứ 4
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-nam/thu/thu-nam" class="second-link">
								Thứ 5
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-nam/thu/thu-sau" class="second-link">
								Thứ 6
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-nam/thu/thu-bay" class="second-link">
								Thứ 7
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-nam/thu/chu-nhat" class="second-link">
								Chủ nhật
							</Link>
						</li>
					</ul>
				</li>
				<li className="nav__item">
					<Link to="" className="nav__link">
						XS Miền Trung
					</Link>
					<ul class="second-menu">
						<li class="second-item">
							<Link to="" class="second-link">
								XS Miền Trung
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-trung/thu/thu-hai" class="second-link">
								Thứ 2
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-trung/thu/thu-ba" class="second-link">
								Thứ 3
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-trung/thu/thu-tu" class="second-link">
								Thứ 4
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-trung/thu/thu-nam" class="second-link">
								Thứ 5
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-trung/thu/thu-sau" class="second-link">
								Thứ 6
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-trung/thu/thu-bay" class="second-link">
								Thứ 7
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-trung/thu/chu-nhat" class="second-link">
								Chủ nhật
							</Link>
						</li>
					</ul>
				</li>
				<li className="nav__item">
					<Link to="" className="nav__link">
						XS Miền Bắc
					</Link>
					<ul class="second-menu">
						<li class="second-item">
							<Link to="" class="second-link">
								XS Miền Bắc
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-bac/thu/thu-hai" class="second-link">
								Thứ 2
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-bac/thu/thu-ba" class="second-link">
								Thứ 3
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-bac/thu/thu-tu" class="second-link">
								Thứ 4
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-bac/thu/thu-nam" class="second-link">
								Thứ 5
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-bac/thu/thu-sau" class="second-link">
								Thứ 6
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-bac/thu/thu-bay" class="second-link">
								Thứ 7
							</Link>
						</li>
						<li class="second-item">
							<Link to="/kqxs/mien-bac/thu/chu-nhat" class="second-link">
								Chủ nhật
							</Link>
						</li>
					</ul>
				</li>
				<li className="nav__item">
					<Link to="/account/mua-ve-so" className="nav__link">
						Mua số Online
					</Link>
				</li>
				{userState.user && userState.user.role == 1 && (
					<li className="nav__item">
						<Link to="/agent" className="nav__link">
							Kênh người bán
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Nav;

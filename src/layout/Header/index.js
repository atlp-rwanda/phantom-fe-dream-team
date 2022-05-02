import React from "react";
import "./style.css";
import addIcon from "../../assets/plus-circle.svg";
import searchIcon from "../../assets/search.svg";
import logo from "../../assets/logo3.svg";

const Header = () => {
	return (
		<div className="header flex justify-between items-center">
			<img src={logo} />
			<span class="capitalize header-text">ADMIN DASHBOARD</span>
			<img class="addIcon" src={addIcon} />
			<div>
				<input />
				<img class="searchIcon" src={searchIcon} />
			</div>
		</div>
	);
};

export default Header;

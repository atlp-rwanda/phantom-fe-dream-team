import React from "react";
import "./style.css";
import userIcon from "../../assets/carbon_user-avatar.png";

const sidebarItems = [
	{
		icon: userIcon,
		name: "Drivers",
		to: "/drivers",
	},
	{
		icon: userIcon,
		name: "Assignments",
		to: "/assignDrivers",
	},
];

const Sidebar = ({}) => {
	return (
		<div className="sidebar py-2 px-5">
			<div class="sidebar-heading flex justify-between items-center mb-8 px-5">
				<img src={userIcon} />
				<span class="capitalize">USERNAME</span>
			</div>
			<div class="sidebar-menus">
				{sidebarItems.map((item) => (
					<div
						class={`sidebar-item my-1 flex justify-between items-center ${
							(item.to === location.pathname && "active") || "inactive"
						}`}
						onClick={() => window.location.replace(item.to)}
					>
						<img class="-" src={item.icon} />
						<span class="" x>
							{item.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sidebar;

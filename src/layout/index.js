import React from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

const index = ({ children }) => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex flex-col grow">
				<Header />
				<Content children={children} />
			</div>
		</div>
	)
};

export default index;

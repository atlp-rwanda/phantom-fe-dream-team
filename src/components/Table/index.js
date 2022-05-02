import React from "react";
import { Table } from "antd";
import "./style.css";

const index = (props) => {
	return (
		<div className="grow">
			<Table className="m-0" {...props} />
		</div>
	);
};

export default index;

import React, { useState } from "react";
import Table from "../../components/Table";
import Modal from "./Modal";

import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import "./style.css";

const assignments = [
	{
		key: 1,
		driverFirstName: "Johhny",
		driverLastName: "Harerimana",
		email: "johnny@email.com",
		busPlateNO: "RAB 456F",
		busType: "Youtong",
	},
	{
		key: 2,
		driverFirstName: "Dave",
		driverLastName: "Chappelle",
		email: "dave@email.com",
		busPlateNO: "RAB 490F",
		busType: "Youtong",
	},
];

const columns = [
	{
		title: "First Name",
		dataIndex: "driverFirstName",
		key: "driverFirstName",
	},
	{
		title: "Last Name",
		dataIndex: "driverLastName",
		key: "driverLastName",
	},
	{
		title: "Driver email",
		dataIndex: "email",
		key: "email",
	},
	{
		title: "Bus plate NO",
		dataIndex: "busPlateNO",
		key: "busPlateNO",
	},
	{
		title: "Bus type",
		dataIndex: "busType",
		key: "busType",
	},
	{
		title: "Action",
		dataIndex: "action",
		key: "action",
		render: () => (
			<div class="actions flex flex-row">
				<img src={editIcon} alt="edit" />
				{/* <img src={deleteIcon} alt="delete" /> */}
			</div>
		),
	},
];

const DriverAssignments = () => {
	const [isModalVisible, setModalVisible] = useState(false);
	const handleClose = () => {
		setModalVisible(false);
	};
	return (
		<>
			<Modal
				title={"Edit"}
				visible={isModalVisible}
				onOk={handleClose}
				onCancel={handleClose}
			/>
			<Table dataSource={assignments} columns={columns} />
		</>
	);
};

export default DriverAssignments;

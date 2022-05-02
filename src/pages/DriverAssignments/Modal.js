import React from "react";
import { Modal } from "antd";

const CustomModal = ({ title, visible, onOk, onCancel }) => {
	return (
		<div class="modal" style={{ display: visible ? "block" : "none" }}>
			<div class="modal-contents"></div>
		</div>
	);
};

export default CustomModal;

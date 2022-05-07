import React from "react";
import "./Alert.css";

const Alert = ({ info }) => {
	const { type, message } = info;
	return <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;

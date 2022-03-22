import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";
import formatDate from "../../../../utils/formatDate";
import { useNavigate } from "react-router-dom";

const MyCalendar = () => {
	const [date, setDate] = useState(new Date());

	const navigate = useNavigate();

	const handleCalendarChange = (date) => {
		const dateSlug = formatDate.dayMonthFromDate(date);
		navigate(dateSlug);
	};

	return (
		<div>
			<Calendar value={date} onChange={handleCalendarChange} />
		</div>
	);
};

export default MyCalendar;

const compareDate = {
	compareDate: (date1, date2) => {
		if (date1.getFullYear() < date2.getFullYear()) return 2;
		if (
			date1.getFullYear() == date2.getFullYear() &&
			date1.getMonth() < date2.getMonth()
		)
			return 2;
		if (
			date1.getFullYear() == date2.getFullYear() &&
			date1.getMonth() == date2.getMonth() &&
			date1.getDate() < date2.getDate()
		)
			return 2;
		if (
			date1.getFullYear() == date2.getFullYear() &&
			date1.getMonth() == date2.getMonth() &&
			date1.getDate() == date2.getDate()
		)
			return 0;
		return 1;
	},

	verifyToday: () => {
		const today = new Date();
		console.log(today);
		console.log(today.getHours());
		console.log(today.getHours() < 15);
		return today.getHours() < 15;
	},

	verifyAdd3Date: (dateSelected) => {
		const today = new Date();
		const dateSelect = new Date("12/15/2022");

		let today3 = new Date(today);
		today3 = today3.setDate(today3.getDate() + 4);
		today3 = new Date(today3);
		today3.setHours(0, 0, 0);

		return dateSelected < today3;
	},
};

export default compareDate;

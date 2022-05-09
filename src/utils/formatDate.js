const formatDate = {
	// data: dd-mm-yyyy
	dayMonth: (dateString) => {
		const date = dateString.split("-");
		const result = `${date[1]}-${date[0]}-${date[2]}`;
		return result;
	},
	ymdTdmy: (dateString) => {
		const date = dateString.split("-");
		const result = `${date[2]}-${date[1]}-${date[0]}`;
		return result;
	},
	dayMonthFromDate: (date) => {
		const yyyy = date.getFullYear();
		let mm = date.getMonth() + 1; // Months start at 0!
		let dd = date.getDate();

		if (dd < 10) dd = "0" + dd;
		if (mm < 10) mm = "0" + mm;

		const dateString = dd + "-" + mm + "-" + yyyy;
		return dateString;
	},
};

export default formatDate;

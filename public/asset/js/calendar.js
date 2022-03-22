document.addEventListener("DOMContentLoaded", function () {
	//....let pastDates = true,
	(availableDates = false), (availableWeekDays = false);

	let calendar = new VanillaCalendar({
		selector: "#myCalendar",
		months: [
			"Tháng 1",
			"Tháng 2",
			"Tháng 3",
			"Tháng 4",
			"Tháng 5",
			"Tháng 6",
			"Tháng 7",
			"Tháng 8",
			"Tháng 9",
			"Tháng 10",
			"Tháng 11",
			"Tháng 12",
		],
		shortWeekday: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
		onSelect: (data, elem) => {
			console.log(data, elem);
		},
	});

	let btnPastDates = document.querySelector("[name=pastDates]");
	btnPastDates.addEventListener("click", () => {
		pastDates = !pastDates;
		calendar.set({ pastDates: pastDates });
		btnPastDates.innerText = `${pastDates ? "Disable" : "Enable"} past dates`;
	});

	let btnAvailableDates = document.querySelector("[name=availableDates]");
	btnAvailableDates.addEventListener("click", () => {
		availableDates = !availableDates;
		btnAvailableDates.innerText = `${
			availableDates ? "Clear available dates" : "Set available dates"
		}`;
		if (!availableDates) {
			calendar.set({ availableDates: [], datesFilter: false });
			return;
		}
		let dates = () => {
			let result = [];
			for (let i = 1; i < 15; ++i) {
				if (i % 2) continue;
				let date = new Date(new Date().getTime() + 60 * 60 * 24 * 1000 * i);
				result.push({
					date: `${String(date.getFullYear())}-${String(
						date.getMonth() + 1
					).padStart(2, 0)}-${String(date.getDate()).padStart(2, 0)}`,
				});
			}
			return result;
		};
		calendar.set({
			availableDates: dates(),
			availableWeekDays: [],
			datesFilter: true,
		});
	});

	let btnAvailableWeekDays = document.querySelector("[name=availableWeekDays]");
	btnAvailableWeekDays.addEventListener("click", () => {
		availableWeekDays = !availableWeekDays;
		btnAvailableWeekDays.innerText = `${
			availableWeekDays ? "Clear available weekdays" : "Set available weekdays"
		}`;
		if (!availableWeekDays) {
			calendar.set({ availableWeekDays: [], datesFilter: false });
			return;
		}
		let days = [
			{
				day: "monday",
			},
			{
				day: "tuesday",
			},
			{
				day: "wednesday",
			},
			{
				day: "friday",
			},
		];
		calendar.set({
			availableWeekDays: days,
			availableDates: [],
			datesFilter: true,
		});
	});
});

import React, { useEffect, useState } from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import adminApi from "api/admin/adminApi";

const Chart = () => {
	const labels = [
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
	];

	const [data, setData] = useState({
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: [-808, 833, -106, 530, 462, -375, -138],
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Dataset 2",
				data: [392, -757, -179, 28, -560, -864, 587],
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	});

	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Biểu đồ thống kê vé số trên hệ thống",
			},
		},
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await adminApi.getBaoCao();
				console.log(12345);
				if (response.success) {
					console.log(response);
					setData({
						labels,
						datasets: [
							{
								label: "Vé đã đăng",
								data: response.totalQuality,
								borderColor: "rgb(255, 99, 132)",
								backgroundColor: "rgba(255, 99, 132, 0.5)",
							},
							{
								label: "Vé đã bán",
								data: response.totalSold,
								borderColor: "rgb(53, 162, 235)",
								backgroundColor: "rgba(53, 162, 235, 0.5)",
							},
							{
								label: "Vé trúng",
								data: response.trung,
								borderColor: "rgb(12 228 29)",
								backgroundColor: "rgba(53, 162, 235, 0.5)",
							},
							{
								label: "Vé không trúng",
								data: response.kotrung,
								borderColor: "rgb(206 227 56)",
								backgroundColor: "rgba(53, 162, 235, 0.5)",
							},
							{
								label: "Vé chưa có kết quả",
								data: response.chuacokq,
								borderColor: "rgb(211, 7, 240)",
								backgroundColor: "rgba(211, 7, 240, 0.5)",
							},
						],
					});
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return <Line options={options} data={data} />;
};

export default Chart;

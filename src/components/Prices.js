import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import './Prices.css';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const Prices = ({ todaysPrices, tomorrowsPrices }) => {
	const labels = Array.from({ length: 24 }, (e, i) => i);

	const todaysPriceArr = Array.from(todaysPrices, (days) => {
		return days['total'];
	});
	const tomorrowsPriceArr = Array.from(tomorrowsPrices, (days) => {
		return days['total'];
	});

	const data = {
		labels,
		datasets: [
			{
				label: "Today's Prices",
				data: todaysPriceArr,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: "Tomorrow's Prices",
				data: tomorrowsPriceArr,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};
	return (
		<div className='prices'>
			{data && (
				<div className='chartContainer' id='join'>
					<Line data={data} options={{ maintainAspectRatio: false }} />
				</div>
			)}
		</div>
	);
};

export default Prices;

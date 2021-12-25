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
import './TodaysPrices.css';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const TodaysPrices = ({ todaysPrices }) => {
	const labels = Array.from({ length: 24 }, (e, i) => i);
	console.log(labels);

	const prices = Array.from(todaysPrices, (days) => {
		return days['total'];
	});
	console.log(prices);

	const data = {
		labels,
		datasets: [
			{
				label: "Today's Prices",
				data: prices,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};
	return (
		<div className='todaysPrices'>
			{data && (
				<div className='chartContainer'>
					<Line data={data} options={{ maintainAspectRatio: true }} />
				</div>
			)}
		</div>
	);
};

export default TodaysPrices;

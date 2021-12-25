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
import './TomorrowsPrices.css';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const TomorrowsPrices = ({ tomorrowsPrices }) => {
	const labels = Array.from({ length: 24 }, (e, i) => i);
	console.log(labels);

	const prices = Array.from(tomorrowsPrices, (days) => {
		return days['total'];
	});
	console.log(prices);

	const data = {
		labels,
		datasets: [
			{
				label: "Tomorrow's Prices",
				data: prices,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};
	return (
		<div className='tomorrowsPrices'>
			{data && (
				<div className='chartContainer'>
					<Line data={data} options={{ maintainAspectRatio: true }} />
				</div>
			)}
		</div>
	);
};

export default TomorrowsPrices;

import React, { useState, useEffect } from 'react';
import './CurrentPrice.css';

const CurrentPrice = ({ currentPrice }) => {
	const [price, setPrice] = useState(null);
	const [date, setDate] = useState(null);
	const [time, setTime] = useState(null);

	const getCurrentPrice = () => {
		setPrice(currentPrice['total']);
	};

	const getCurrentDate = () => {
		let newDate = '';
		for (let i = 0; i < 10; i++) {
			newDate = newDate + currentPrice['startsAt'][i];
		}
		setDate(newDate);
	};

	const getCurrentTime = () => {
		let newTime = '';
		for (let i = 11; i < 16; i++) {
			newTime = newTime + currentPrice['startsAt'][i];
		}
		setTime(newTime);
	};

	useEffect(() => {
		getCurrentPrice();
		getCurrentTime();
		getCurrentDate();
	}, []);
	return (
		<div className='currentPrice'>
			<h2 id={price > 3 ? 'highPrice' : ''}>{price}kr</h2>
			<h4>
				at {time} on {date}
			</h4>
		</div>
	);
};

export default CurrentPrice;

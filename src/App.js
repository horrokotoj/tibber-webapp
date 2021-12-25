import './App.css';
import CurrentPrice from './components/CurrentPrice';
import Prices from './components/Prices';
import TodaysPrices from './components/TodaysPrices';
import TomorrowsPrices from './components/TomorrowsPrices';
import React, { useState, useEffect } from 'react';

function App() {
	const [currentPrice, setCurrentPrice] = useState(null);
	const [todaysPrices, setTodaysPrices] = useState(null);
	const [tomorrowsPrices, setTomorrowsPrices] = useState(null);
	const [separate, setSeparate] = useState(false);

	const doSeparation = () => {
		if (separate) {
			setSeparate(false);
		} else {
			setSeparate(true);
		}
	};

	const query = `query{
		viewer {
			homes {
				currentSubscription{
					priceInfo{
						current{
							total
							energy
							tax
							startsAt
						}
						today {
							total
							energy
							tax
							startsAt
						}
						tomorrow {
							total
							energy
							tax
							startsAt
						}
					}
				}
			}
		}
  }`;

	function handleData(data) {
		console.log(data);
		setTodaysPrices(
			data['viewer']['homes'][0]['currentSubscription']['priceInfo']['today']
		);
		setTomorrowsPrices(
			data['viewer']['homes'][0]['currentSubscription']['priceInfo']['tomorrow']
		);
		setCurrentPrice(
			data['viewer']['homes'][0]['currentSubscription']['priceInfo']['current']
		);
	}

	async function getPrices() {
		console.log('Submitting');
		let response = fetch('https://api.tibber.com/v1-beta/gql', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer QjAfeE7K_2jwxTx0k0TeSd7B_LUZjgYCqd-51M8BAtg',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query }),
		});
		response.then((res) => res.json()).then((data) => handleData(data['data']));
	}

	useEffect(() => {
		getPrices();
	}, []);

	useEffect(() => {
		console.log(currentPrice);
		console.log(todaysPrices);
		console.log(tomorrowsPrices);
	}, [currentPrice]);

	return (
		<div className='App'>
			{currentPrice && <CurrentPrice currentPrice={currentPrice} />}
			{todaysPrices && tomorrowsPrices && !separate && (
				<Prices todaysPrices={todaysPrices} tomorrowsPrices={tomorrowsPrices} />
			)}
			{todaysPrices && separate && <TodaysPrices todaysPrices={todaysPrices} />}
			{tomorrowsPrices && separate && (
				<TomorrowsPrices tomorrowsPrices={tomorrowsPrices} />
			)}
			<button
				className={'separationButton'}
				onClick={() => {
					doSeparation();
				}}
			>
				{separate ? 'Join' : 'Separate'}
			</button>
		</div>
	);
}

export default App;

import { View, Text } from 'react';

const DateTime = () => {
	const date = new Date();

	const n = date.toDateString();

	const time = date.toLocaleTimeString();

	console.log('Date: ' + n);

	console.log('Time: ' + time);

	return (
		<View>
			<Text>{n}</Text>
			<Text>{time}</Text>
		</View>
	);
}
export default DateTime;
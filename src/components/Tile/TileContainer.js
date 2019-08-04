import { lifecycle, compose, withState } from 'recompose';

import Tile from '../Tile/Tile.jsx';

import apiKey from '../../api_key';

async function getBandInfo(title) {
	const response = await fetch(
		`https://api.spotify.com/v1/search?q=${title}&type=artist`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: apiKey
			}
		}
	);
	const data = await response.json();
	console.log('method', data);
	return data;
}

const lifecycleMethods = {
	componentDidMount() {
		getBandInfo(this.props.Title).then(data => {
			this.props.setData(data);
		});
	}
};

export const enhance = compose(
	withState('data', 'setData', {}),
	lifecycle(lifecycleMethods)
);

export default enhance(Tile);

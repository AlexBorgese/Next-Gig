import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import apiKey from '../../api_key';

const Tile = ({ Title, content }) => {
	const [ data, setData ] = useState({ hits: [] });

	useEffect(() => {
		function fetchData() {
			fetch(`https://api.spotify.com/v1/search?q=${Title}&type=artist`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: apiKey
				}
			})
				.then(function (response) {
					return response.json();
				})
				.then(function (myJson) {
					console.log(myJson);
					setData(myJson);
				});
		}
		fetchData();
	}, []);

	// to do move this all to a HOC and pass down variables
	if (data.artists) {
		console.log(data.artists.items[0].genres);
	}

	return (
		<div className="item">
			<h1>{Title}</h1>
			{/* <p>{data.artists.items[0].genres}</p> */}
		</div>
	);
};

Tile.propTypes = {
	Title: PropTypes.string,
	content: PropTypes.string
};

export default Tile;

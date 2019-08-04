import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ Title, data }) => {
	const formatArray = array => {
		return array.map((element, index) => {
			if (index === array.length - 1) {
				return `${element}.`;
			}
			return `${element}, `;
		});
	};
	return (
		<div className="item">
			<h1>{Title}</h1>
			{data.artists && <p>{formatArray(data.artists.items[0].genres)}</p>}
			{data.artists && (
				<img
					src={data.artists.items[0].images[0].url}
					alt={data.artists.items[0].name}
				/>
			)}
		</div>
	);
};

Tile.propTypes = {
	Title: PropTypes.string,
	data: PropTypes.object
};

export default Tile;

import React from 'react';
import PropTypes from 'prop-types';

import LoginButton from '../LoginButton/LoginButton';

const Tile = ({ Title, date, data }) => {
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
			{data.artists ? (
				<React.Fragment>
					<h1>{Title}</h1>
					<span>{date}</span>
					<p>{formatArray(data.artists.items[0].genres)}</p>
					<img
						src={data.artists.items[0].images[0].url}
						alt={data.artists.items[0].name}
					/>
				</React.Fragment>
			) : (
				<React.Fragment>
					<p className="login-text">
						To See Your Next Gigs And Info You Will Need To Login
					</p>
					<LoginButton />
				</React.Fragment>
			)}
		</div>
	);
};

Tile.propTypes = {
	Title: PropTypes.string,
	date: PropTypes.string,
	data: PropTypes.object
};

export default Tile;

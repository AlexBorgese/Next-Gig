import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ Title, content }) => (
	<div className="item">
		<h1>{Title}</h1>
		<p>{content}</p>
	</div>
);

Tile.propTypes = {
	Title: PropTypes.string
};

export default Tile;

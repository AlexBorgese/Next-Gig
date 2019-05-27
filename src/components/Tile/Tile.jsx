import React from 'react';
import PropTypes from 'prop-types';

const Tile = ({ Title }) => <div className="item">{Title}</div>;

Tile.propTypes = {
	Title: PropTypes.string
};

export default Tile;

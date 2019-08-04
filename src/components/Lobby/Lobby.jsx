import React from 'react';

const Lobby = ({ children }) => {
	return (
		<div className="lobby">
			<h1>NEXT GIG</h1>
			<div className="content">{children}</div>
		</div>
	);
};

export default Lobby;

import React from 'react';

const Lobby = ({ children }) => {
	console.log(children);
	return <div className="lobby">{children}</div>;
};

export default Lobby;

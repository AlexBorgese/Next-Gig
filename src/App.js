import React from 'react';

import siteLayout from './siteLayout';
import Section from './section/section';

import './App.css';

const App = () => {
	const sections = siteLayout.map(layout => (
		<Section key={layout.id} layout={layout} />
	));

	return <div className="App">{sections}</div>;
};

export default App;

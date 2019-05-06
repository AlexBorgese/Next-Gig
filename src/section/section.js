import React from 'react';
import PropTypes from 'prop-types';

import components from '../components/';

const Section = ({ layout }) => {
	const createSection = layout => {
		return React.createElement(
			components[layout.component],
			layout.props,
			((layout.props || {}).children || []).map(component => {
				console.log(component);
				this.createSection(component);
			})
		);
	};

	return <section>{createSection(layout)}</section>;
};

Section.propTypes = {
	layout: PropTypes.array
};

export default Section;

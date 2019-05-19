import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Section from './section/section';

describe('Given the App component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<App />);
	});

	it('should render a Section Component with the correct props', () => {
		expect(component.find(Section).length).toEqual(1);
		expect(typeof component.find(Section).prop('layout')).toEqual('object');
	});
});

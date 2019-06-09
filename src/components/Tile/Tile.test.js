import React from 'react';
import { shallow } from 'enzyme';
import Tile from './Tile';

const props = {
	Title: 'Title',
	content: 'words and that'
};

describe('Given the Tile component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Tile {...props} />);
	});

	it('should render a tile with the correct text', () => {
		expect(component.find('h1').text()).toEqual(props.Title);
	});

	it('should render content with the correct text', () => {
		expect(component.find('p').text()).toEqual(props.content);
	});
});

import React from 'react';
import { mount } from 'enzyme';
import Tile from './Tile';

const props = {
	Title: 'Title',
	content: 'words and that'
};

fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

describe('Given the Tile component', () => {
	let component;

	beforeEach(() => {
		component = mount(<Tile {...props} />);
	});

	it('should request data on mount', () => {
		expect(fetch.mock.calls.length).toEqual(1);
	});

	it('should render a tile with the correct text', () => {
		expect(component.find('h1').text()).toEqual(props.Title);
	});

	it('should render content with the correct text', () => {
		expect(component.find('p').text()).toEqual(props.content);
	});
});

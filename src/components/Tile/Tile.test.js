import React from 'react';
import { shallow } from 'enzyme';
import Tile from './Tile';

describe('Given the Tile component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Tile Title="Title of Something" />);
	});

	it('should render a tile with the correct props', () => {
		expect(component.find('.item').length).toEqual(1);
		expect(component.find('.item').text()).toEqual('Title of Something');
	});
});

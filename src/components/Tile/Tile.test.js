import React from 'react';
import { shallow } from 'enzyme';
import Tile from './Tile';

describe('Given the Tile component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Tile />);
	});

	it('should render a item', () => {
		expect(component.find('.item').length).toEqual(1);
	});
});

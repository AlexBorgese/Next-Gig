import React from 'react';
import { shallow } from 'enzyme';

import Tile from '../Tile';
import Lobby from './Lobby';

describe('Given the Lobby Component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Lobby />);
	});

	it('should render a div with the correct classname', () => {
		expect(component.find('.lobby').length).toEqual(1);
	});

	it('should render a tile component', () => {
		expect(component.find(Tile).length).toEqual(1);
	});
});

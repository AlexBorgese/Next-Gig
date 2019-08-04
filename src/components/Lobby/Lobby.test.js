import React from 'react';
import { shallow } from 'enzyme';

import Tile from '../Tile';
import Lobby from './Lobby';

describe('Given the Lobby Component', () => {
	let component;

	beforeEach(() => {
		component = shallow(
			<Lobby>
				<Tile />
			</Lobby>
		);
	});

	it('should render a div with the correct classname', () => {
		expect(component.find('.lobby').length).toEqual(1);
	});

	it('should add the correct title', () => {
		expect(component.find('h1').text()).toEqual('NEXT GIG');
	});

	it('should render a tile component', () => {
		expect(component.find('.content').prop('children')).toEqual(<Tile />);
	});
});

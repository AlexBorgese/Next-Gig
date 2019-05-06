import React from 'react';
import { mount } from 'enzyme';
import Section from './section';
import { Tile, Lobby } from '../components/';

const layout = {
	id: 'lobby',
	component: 'Lobby',
	props: {},
	children: [
		{
			id: 'tile',
			component: 'Tile',
			props: {
				Title: 'Rings of Saturn'
			}
		},
		{
			id: 'tile1',
			component: 'Tile',
			props: {
				Title: 'Rings of Saturn'
			}
		}
	]
};

describe('Given the Section component', () => {
	let component;

	beforeEach(() => {
		component = mount(<Section layout={layout} />);
	});

	it('should render two Tile components', () => {
		expect(component.find(Tile).length).toEqual(2);
	});

	it('should render a Lobby Component', () => {
		expect(component.find(Lobby).length).toEqual(1);
	});
});

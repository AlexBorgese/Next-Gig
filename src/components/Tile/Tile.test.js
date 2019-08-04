import React from 'react';
import { mount } from 'enzyme';
import Tile from './Tile';

const props = {
	Title: 'Title',
	date: '28/09',
	data: {}
};

const GENRES = [ 'music ofc', 'another one' ];
const EXPECTED_GENRES = [ 'music ofc, ', 'another one.' ];

describe('Given the Tile component', () => {
	let component;

	beforeEach(() => {
		component = mount(<Tile {...props} />);
	});
	it('should render a tile with the correct text', () => {
		expect(component.find('h1').text()).toEqual(props.Title);
	});

	describe('and there is data', () => {
		beforeEach(() => {
			component.setProps({
				data: Object.assign({}, props.data, {
					artists: {
						items: [
							{
								genres: GENRES,
								name: 'band',
								images: [ { url: 'some/image.jpg' } ]
							}
						]
					}
				})
			});
		});

		it('should render the genres', () => {
			expect(component.find('p').prop('children')).toEqual(EXPECTED_GENRES);
		});

		it('should render the images', () => {
			expect(component.find('img').prop('src')).toEqual('some/image.jpg');
		});

		it('should render the date', () => {
			expect(component.find('span').prop('children')).toEqual('28/09');
		});
	});

	describe('and there is no data', () => {
		beforeEach(() => {
			component.setProps({
				data: {}
			});
		});

		it('should NOT render the genres', () => {
			expect(component.find('p').length).toEqual(0);
		});

		it('should NOT render the images', () => {
			expect(component.find('img').length).toEqual(0);
		});
	});
});

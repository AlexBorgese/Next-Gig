import React from 'react';
import { mount } from 'enzyme';

import { enhance } from './TileContainer';

const DummyComponent = () => <div />;
const TestComponent = enhance(DummyComponent);

const PROPS = {
	Title: 'some band i like'
};

describe('Given a TileContainer', () => {
	let component;

	beforeAll(() => {
		fetch.resetMocks();
		fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

		component = mount(<TestComponent {...PROPS} />);
	});

	it('should render the component with the correct props', () => {
		expect(component.find(DummyComponent).length).toEqual(1);
		expect(component.find(DummyComponent).prop('data')).toEqual({});
	});

	it('should request data on mount', () => {
		expect(fetch.mock.calls.length).toEqual(1);
		expect(fetch.mock.calls[0][0]).toEqual(
			`https://api.spotify.com/v1/search?q=${PROPS.Title}&type=artist`
		);
	});
});

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Lobby from './components/Lobby';

describe('Given the App component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<App />);
	});

	it('should render the Lobby Component', () => {
		expect(component.find(Lobby).length).toEqual(1);
	});
});

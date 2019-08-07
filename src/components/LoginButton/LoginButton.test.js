import React from 'react';
import { shallow } from 'enzyme';

import LoginButton from './LoginButton';
import login from './login.js';

describe('Given a LoginButton', () => {
	let button;
	describe('when it is rendered', () => {
		beforeEach(() => (button = shallow(<LoginButton />)));

		it('should render a loginButton with the correct props', () => {
			expect(button.find('.login-button').length).toEqual(1);
			expect(button.find('.login-button').prop('onClick')).toEqual(login);
			expect(button.find('.login-button').text()).toEqual('Login');
		});
	});
});

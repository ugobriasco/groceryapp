import React from 'react';
import renderer from 'react-test-renderer';

import {Header, styles} from '../';
import buildStyles from '../../../config/styles';

//do it if you care it
beforeAll(() => {
	buildStyles();
});

describe('Header', () => {

	it('renders correctly', () => {
	const tree = renderer.create(<Header />)

	});

	it ('styles an object', () => {
		expect(typeof styles).toBe('object');
	});

	describe('onPress prop', () => {
		it('should call a function', () => {
			const rendered = renderer.create(<Header onPress={() => console.log('click')}/>);
			expect(rendered).toMatchSnapshot();	
		});

	});

});




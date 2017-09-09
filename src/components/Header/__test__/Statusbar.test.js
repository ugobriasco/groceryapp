import React from 'react';
import renderer from 'react-test-renderer';

import {Statusbar, styles} from '../';
import buildStyles from '../../../config/styles';

//do it if you care it
beforeAll(() => {
	buildStyles();
});

describe('Statusbar', () => {

	it('renders correctly', () => {
	const tree = renderer.create(<Statusbar />)

	});

	it ('styles an object', () => {
		expect(typeof styles).toBe('object');
	});

});




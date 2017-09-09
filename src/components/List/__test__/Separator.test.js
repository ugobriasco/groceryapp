import React from 'react';
import renderer from 'react-test-renderer';

import {Separator, styles} from '../';

describe('Separator', () => {

	it('renders correctly', () => {
	const tree = renderer.create(<Separator />)

	});

	it ('styles an object', () => {
		expect(typeof styles).toBe('object');
	});


});




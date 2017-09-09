import React from 'react';
import renderer from 'react-test-renderer';

import {Logo, styles} from '../';

describe('Logo', () => {

	it('renders correctly', () => {
	const tree = renderer.create(<Logo />).toJSON();
	expect(tree).toBeTruthy();

	});

	it ('styles an object', () => {
		expect(typeof styles).toBe('object');
	});

	describe('customization props', () => {
		it('should customize the logo dimension, proportion, and colors', () => {
			const rendered = renderer.create(
				<Logo 
					imageColor='red'
					customWidth='200'
					backgroundColor='blue'
					ratio='3'
				/>
			);
			expect(rendered).toMatchSnapshot();	
		});
	});

});




import React from 'react';
import renderer from 'react-test-renderer';

import {EmptyListPlaceholder, styles} from '../';

describe('EmptyListPlaceholder', () => {

	it('renders correctly', () => {
	const tree = renderer.create(<EmptyListPlaceholder />)

	});

	it ('styles an object', () => {
		expect(typeof styles).toBe('object');
	});

	describe('_opt prop', () => {
		it('should render the empty-list placeholder if passed', () => {
			const rendered = renderer.create(<EmptyListPlaceholder _opt={'empty-list'}/>);
			expect(rendered).toMatchSnapshot();	
		});

		it('should render the empty-filter placeholder if passed', () => {
			const rendered = renderer.create(<EmptyListPlaceholder _opt={'empty-filter'}/>);
			expect(rendered).toMatchSnapshot();	
		});

	});

});




import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import Icon from  'react-native-vector-icons/MaterialIcons';

import {ListMarker, styles} from '../';

describe('ListMarker', () => {

	it('renders correctly', () => {
	const tree = renderer.create(<ListMarker />).toJSON();
	expect(tree).toBeTruthy();

	});

	it ('styles an object', () => {
		expect(typeof styles).toBe('object');
	});

	describe('size stzling props', () => {
		it('should render an icon with the selected size', () => {
			const rendered = renderer.create(<ListMarker size='50'/>);
			expect(rendered).toMatchSnapshot();	
		});
		it('should render an icon with a given color if isChecked=true', () => {
			const rendered = renderer.create(<ListMarker isChecked={true} color='red'/>);
			expect(rendered).toMatchSnapshot();	
		});
	});
});
import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import Icon from  'react-native-vector-icons/MaterialIcons';

import {TextWithIcon, styles} from '../';

describe('TextWithIcon', () => {

	it('renders correctly', () => {
	const tree = renderer.create(<TextWithIcon />).toJSON();
	expect(tree).toBeTruthy();

	});

	it ('styles an object', () => {
		expect(typeof styles).toBe('object');
	});

	describe('size styling props', () => {
		it('should render a given tex wit customized color, background and icon', () => {
			const rendered = renderer.create(
				<TextWithIcon 
					text="foo" 
					backgroundColor="red"
					textColor="blue" 
					iconName="add"
				/>);
			expect(rendered).toMatchSnapshot();	
		});
	});
});




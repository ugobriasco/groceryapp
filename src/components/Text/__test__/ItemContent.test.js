import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import Icon from  'react-native-vector-icons/MaterialIcons';

import {ItemContent, styles} from '../';

describe('ItemContent', () => {

	it('renders correctly', () => {
	const tree = renderer.create(<ItemContent />).toJSON();
	expect(tree).toBeTruthy();

	});

	it ('styles an object', () => {
		expect(typeof styles).toBe('object');
	});

	describe('size styling props', () => {
		it('should render title and subtitles with a given color as defined', () => {
			const rendered = renderer.create(
				<ItemContent 
					title="foo" 
					subtitle1="foo1" 
					subtitle2="foo2" 
					color="red"
				/>);
			expect(rendered).toMatchSnapshot();	
		});
	});
});




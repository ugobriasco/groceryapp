import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

import {ListItem, styles} from '../';

describe('ListItem', () => {

	it('renders correctly', () => {
	const tree = renderer.create(<ListItem />)

	});

	it ('styles an object', () => {
		expect(typeof styles).toBe('object');
	});

	describe('text and custom icon props', () => {
		it('should render a text and a custom element if passed ', () => {
			const rendered = renderer.create(<ListItem text="foo" customIcon={<Text>This is a custom element</Text>}/>);
			expect(rendered).toMatchSnapshot();	
		});
	});

	describe('onPress prop', () => {
		it('should trigger a function if pressed ', () => {
			const rendered = renderer.create(<ListItem onPress={()=>console.log('foo')}/>);
			expect(rendered).toMatchSnapshot();	
		});
	});

});




import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import Icon from  'react-native-vector-icons/MaterialIcons';

import {Checkbox, styles} from '../';

describe('Checkbox', () => {

	it('renders correctly', () => {
	const tree = renderer.create(<Checkbox />).toJSON();
	expect(tree).toBeTruthy();

	});

	it ('styles an object', () => {
		expect(typeof styles).toBe('object');
	});

	describe('size stzling props', () => {
		it('should render an icon with the selected size', () => {
			const rendered = renderer.create(<Checkbox size='50'/>);
			expect(rendered).toMatchSnapshot();	
		});
		it('should render an unchecked box if isChecked=false', () => {
			const rendered = renderer.create(<Checkbox isChecked={false}/>);
			expect(rendered).toMatchSnapshot();	
		});
		it('should render an unchecked box if isChecked=true', () => {
			const rendered = renderer.create(<Checkbox isChecked={true}/>);
			expect(rendered).toMatchSnapshot();	
		});
	});

	describe('onPress prop', () => {
		it('should trigger a function if pressed ', () => {
			const rendered = renderer.create(<Checkbox onPress={()=>console.log('foo')}/>);
			expect(rendered).toMatchSnapshot();	
		});
	});
});




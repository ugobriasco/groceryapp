import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
//import styles from '../styles';
import { Container, styles} from '../index.js';

// Note: test renderer must be required after react-native.


it('renders correctly', () => {
  const rendered = renderer.create(<Container/>).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles is an object', () => {
expect(typeof styles).toBe('object');
});


it('renders the child prop', () => {
	const rendered = renderer.create(<Container><View /></Container>).toJSON();
	expect(rendered).toMatchSnapshot();
});

it('uses the specified background, if provided', () => {
	const rendered = renderer.create(<Container backgroundColor="red"/>).toJSON();
	expect(rendered).toMatchSnapshot();
});
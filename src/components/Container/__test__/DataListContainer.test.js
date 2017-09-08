import React from 'react';
import renderer from 'react-test-renderer';

import { View } from 'react-native';
import { DataListContainer, styles} from '../';

// Note: test renderer must be required after react-native.


it('renders correctly', () => {
  const rendered = renderer.create(<DataListContainer />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles is an object', () => {
expect(typeof styles).toBe('object');
});

it('renders the child prop', () => {
	const rendered = renderer.create(<DataListContainer><View /></DataListContainer>).toJSON();
	expect(rendered).toMatchSnapshot();
});
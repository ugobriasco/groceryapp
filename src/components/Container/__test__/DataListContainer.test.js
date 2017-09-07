import React from 'react';
import renderer from 'react-test-renderer';

import { View } from 'react-native';
//import styles from '../styles';
import { DataListContainer, styles} from '../../Container';

// Note: test renderer must be required after react-native.


it('renders correctly', () => {
  const rendered = renderer.create(<DataListContainer />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles is an object', () => {
expect(typeof styles).toBe('object');
});

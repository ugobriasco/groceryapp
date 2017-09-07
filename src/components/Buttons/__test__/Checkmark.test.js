import React from 'react';
import renderer from 'react-test-renderer';

import {Checkmark, styles} from '../';
import buildStyles from '../../../config/styles';

//do it if you care it
beforeAll(() => {
	buildStyles();
})

it('renders correctly', () => {
	const tree = renderer.create(<Checkmark />)

});

it ('styles an object', () => {
	expect(typeof styles).toBe('object');
});

it('renders a custom backgroundColor passed via props', () => {
	const rendered = renderer.create(<Checkmark iconBackground='red'/>);
	expect(rendered).toMatchSnapshot();
});
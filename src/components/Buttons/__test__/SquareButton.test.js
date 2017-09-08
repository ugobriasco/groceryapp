import React from 'react';
import renderer from 'react-test-renderer';


import {SquareButton, styles} from '../';
import Icon from  'react-native-vector-icons/MaterialIcons';
import buildStyles from '../../../config/styles';


//do it if you care it
beforeAll(() => {
	buildStyles();
});

describe('SquareButton', () =>{

	it('renders correctly', () => {
	const tree = renderer.create(<SquareButton />)
	});

	it('styles an object', () => {
		expect(typeof styles).toBe('object');
	});

	it('should customize the button if icon name, color and size are set',()=>{
		const rendered = renderer.create(
			<SquareButton 
				iconName='add'
				size='40'
				color='blue'
				textColor='green'
				borderColor='grey'
			/>
		);
		expect(rendered).toMatchSnapshot();	
	});

	describe('props onPress', () => {
		it('should call a function', () => {
			const rendered = renderer.create(<SquareButton onPress={() => console.log('click')}/>);
			expect(rendered).toMatchSnapshot();	
		});
	});
});

const mockPressable = (name) => {
  const RealComponent = require.requireActual(name);

  class Component extends RealComponent {

    render() {
      return React.createElement(
        RealComponent.displayName || RealComponent.name,
        { ...this.props, onClick: this.props.onPress },
        this.props.children
      );
    }

  }

  return Component;
};


jest.mock('TouchableOpacity', () => mockPressable('TouchableOpacity'));
import React, { Component } from 'react';
import {
	View,
	TextInput,
	Text,
	Animated,
	Easing,
	Keyboard,
	Platform,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';
import {SquareButton} from '../../../../components/Buttons';
import HorizontalListItem from './HorizontalListItem';

const ANIMATION_DURATION = 400;

class Omnibox extends Component {

	static propTypes = {
		onPress: PropTypes.func,
		onAutocompletePress: PropTypes.func,
		data: ProTypes.any,
	};

	constructor(props) {
		super(props);
		
		this.state = {
			autocompleteMarginBottom: new Animated.Value(-50),
		};
	}

	componentDidMount(){
		
		const name = Platform.OS === 'ios' ? 'Will' : 'Did';
	    this.keyboardDidShowListener = Keyboard.addListener(
	      `keyboard${name}Show`,
	      this._keyboardWillShow,
	    );
	    this.keyboardDidHideListener = Keyboard.addListener(
	      `keyboard${name}Hide`,
	      this._keyboardWillHide,
	    );
	}

	componentWillUnmount(){
	    this.keyboardDidShowListener.remove();
	    this.keyboardDidHideListener.remove();
	}

	
	_keyboardWillShow = () => {
		Animated.timing(this.state.autocompleteMarginBottom, {
			toValue: 0,
			duration: ANIMATION_DURATION,
		}).start();
	}

	_keyboardWillHide = () => {
		Animated.timing(this.state.autocompleteMarginBottom, {
			toValue: -50,
			duration: ANIMATION_DURATION,
		}).start();
	}
	

	render(){

		return(
			<View style={styles.container}>
				<Animated.View style={{marginBottom: this.state.autocompleteMarginBottom}}>	
					<FlatList
						horizontal={true}
						keyboardShouldPersistTaps='always'
					  	data={this.props.data}
					  	renderItem={({item}) => (
					  		<HorizontalListItem
					  			 title={`${item.name.it.main} ${item.name.it.spec}`}
					  			 onPress = {() => {this.props.onAutocompletePress(item)}}
					  		/>
					  	)}
					  	keyExtractor = {item => item._id}
					  			
					/>
				</Animated.View>
				<View style={styles.input_group}>
					<View style={styles.inputform_wrapper}>
						<TextInput
							style={styles.inputform}
							placeholder='Add an item or Search'
							blurOnSubmit={false}
							{...this.props}
						/>
					</View>
					<View style={styles.button_wrapper}>
						<SquareButton
							iconName = 'add'
							size = '35'
							borderColor = 'transparent'
							color = {_styles.$primary}
							textColor = {_styles.$white}
							onPress = {this.props.onPress}
						/>	
					</View>
				</View>	
			</View>
		);
	}


	
}
export default Omnibox;

const _styles = EStyleSheet.create({
  	$primary: '$brandingBackground',
  	$danger: '$dangerBackground',
  	$gray: '$primaryBoxColor',
  	$white: '#ffff',

});



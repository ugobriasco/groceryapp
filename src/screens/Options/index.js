import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	Platform,
	Linking,
} from 'react-native';
import PropTypes from 'prop-types';

import { Statusbar } from '../../components/Header';
import { Separator, ListItem } from '../../components/List';
import Icon from  'react-native-vector-icons/MaterialIcons';
import { connectAlert } from '../../components/Alert';


const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
	static PropTypes = {
		alertWithType: PropTypes.func,
	}

	
	handleGroceriesPress = () => {
		this.props.navigation.navigate('Groceries');
	};

	handleLanguagesPress = () => null;
	
	handleSitePress = () => {
		Linking.openURL('http://gb.matchyourtie.com').catch(() => this.props.alertWithType('error', 'Sorry!', 'Grocerybot.io cant be opened'));
	}

	render() {

		return(
			<ScrollView>
				<Statusbar/>
				<ListItem
					text="Your Groceries"
					onPress={this.handleGroceriesPress}
           			customIcon={
           				<Icon name={'add'} size={ICON_SIZE} color={ICON_COLOR}/>	
          			}
				/>
				<Separator/>
				<ListItem
					text="Set languages"
					onPress={this.handleLanguagesPress}
           			customIcon={
           				<Icon name={'add'} size={ICON_SIZE} color={ICON_COLOR}/>
          			}
				/>
				<Separator/>
				
				<ListItem
					text="Grocerybot.io"
					onPress={this.handleSitePress}
           			customIcon={
           				<Icon name={'add'} size={ICON_SIZE} color={ICON_COLOR}/>
          			}
				/>
				<Separator/>
			</ScrollView>
		);
	}
}

export default connectAlert(Options);

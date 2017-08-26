import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Animated,
	Text,
	Linking,
} from 'react-native';
import PropTypes from 'prop-types';

import { Statusbar } from '../../components/Header';
import { Separator, ListItem } from '../../components/List';
import { Checkbox } from '../../components/Switches';
import Icon from  'react-native-vector-icons/MaterialIcons';
import { connectAlert } from '../../components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 30;

class Settings extends Component {
	static PropTypes = {
		alertWithType: PropTypes.func,

	}

	constructor(props){
		super(props)
		this.state ={
			multipleLanguages: false,
			expandLanguages: new Animated.Value(-70)
		}
	}


	handlePrimaryLanguagePress = () => {
		this.props.navigation.navigate('LanguagesList', {title: 'Primary Language', type: 'primary'});
		
	}
	
	handleAddtLanguagesPress = () => {
		this.props.navigation.navigate('LanguagesList', {title: 'Additional Language', type: 'secondary'});	
	}

	toggleLanguagesPress = () => {
		this.setState({multipleLanguages: !this.state.multipleLanguages});
	};
		
	handleSitePress = () => {
		Linking.openURL('httpt://gb.matchyourtie.com').catch(() => this.props.alertWithType('error', 'Sorry!', 'Grocerybot.io cant be opened'));
	}

	render() {

		let renderMuLanguages = (<View></View>); 
		if(this.state.multipleLanguages){

			renderMuLanguages = (
				<View>
				<ListItem
						text="Additinal Languages"
						onPress={this.handleAddtLanguagesPress}
	           			customIcon={
	           				<View>
	           					<Text>German</Text>
	           					<Text>Polish</Text>
	           				</View>		
	          			}
				/>
				<Separator/>
				</View>
			);
		}

		return(
			<ScrollView>
				<Statusbar/>
				<ListItem
					text="Primary Language"
					onPress={this.handlePrimaryLanguagePress}
           			customIcon={
           				<Text>Italian</Text>
          			}
				/>
				<Separator/>
				<ListItem
					text="Multiple Languages"
					onPress={this.toggleLanguagesPress}
           			customIcon={
           				<Icon name={this.state.multipleLanguages ? 'check-box' : 'check-box-outline-blank'} size={ICON_SIZE} color={ICON_COLOR}/>
          			}
				/>
				<Separator/>

				{renderMuLanguages}
							
				<ListItem
					text="Grocerybot.io"
					onPress={this.handleSitePress}
           			customIcon={
           				<Icon name={'link'} size={ICON_SIZE} color={ICON_COLOR}/>
          			}
				/>
				<Separator/>
			</ScrollView>
		);
	}
}

export default connectAlert(Settings);

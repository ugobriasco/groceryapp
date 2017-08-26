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
import { connect }from 'react-redux';

import {
	setLanguages,
	setOptMutipleLanguages,

} from '../../actions/settings'

const ICON_COLOR = '#868686';
const ICON_SIZE = 30;

class Settings extends Component {
	static PropTypes = {
		alertWithType: PropTypes.func,

	}

	constructor(props){
		super(props)
		this.state ={
			expandLanguages: new Animated.Value(-70),
		}
	}


	handlePrimaryLanguagePress = () => {
		this.props.navigation.navigate('LanguagesList', {title: 'Primary Language', type: 'primary'});	
	}
	
	handleAddtLanguagesPress = () => {
		this.props.navigation.navigate('LanguagesList', {title: 'Additional Language', type: 'secondary'});	
	}
	toggleLanguagesPress = () => {

		const currentState = this.props.multipleLanguages;

		if(currentState){
			//this.setState({multipleLanguages: false});
			this.props.dispatch(setOptMutipleLanguages(false));
		} else {
			//this.setState({multipleLanguages: true});
			this.props.dispatch(setOptMutipleLanguages(true));
		}
	};	
	handleSitePress = () => {
		Linking.openURL('httpt://gb.matchyourtie.com')
		.catch(() => this.props.alertWithType('error', 'Sorry!', 'Grocerybot.io cant be opened'));
	}

	render() {

		let renderMuLanguages = (<View></View>); 
		if(this.props.multipleLanguages){

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
           				<Icon name={this.props.multipleLanguages ? 'check-box' : 'check-box-outline-blank'} size={ICON_SIZE} color={ICON_COLOR}/>
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

const mapStateToProps = (state) => {
	return{
		multipleLanguages: state.settings.multipleLanguages,
	}
}

export default connect (mapStateToProps) (connectAlert(Settings)) ;

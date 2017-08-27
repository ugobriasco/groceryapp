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
			language: this.props.language[0].name,
		}

		this.handleAddtLanguage1Press = this.handleAddtLanguage1Press.bind(this);
	}

	componentWillReceiveProps(nextProps) {
	    this.forceUpdate();
	}


	handlePrimaryLanguagePress = () => {
		this.props.navigation.navigate('LanguagesList', {title: 'Primary Language', type: 'language[0]'});	
	}
	
	handleAddtLanguage1Press = () => {
		this.props.navigation.navigate('LanguagesList', {title: 'Additional Language', type: 'language[1]'});	
	}
	handleAddtLanguage2Press = () => {
		this.props.navigation.navigate('LanguagesList', {title: 'Additional Language', type: 'language[2]'});	
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
						text="Additional Language I"
						onPress={this.handleAddtLanguage1Press}
	           			customIcon={
	           				<View>
	           					<Text>{this.props.language[1].name}</Text>
	           				</View>		
	          			}
				/>
				<Separator/>
				<ListItem
						text="Additional Languages II"
						onPress={this.handleAddtLanguage2Press}
	           			customIcon={
	           				<View>
	           					<Text>{this.props.language[2].name}</Text>
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
           				<Text>{this.props.language[0].name}</Text>
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
		language: state.settings.language,
	}
}

export default connect (mapStateToProps) (connectAlert(Settings)) ;

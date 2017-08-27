import React, { Component } from 'react';
import {
	FlatList,
	View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem, Separator } from '../../components/List';
import availableLanguages from '../../data/localization';

import { setLanguages } from '../../actions/settings';

import { Statusbar } from '../../components/Header';
import { Checkmark } from '../../components/Buttons';

class LanguagesList extends Component {
	
	static propTypes = {

	}

	handlePress = (item) => {
		const { type } = this.props.navigation.state.params;
		let _language = this.props.language;

		if(type === 'language[0]') _language[0] = item;
		if(type === 'language[1]') _language[1] = item;
		if(type === 'language[2]') _language[2] = item;
		
		this.props.dispatch(setLanguages(_language));
		this.props.navigation.goBack(null);
	}

	render(){

		let compairsonLanguage = eval(`this.props.${this.props.navigation.state.params.type}.id`);


		return(
			<View style={{flex: 1}}>
				<Statusbar/>
				<FlatList
					data={availableLanguages}
					keyExtractor = {item => item.id}
					renderItem = {({item})=>(
						<ListItem
							text={item.name}
							onPress={() => (this.handlePress(item))}
							customIcon = {
								<Checkmark
									isVisible={item.id === compairsonLanguage}
								/>

							}
						/>
					)}

				/>
			</View>


		);
	}
}

const mapStatesToProps = (state) => {
	return {
		language: state.settings.language
	}
}

export default connect (mapStatesToProps)(LanguagesList);


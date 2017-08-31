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


const replace = (array, index, object) => {
	let arr = array.slice();
	arr.splice(index,1,object);
	return arr;
}


class LanguagesList extends Component {
	
	static propTypes = {

	}

	//buggy
	_handlePress = (item) => {
		const { type } = this.props.navigation.state.params;
		let updatedLanguage = [];
		if(type === 'language[0]')  updatedLanguage = replace(this.props.language,0,item);
		if(type === 'language[1]') updatedLanguage = replace(this.props.language,1,item);
		if(type === 'language[2]') updatedLanguage = replace(this.props.language,2,item);
		this.props.dispatch(setLanguages(updatedLanguage));
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
							onPress={() => (this._handlePress(item))}
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


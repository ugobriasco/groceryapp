import React, { Component } from 'react';
import {
	FlatList,
	View,
} from 'react-native';
import PropTypes from 'prop-types';
import { ListItem, Separator } from '../../components/List';
import availableLanguages from '../../data/localization';

import { Statusbar } from '../../components/Header';


class LanguagesList extends Component {
	
	static propTypes = {

	}

	handlePress = () => null

	render(){
		return(
			<View style={{flex: 1}}>
				<Statusbar/>
				<FlatList
					data={availableLanguages}
					keyExtractor = {item => item.id}
					renderItem = {({item})=>(
						<ListItem
							text={item.name}
							onPress={this.handlePress}
						/>
					)}

				/>
			</View>


		);
	}
}

export default LanguagesList;


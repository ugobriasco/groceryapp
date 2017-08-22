import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	Platform,
	Linking
} from 'react-native';
import PropTypes from 'prop-types';

import { Statusbar } from '../../components/Header';
import { Separator, ListItem } from '../../components/List';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
	static PropTypes = {

	}

	handleSitePress = () => null;

	render() {

		return(
			<ScrollView>
				<Statusbar/>
				<ListItem
					text="Grocerybot.io"
					onPress={this.handleSitePress}
           			customIcon={
           				<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />
          			}
				/>
				<Separator/>
				<ListItem
					text="Grocerybot.io"
					onPress={this.handleSitePress}
           			customIcon={
           				<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />
          			}
				/>
				<Separator/>
			</ScrollView>
		);
	}
}

export default Options;

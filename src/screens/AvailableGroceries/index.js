import React, { Component } from 'react';
import {
	FlatList,
	View,
	StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import { ListItem } from './components/List';
import { DataListContainer} from '../../components/Container';
import {Header} from '../../components/Header';

import mockupData from '../../data/mockupData';

class AvailableGroceries extends Component {


	handleSwipeLeftComplete = (item) => null;
	handleSwipeRightComplete = (item) => null;
	handleOptionsPress = () => null;

	render(){
		return(
			<DataListContainer>
				<StatusBar 
					translucent={false}			//android
					barStyle="default"			//ios
				/>
				<Header
					onPress={this.handleOptionsPress}
				/>
				<FlatList
					data={mockupData}
					renderItem={({item}) => (
							<ListItem
								title={item.name.it.main}
								subtitle1={item.name.de.main}
								subtitle2={item.name.pl.main}
								imageSource={item.pic}
								onSwipeLeftComplete= {() => {this.handleSwipeLeftComplete(item)}}
								onSwipeRightComplete = {() => {this.handleSwipeRightComplete(item)}}
							/>
					)}
					keyExtractor = {item => item._id}
				/>	
			</DataListContainer>
		);
	}
}

export default AvailableGroceries;
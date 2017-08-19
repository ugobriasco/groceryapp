import React, { Component } from 'react';
import {
	FlatList,
	View,
	StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

import { ItemToGroceries} from '../components/List';
import mockupData from '../data/mockupData';

class AvailableGroceries extends Component {
	static propTypes = {

	}

	handleSwipeLeftComplete = (grocery) => null;

	render(){

		return(
			<View style={{flex: 1}}>
				<StatusBar 
					translucent={false}			//android
					barStyle="default"			//ios
				/>
				<FlatList
				data={mockupData}
				renderItem={({item}) => (
						<ItemToGroceries
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
			</View>
		);
	}
}

export default AvailableGroceries;
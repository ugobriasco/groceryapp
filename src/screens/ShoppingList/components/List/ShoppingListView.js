

import React, { Component } from 'react';
import {
	FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class ShoppingListView extends Component {

	static PropTypes = {
		onCheckBoxPress: PropTypes.func,
		onSwipeLeftComplete: PropTypes.func,
		onSwipeRightComplete: PropTypes.func,
		listView: PropTypes.array,
	};


	constructor(props){
		super(props);
		

		this.state = {
			listView: this.props.listView,
		}
	}

	componentDidMount(){

	}

	render(){
		return(
			<FlatList
				data={this.state.listView}
				renderItem = {({item}) =>  (
					<ListItem
							title={item.title}
							subtitle1={item.title2}
							subtitle2={item.title3}
							imageSource={item.imgUrl}
							isChecked={item.isCompleted}
							onCheckBoxPress			=	{() => {this.props.onCheckBoxPress(item)}}
							onSwipeRightComplete	=	{() => {this.props.onSwipeRightComplete(item)}}
							onSwipeLeftComplete		= 	{() => {this.props.onSwipeLeftComplete(item)}}
					/>
				)}
				keyExtractor = {(item) => item._id}
			
			/>
		);
	}



}

export default ShoppingListView
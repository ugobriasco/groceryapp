import React, { Component } from 'react';
import {
	FlatList,
	View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListItem } from './components/List';
import { DataListContainer } from '../../components/Container';
import { Statusbar } from '../../components/Header';

import mockupData from '../../data/mockupData';

class AvailableGroceries extends Component {

	handleSwipeRightComplete = (item) => null;
	handleItemCheck = item => true;
	handleOptionsPress = () => null;

	render(){
		return(
			<DataListContainer>
				<Statusbar/>
				<FlatList
					data={this.props.groceriesView}
					renderItem={({item}) => (
							<ListItem
								title={item.name.it.main}
								subtitle1={item.name.de.main}
								subtitle2={item.name.pl.main}
								imageSource={item.pic}
								onSwipeRightComplete = {() => {this.handleSwipeRightComplete(item)}}
								isChecked = {this.handleItemCheck(item)}

							/>
					)}
					keyExtractor = {item => item._id}
				/>	
			</DataListContainer>
		);
	}
}
const mapStateToProps = (state) => {
	return{
		dataList: state.shoppinglist.dataList,
		groceriesList: state.groceries.groceriesData.list,
		groceriesView: state.groceries.groceriesView,
		
	};
}

export default connect(mapStateToProps) (AvailableGroceries);


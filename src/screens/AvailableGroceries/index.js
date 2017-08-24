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

import { updateGroceries } from '../../actions/groceries';

class AvailableGroceries extends Component {

	static PropTypes = {
		dispatch: PropTypes.func,
		updatedGroceries: PropTypes.func,
	}

	flagGrocery = (item) => {
		const i = this.props.groceriesList.indexOf(item);
		let list = this.props.groceriesList;
		list[i].isFlagged = true;
		this.props.dispatch(updateGroceries(list));
		//this.forceUpdate();
	}

	handleSwipeRightComplete = (item) => {item ? this.flagGrocery(item) : null}

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
								isChecked = {item.isFlagged}

							/>
					)}
					keyExtractor = {item => item._id}
					extraData = {this.props.groceriesView}

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


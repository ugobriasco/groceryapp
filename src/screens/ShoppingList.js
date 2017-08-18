import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
	StatusBar,
	View,
	FlatList, 

} from 'react-native';

import { 
	ListItem, 
	Separator, 
} from '../components/List';

import ItemModel from '../components/List/ItemModel';
import { DataListContainer } from '../components/Container';
import { Omnibox } from '../components/TextInput';

import { 
	getInitialDataList,
	changeFilterText,
	updateListView,
	updateDataList,
	syncLists, 
	
} from '../actions/shoppinglist';

const move = (array, fromIndex, toIndex) => {
	return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
};

const remove = (array, index) => {
	return array.splice(index, 1);
};

class ShoppingList extends Component {

	static propTypes = {
		dispatch: PropTypes.func,
		getInitialDataList: PropTypes.func,
		changeFilterText: PropTypes.func,
		updateListView: PropTypes.func,
		updateDataList: PropTypes.func,
		syncLists: PropTypes.func,
	}

	componentWillMount(){
		this.props.dispatch(getInitialDataList());
	}

	handleAddPress(text){
		if(text){
			const data = this.props.dataList;
			let arr = [new ItemModel(text)];
			arr = arr.concat(data);
			this.props.dispatch(updateDataList(arr));
			this.props.dispatch(syncLists(arr));
			this.props.dispatch(changeFilterText(''));			
		}
	}

	handleCheckBoxPress = (item) => {
		const i = this.props.dataList.indexOf(item);
		let size = this.props.dataList.length;
		let arr = this.props.dataList;
		if(arr[i].isCompleted === false) {
			arr[i].isCompleted = true;
			move(arr,i,size);
		} //if completed, item move to the bottom
		else {
			arr[i].isCompleted = false;
			move(arr,i,0);
		} // if not completed, item moved to the top
		
		this.props.dispatch(updateListView(arr));
		this.props.dispatch(syncLists(arr));
		this.props.dispatch(changeFilterText(''));
		this.forceUpdate();
	}

	handleFilterStrChange = (text) => {
		let filteredList = this.props.dataList.filter((item) =>
			item.title.match(new RegExp('.*' + text +'.*', 'gi'))  ||
			item.title2.match(new RegExp('.*' + text +'.*', 'gi'))  ||
			item.title3.match(new RegExp('.*' + text +'.*', 'gi'))
		);
		this.props.dispatch(updateListView(filteredList));
		this.props.dispatch(changeFilterText(text));
	}

	handleSwipeRightComplete = (item) => {
		const i = this.props.dataList.indexOf(item);
		let arr = this.props.dataList;
		remove(arr,i);
		this.props.dispatch(updateDataList(arr));
		this.props.dispatch(syncLists(arr));
		this.props.dispatch(changeFilterText(''));
		this.forceUpdate();	
	}


	render(){
		return(
			<DataListContainer>
				<StatusBar translucent={false} barStyle="default"/>
				<FlatList
					style = {{flex: 1}}
					data={this.props.listView}
					renderItem={({item}) => (
						<ListItem
							title={item.title}
							subtitle1={item.title2}
							subtitle2={item.title3}
							imageSource={item.imgUrl}
							isMarked={item.isCompleted}
							onCheckBoxPress={() => {this.handleCheckBoxPress(item)}}
							onSwipeRightComplete={ () => {this.handleSwipeRightComplete(item)}}
						/>
					)}
					keyExtractor = {
						item => item.cretedAt
					}
					
				/>
				<Omnibox
					onPress={() => this.handleAddPress(this.props.filterString)}
					onChangeText= {this.handleFilterStrChange}
					value = {this.props.filterString}
				/>
			</DataListContainer>
			
		);
	}
}



const mapStateToProps = (state) => {
	return{
		dataList: state.shoppinglist.dataList,
		listView: state.shoppinglist.listView,
		filteredDataList: state.shoppinglist.filteredList,
		filterString: state.shoppinglist.filterString,
	};
}

export default connect(mapStateToProps)(ShoppingList);



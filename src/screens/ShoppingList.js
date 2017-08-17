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
	filterDataList,
	updateDataList,
	updateLists,
} from '../actions/shoppinglist';

class ShoppingList extends Component {

	static propTypes = {
		dispatch: PropTypes.func,
		getInitialDataList: PropTypes.func,
		changeFilterText: PropTypes.func,
		filterDatalist: PropTypes.func,
		updateDataList: PropTypes.func,
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
			this.props.dispatch(filterDataList(arr,''));			
		}
	}

	handleCheckBoxPress(item){
		const i = this.props.dataList.indexOf(item);
		let arr = this.props.dataList;
		if(arr[i].isCompleted === false) arr[i].isCompleted = true;
		else arr[i].isCompleted = false;
		this.props.dispatch(updateDataList(arr));
		this.props.dispatch(filterDataList(arr,''));
		this.forceUpdate();
	}

	handleFilterStrChange = (text) => {
		let filteredList = this.props.dataList.filter((item) =>
			item.title.match(new RegExp('.*' + text +'.*', 'gi'))  ||
			item.title2.match(new RegExp('.*' + text +'.*', 'gi'))  ||
			item.title3.match(new RegExp('.*' + text +'.*', 'gi'))
		);
		this.props.dispatch(filterDataList(filteredList, text));
	}

	

	render(){
		return(
			<DataListContainer>
				<StatusBar translucent={false} barStyle="default"/>
				<FlatList
					style = {{flex: 1}}
					data={this.props.filteredDataList}
					renderItem={({item}) => (
						<ListItem
							title={item.title}
							subtitle1={item.title2}
							subtitle2={item.title3}
							imageSource={item.imgUrl}
							isMarked={item.isCompleted}
							onCheckBoxPress={() => {this.handleCheckBoxPress(item)}}
						/>
					)}
					keyExtractor = {
						item => item.cretedAt
					}
					itemSeparatorComponent = {Separator}
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
		filterString: state.shoppinglist.filterString,
		filteredDataList: state.shoppinglist.filteredList,
	};
}

export default connect(mapStateToProps)(ShoppingList);



import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
	StatusBar,
	View,
	FlatList,
	Text,
} from 'react-native';

//shared components
import { EmptyListPlaceholder, Separator } from '../../components/List';
import { DataListContainer, AutocompleteContainer } from '../../components/Container';
import { Header } from '../../components/Header';


//local components
import { ListItem, HorizontalListItem } from './components/List';
import { Omnibox } from './components/Omnibox';

//backend
import mockupData from '../../data/mockupData';
import ItemModel from '../../models/ItemModel'; 
import { 
	getInitialDataList,
	changeFilterText,
	updateListView,
	updateDataList,
	syncLists, 	
} from '../../actions/shoppinglist';
import { updateGroceriesView }from '../../actions/groceries';

const move = (array, fromIndex, toIndex) => {
	return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
};

const remove = (array, index) => {
	return array.splice(index, 1);
};

class ShoppingList extends Component {

	//to update
	static propTypes = {
		dispatch: PropTypes.func,
		getInitialDataList: PropTypes.func,
		changeFilterText: PropTypes.func,
		updateListView: PropTypes.func,
		updateDataList: PropTypes.func,
		syncLists: PropTypes.func,
		dataList: PropTypes.array,
		listView: PropTypes.array,
		filterString: PropTypes.string
	}

	componentWillMount(){
		this.props.dispatch(getInitialDataList());	
	}

	//dispatch the changes to the list, clear filter ans force update;
	save = (list) => {
		this.props.dispatch(updateListView(list));
		this.props.dispatch(syncLists(list));
		this.props.dispatch(changeFilterText(''));
		this.forceUpdate();
	}
	//switch item.isCompleted and move it to the top/bottom of the list
	markItem = (item) => {
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
		this.save(arr);
	}
	//add an item to the top of the list
	addItem = (text) => {
		const data = this.props.dataList;
		let arr = [new ItemModel(text)];
		arr = arr.concat(data);
		this.save(arr);
	}
	addItemFromGroceries = (item) => {
		const data = this.props.dataList;
		let arr = [
			new ItemModel(
			  	item.name.it.main,
			  	item.name.de.main,
			  	item.name.pl.main,
			  	item.pic,
			  	item._id,
			  	)
	  	];
	  	arr = arr.concat(data);
		this.save(arr);
	}
	//remove an item from the list
	removeItem = (item) => {
		const i = this.props.dataList.indexOf(item);
		let arr = this.props.dataList;
		remove(arr,i);
		this.save(arr);	
	}



	//UI handling
	handleAddPress = 			(text) => {text ? this.addItem(text) : null}
	handleCheckBoxPress = 		(item) => {item ? this.markItem(item) : null} 
	handleSwipeRightComplete = 	(item) => {item ? this.removeItem(item) : null}
	handleSwipeLeftComplete = 	(item) => {item ? this.markItem(item) : null}
	handleFilterStrChange = 	(text) => {
		let filteredList = this.props.dataList.filter((item) =>
			item.title.match(new RegExp('.*' + text +'.*', 'gi'))  ||
			item.title2.match(new RegExp('.*' + text +'.*', 'gi'))  ||
			item.title3.match(new RegExp('.*' + text +'.*', 'gi'))
		);

		let filteredGroceries = this.props.groceriesList.filter((item) =>
			item.name.it.main.match(new RegExp('.*' + text +'.*', 'gi'))
		);

		this.props.dispatch(updateListView(filteredList));
		this.props.dispatch(updateGroceriesView(filteredGroceries));
		this.props.dispatch(changeFilterText(text));
	}
	handleAutocompletePress = (item) => {item ? this.addItemFromGroceries(item): null}
	handleOptionsPress = () => null;

	

	render(){


//LISTVIEW SECTION
		let renderedListView = (<View></View>);
		if(this.props.listView.length === 0 && this.props.dataList.length === 0) {
			renderedListView = (<EmptyListPlaceholder opt='empty-list'/>);
		} 
		if(this.props.listView.length === 0 && this.props.dataList.length > 0) {
			renderedListView = (<EmptyListPlaceholder opt='empty-filter'/>);
		} else {
			renderedListView = (
				<FlatList
					style = {{flex: 1}}
					data={this.props.listView}
					renderItem={({item}) => (
						<ListItem
							title={item.title}
							subtitle1={item.title2}
							subtitle2={item.title3}
							imageSource={item.imgUrl}
							isChecked={item.isCompleted}
							onCheckBoxPress={() => {this.handleCheckBoxPress(item)}}
							onSwipeRightComplete={() => {this.handleSwipeRightComplete(item)}}
							onSwipeLeftComplete= {() => {this.handleSwipeLeftComplete(item)}}
						/>
					)}
					keyExtractor = {
						item => item.cretedAt
					}
				/>
			);
		}


//AUTOCOMPLETE SECTION
		let renderAutocomplete = (<View></View>);
		if(this.props.groceriesView){ 
			
			renderAutocomplete = (
				<AutocompleteContainer>
					<FlatList
						style = {{flex: 0.1, backgroundColor: 'transparent'}}
						horizontal={true}
					  	data={this.props.groceriesView}
					  	renderItem={({item}) => (
					  		<HorizontalListItem
					  			 title={item.name.it.main}
					  			 onPress = {() => {this.handleAutocompletePress(item)}}
					  		/>
					  	)}
					  	keyExtractor = {item => item._id}
					  			
					/>	
				</AutocompleteContainer>
			);

		}

//RETURN
		return(
			<DataListContainer>
				<StatusBar translucent={false} barStyle="default"/>
				<Header onPress={this.handleOptionsPress} />
				{renderedListView}
				{renderAutocomplete}
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
		filterString: state.shoppinglist.filterString,
		groceriesList: state.groceries.groceries,
		groceriesView: state.groceries.groceriesView,
	};
}

export default connect(mapStateToProps)(ShoppingList);



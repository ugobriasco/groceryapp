import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
	View,
	FlatList,
	Text,
	Keyboard,
	Platform,
} from 'react-native';

//shared components
import { EmptyListPlaceholder, Separator } from '../../components/List';
import { DataListContainer}  from '../../components/Container';
import { Header, Statusbar } from '../../components/Header';


//local components
import { ListItem } from './components/List';
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
	updateAll, 	
} from '../../actions/shoppinglist';
import { updateGroceriesView, getInitialGroceries }from '../../actions/groceries';

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
	} //to update

	componentWillMount(){
		this.props.dispatch(getInitialGroceries());
	}

	//dispatch the changes to the list, clear filter ans force update;
	save = (list) => {
		// this.props.dispatch(updateListView(list));

		// this.props.dispatch(syncLists(list));
		// this.props.dispatch(changeFilterText(''));
		this.props.dispatch(updateAll(list, ''));
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
	//ad item mapping from default groceribot api items
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
	  	this.props.dispatch(updateGroceriesView(this.props.groceriesList));
		this.save(arr);
	}
	//remove an item from the list
	removeItem = (item) => {
		const i = this.props.dataList.indexOf(item);
		let arr = this.props.dataList;
		remove(arr,i);
		this.save(arr);	
	}

	//UI Objects handling
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
	handleOptionsPress = () => {
		console.log('handle Option Press');
		this.props.navigation.navigate('Options');

	}

	render(){

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
							extraData={this.state}
						/>
					)}
					keyExtractor = {
						item => item.cretedAt
					}
				/>
			);
		}

//RETURN
		
		return(
			<DataListContainer>
				<Statusbar />
				<Header onPress={this.handleOptionsPress} />
				
				{renderedListView}
				<Omnibox
					onPress={() => this.handleAddPress(this.props.filterString)}
					onChangeText= {this.handleFilterStrChange}
		 			value = {this.props.filterString}
					onAutocompletePress = {(item) => {this.handleAutocompletePress(item)}}
					data={this.props.groceriesView}
					enableAutocomplete={true}
					
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
		groceriesList: state.groceries.groceriesData.list,
		groceriesView: state.groceries.groceriesView,
		
	};
}

export default connect(mapStateToProps)(ShoppingList);



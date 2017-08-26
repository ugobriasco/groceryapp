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
import { ListItem, ShoppingListView } from './components/List';
import { Omnibox } from './components/Omnibox';

//backend
import ItemModel from '../../models/ItemModel'; 
import { 
	getInitialDataList,
	changeFilterText,
	updateListView,
	updateDataList,
	syncLists,
	getListView, 	
} from '../../actions/shoppinglist';
import { updateGroceriesView, getInitialGroceries }from '../../actions/groceries';

const move = (array, fromIndex, toIndex) => {
	return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
};

const remove = (array, index) => {
	return array.splice(index, 1);
};

const switchmark = (item) =>  {
	if(item.isCompleted != undefined)  return item.isCompleted = !item.isCompleted
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

	//switch item.isCompleted and move it to the top/bottom of the list
	updateItem = (item) => {
		const i = this.props.dataList.indexOf(item);
		let size = this.props.dataList.length;
		let list = this.props.dataList;


		if(list[i].isCompleted === false) {
			list[i].isCompleted = true;
			move(list,i,size);
		} //if completed, item move to the bottom
		else {
			list[i].isCompleted = false;
			move(list,i,0);
		} // if not completed, item moved to the top
		this.props.dispatch(syncLists(list));
		this.forceUpdate();
	}
	//add an item to the top of the list
	addItem = (text) => {
		const data = this.props.dataList;
		let list = [new ItemModel(text)];
		list = list.concat(data);
		this.props.dispatch(syncLists(list));
	}
	//ad item mapping from default groceribot api items
	addItemFromGroceries = (item) => {
		const data = this.props.dataList;
		let list = [
			new ItemModel(
			  	item.name.it.main,
			  	item.name.de.main,
			  	item.name.pl.main,
			  	item.pic,
			  	item._id,
			  	)
	  	];
	  	list = list.concat(data);
	  	this.props.dispatch(updateGroceriesView(this.props.groceriesList));
		this.props.dispatch(syncLists(list));
	}
	//remove an item from the list
	removeItem = (item) => {
		const i = this.props.dataList.indexOf(item);
		let list = this.props.dataList;
		remove(list,i);
		this.props.dispatch(syncLists(list));
		this.forceUpdate();	
	}



	//UI Objects handling
	handleAddPress = 			(text) => {text ? this.addItem(text) : null}
	handleCheckBoxPress = 		(item) => {item ? this.updateItem(item) : null} 
	handleSwipeRightComplete = 	(item) => {item ? this.removeItem(item) : null}
	handleSwipeLeftComplete = 	(item) => {item ? this.updateItem(item) : null}
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
		
		this.props.navigation.navigate('Settings');

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
							subtitle1={ this.props.isMultiLang ? item.title2 : null}
							subtitle2={ this.props.isMultiLang ? item.title3 : null}
							imageSource={item.imgUrl}
							isChecked={item.isCompleted}
							onCheckBoxPress={() => {this.handleCheckBoxPress(item)}}
							onSwipeRightComplete={() => {this.handleSwipeRightComplete(item)}}
							onSwipeLeftComplete= {() => {this.handleSwipeLeftComplete(item)}}

						/>
					)}
					keyExtractor = {(item, index) => item._id}

				/>
			);
		}



		//optional
		// let renderedListView = (
		// 	<ShoppingListView 
		// 			onCheckBoxPress={(item) => {this.handleCheckBoxPress(item)}}
		// 			onSwipeRightComplete={(item) => {this.handleSwipeRightComplete(item)}}
		// 			onSwipeLeftComplete= {(item) => {this.handleSwipeLeftComplete(item)}}
		// 			{...this.props}
		// 	/>
		// );

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
		isMultiLang: state.settings.multipleLanguages,
		
	};
}

export default connect(mapStateToProps)(ShoppingList);



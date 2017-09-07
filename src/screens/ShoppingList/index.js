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
	changeFilterText,
	updateListView,
	updateDataList,
	syncLists,
	getListView, 	
} from '../../actions/shoppinglist';
import { updateGroceriesView, getInitialGroceries }from '../../actions/groceries';


//general utility functions, to be separated 
const move = (array, fromIndex, toIndex) => {
	return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
};

const remove = (array, index) => {
	let arr = array.slice();
	arr.splice(index, 1);
	return arr;
};


//toggles the 'isCompleted' property of an Item
const toggle = (array, item) =>  {
	let arr = array.slice();
	for (let i=0; i< arr.length; i++){
		if(arr[i]._id === item._id){
			arr[i].isCompleted = !arr[i].isCompleted
		}
	}
	return arr;
};

//toggles the 'isCompleted' property of an Item
//and moves it to the top/bottom of the stack
const toggleAndMove = (array, item) => {
	let arr = array.slice();
	console.log(arr);
	for (let i=0; i< arr.length; i++){
		if( arr[i]._id === item._id ){
			if(arr[i].isCompleted === true){
				arr[i].isCompleted = false;
				move(arr,i,0);
				break;
				
			}
			else {
				arr[i].isCompleted = true;
				move(arr,i,arr.length);
				break;		
			}
		}	
	}
	return arr;
}


class ShoppingList extends Component {

	static propTypes = {
		dispatch: PropTypes.func,
		dataList: PropTypes.array,
		listView: PropTypes.array,
		filterString: PropTypes.string,
		groceriesList: PropTypes.array,
		groceriesView: PropTypes.array,
		isMultiLang: PropTypes.bool,
		language: PropTypes.array,
	}

	componentWillMount(){
		this.props.dispatch(getInitialGroceries());
	}
	//switch item.isCompleted and move it to the top/bottom of the list
	updateItem = (item) => {
		const i = this.props.dataList.indexOf(item);
		let size = this.props.dataList.length;
		const list = toggleAndMove(this.props.dataList, item);
		this.props.dispatch(syncLists(list));
	}
	//add an item to the top of the list 
	addItem = (text) => {
		const data = this.props.dataList;
		let list = [new ItemModel({text: text, lang: this.props.language[0].id})];
		list = list.concat(data);
		this.props.dispatch(syncLists(list));
	}
	//ad item mapping from default groceribot api items
	addItemFromGroceries = (item) => {
		const data = this.props.dataList;

		//get the language settings
		const title = eval(`item.name.${this.props.language[0].id}`);
		const subtitle1 = eval(`item.name.${this.props.language[1].id}`);
		const subtitle2 = eval(`item.name.${this.props.language[2].id}`);

	 
	 	let list = [
	 	new ItemModel("",item)
	 	];

	  	list = list.concat(data);
	  	this.props.dispatch(updateGroceriesView(this.props.groceriesList));
		this.props.dispatch(syncLists(list));
	}
	//remove an item from the list
	removeItem = (item) => {
		const i = this.props.dataList.indexOf(item);
		const list = remove(this.props.dataList,i);
		this.props.dispatch(syncLists(list));	
	}

	//UI Components handling
	_handleAddPress = 			(text) => {text ? this.addItem(text) : null}
	_handleCheckboxPress = 		(item) => {item ? this.updateItem(item) : null} 
	_handleSwipeRightComplete = (item) => {item ? this.removeItem(item) : null}
	_handleSwipeLeftComplete = 	(item) => {item ? this.updateItem(item) : null}
	_handleFilterStrChange = 	(text) => {
		const titleStr = `item.groceryObj.name.${this.props.language[0].id}.main`;
		const subtitle1Str = `item.groceryObj.name.${this.props.language[1].id}.main`;
		const subtitle2Str = `item.groceryObj.name.${this.props.language[2].id}.main`;
		
		let filteredList = this.props.dataList.filter(function f(item){

			if(item.rawObj.text){
				if(item.rawObj.text.match(new RegExp('.*' + text +'.*', 'gi'))) return true;
			} 
			if(item.groceryObj.name){
				if(
					eval(titleStr).match(new RegExp('.*' + text +'.*', 'gi')) ||
					eval(subtitle1Str).match(new RegExp('.*' + text +'.*', 'gi')) ||
					eval(subtitle2Str).match(new RegExp('.*' + text +'.*', 'gi'))
				) return true
			}
			
		});

		let filteredGroceries = this.props.groceriesList.filter((item) =>
			eval(`item.name.${this.props.language[0].id}.main`).match(new RegExp('.*' + text +'.*', 'gi'))
		);
		this.props.dispatch(updateListView(filteredList));
		this.props.dispatch(updateGroceriesView(filteredGroceries));
		this.props.dispatch(changeFilterText(text));
	}
	_handleAutocompletePress = 	(item) => {item ? this.addItemFromGroceries(item): null}	
	_handleOptionsPress = () => {	
		this.props.navigation.navigate('Settings');
	}

	render(){

		let renderedListView = (<View></View>);
		if(this.props.listView.length === 0 && this.props.dataList.length === 0) {
			renderedListView = (<EmptyListPlaceholder _opt='empty-list'/>);
		} 
		if(this.props.listView.length === 0 && this.props.dataList.length > 0) {
			renderedListView = (<EmptyListPlaceholder _opt='empty-filter'/>);
		} else {


			const titleStr = `item.groceryObj.name.${this.props.language[0].id}`;
			const subtitle1Str = `item.groceryObj.name.${this.props.language[1].id}`;
			const subtitle2Str = `item.groceryObj.name.${this.props.language[2].id}`;

			renderedListView = (
				<FlatList
					style = {{flex: 1}}
					data={this.props.listView}
					renderItem={({item}) => (
						<ListItem
							title={ item.groceryObj 
								? `${eval(titleStr).main} ${eval(titleStr).spec}`
								: item.rawObj.text
							}
							subtitle1={ this.props.isMultiLang && item.groceryObj ? `${eval(subtitle1Str).main} ${eval(subtitle1Str).spec}` : null}
							subtitle2={ this.props.isMultiLang && item.groceryObj ? `${eval(subtitle2Str).main} ${eval(subtitle2Str).spec}` : null}
							imageSource={ item.groceryObj ? item.groceryObj.pic : null}
							isChecked={item.isCompleted}
							onCheckBoxPress={() => {this._handleCheckboxPress(item)}}
							onSwipeRightComplete={() => {this._handleSwipeRightComplete(item)}}
							onSwipeLeftComplete= {() => {this._handleSwipeLeftComplete(item)}}

						/>
					)}
					keyExtractor = {(item, index) => item._id}

				/>
			);
		}
		
		return(
			<DataListContainer>
				<Statusbar />
				<Header onPress={this._handleOptionsPress} />
				
				{renderedListView}
				
				<Omnibox
					onPress ={() => this._handleAddPress(this.props.filterString)}
					onSubmitEditing = {() => this._handleAddPress(this.props.filterString)}
					onChangeText= {this._handleFilterStrChange}
		 			value = {this.props.filterString}
					onAutocompletePress = {(item) => {this._handleAutocompletePress(item)}}
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
		language: state.settings.language,
		
	};
}

export default connect(mapStateToProps)(ShoppingList);



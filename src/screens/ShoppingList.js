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
	ItemModel,
} from '../components/List';

import { DataListContainer } 	from '../components/Container';
import { Omnibox } 				from '../components/TextInput';

import { 
	getInitialDataList,
	changeFilterText, 
	filterDataList,
	updateDataList,
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
		console.log('add item', text);
		let newItem = new ItemModel(text);
		//let updatedList = this.props.dataList.push(newItem);
		//this.props.dispatch(updateDataList(updatedList));
		let i = {"_id": "1", pic: '',"name":{"it":{"main": text},"de":{"main": ''},"pl":{"main": ''}}};
		let a = this.props.dataList;
		a.push(i);
		this.props.dispatch(updateDataList(a));
		this.props.dispatch(filterDataList(a,''));


		

	}

	handleFilterStrChange = (text) => {
		let filteredList = this.props.dataList.filter((item) =>
			item.name.it.main.match(new RegExp('.*' + text +'.*', 'gi'))  ||
			item.name.de.main.match(new RegExp('.*' + text +'.*', 'gi'))  ||
			item.name.pl.main.match(new RegExp('.*' + text +'.*', 'gi'))
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
							title={item.name.it.main}
							subtitle1={item.name.de.main}
							subtitle2={item.name.pl.main}
							imageSource={item.pic}
						/>
					)}
					keyExtractor = {
						item => item.pic
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



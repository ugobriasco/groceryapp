import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
	StatusBar,
	View,
	FlatList, 

} from 'react-native';

import { ListItem, Separator} 	from '../components/List';
import { DataListContainer } 	from '../components/Container';
import { Omnibox } 				from '../components/TextInput';

import { 
	getInitialDataList, 
	changeFilterText,
	filterDatalist,
} from '../actions/shoppinglist';

class ShoppingList extends Component {

	static propTypes = {
		dispatch: PropTypes.func,
		getInitialDataList: PropTypes.func,
		changeFilterText: PropTypes.func,
		filterDatalist: PropTypes.func,
	}

	componentWillMount(){
		this.props.dispatch(getInitialDataList());
	}

	handleAddPress(text){
		console.log('add item', text);
	}

	handleFilterStrChange = (text) => {
		//this.props.dispatch(changeFilterText(text));

		let filteredList = this.props.dataList.filter((item) =>
			item.name.it.main.match(new RegExp('.*' + text +'.*', 'gi'))  ||
			item.name.de.main.match(new RegExp('.*' + text +'.*', 'gi'))  ||
			item.name.pl.main.match(new RegExp('.*' + text +'.*', 'gi'))
		);

		//console.log(filteredList);
		this.props.dispatch(filterDatalist(filteredList));



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
					onPress={this.handleAddPress}
					onChangeText= {this.handleFilterStrChange}

				/>
			</DataListContainer>
			
		);
	}

}

const mapStateToProps = (state) => {
	return{
		dataList: state.shoppinglist.dataList,
		filteredDataList: state.shoppinglist.filteredList,
	};
}

export default connect(mapStateToProps)(ShoppingList);



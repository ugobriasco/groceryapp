import EStylesheeSheet from 'react-native-extended-stylesheet';

export default EStylesheeSheet.create({

	$boxMargin: 10,
	$boxMinHeight: 60,
	
	
	//Object: ItemContent
	item_content_box: {
	    flexDirection: 'column',
	    paddingLeft: 10,
	    paddingTop: 10,
	    paddingBottom: 10,
	},
	item_title_text:{
		fontSize: 18,
		fontWeight: 'bold',
	},
	item_subtitle_text:{

	},


	//Object: TextWithIcon
	text_with_icon_box:{
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	    paddingLeft: 20,
	},
	text_with_icon_text:{
		fontSize: 18,
		fontWeight: 'bold',
	},
	text_with_icon_icon:{
		marginRight: 20
	},
});
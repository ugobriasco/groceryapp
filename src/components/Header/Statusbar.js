import React from 'react';
import { StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import color from 'color';


const Statusbar = () => {

	const bg = color(styles.$primary).darken(0.2);

	return(
		<StatusBar translucent={false} backgroundColor={bg} barStyle="default" />
	);
};

export default Statusbar;

const styles = EStyleSheet.create({
  	$primary: '$brandingBackground',
});
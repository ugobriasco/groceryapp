import React from 'react';
import { StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const Statusbar = () => (<StatusBar translucent={false} backgroundColor={styles.$primary} barStyle="default" />);

export default Statusbar;

const styles = EStyleSheet.create({
  	$primary: '$brandingBackground',
});
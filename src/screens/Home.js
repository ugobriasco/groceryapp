import React, { Component} from 'react';
import { StatusBar, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';



import { Container } from '../components/Container';
import { SquareButton } from '../components/Buttons';
import { Logo } from '../components/Logo'



// const Home = () => (

// 	<Container>
// 		<StatusBar translucent={false} barStyle="light-content" />
// 		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
// 			<SquareButton
// 				iconName = 'add'
// 				onPress = {() => null}
// 				size = '200'
// 				textColor = 'red'
// 				color = 'blue'
// 			/>

// 		</View>
		
// 	</Container>
// );

// export default Home;


const Home = () => (
	
 		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#18bc9c'}}>
			<Logo
				imageColor = {styles.$primaryColor}
				backgroundColor = {styles.$backgroundColor}
				customWidth = '250'
				ratio = '1.4'
			/>
		</View>
		
);
export default Home;

const styles = EStyleSheet.create({
	$backgroundColor: 'white',
	$primaryColor: '$brandingBackground'


});


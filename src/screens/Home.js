import React, { Component} from 'react';
import { StatusBar, View } from 'react-native';


import { Container } from '../components/Container';
import { SquareButton } from '../components/Buttons';



const Home = () => (

	<Container>
		<StatusBar translucent={false} barStyle="light-content" />
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
			<SquareButton
				iconName = 'add'
				onPress = {() => null}
				size = '200'
				textColor = 'red'
				color = 'blue'
			/>

		</View>
		
	</Container>
);

export default Home;



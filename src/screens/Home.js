import React, { Component} from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';


const Home = () => (

	<Container>
		<StatusBar translucent={false} barStyle="light-content" />
	</Container>
);

export default Home;
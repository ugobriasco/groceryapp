import React from 'react';
import { View, Text, Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types';


import styles from './styles';

const ANIMATION_DURATION = 250;

const Logo = ({imageColor, customWidth, backgroundColor, ratio}) => {

  const DEFAULT_WIDTH = Dimensions.get('window').width / 2;
  const DEFAULT_BG = 'white';
  const DEFAULT_TINT = 'black';

  //logo customization via component input
  let containerImageWidth = DEFAULT_WIDTH;
  if(customWidth) containerImageWidth = parseInt(customWidth);
  let contianerImageRatio = 1.4;
  if(ratio) containerImageRatio = parseFloat(ratio);
  let imgColor = DEFAULT_TINT;
  if(imageColor) imgColor = imageColor;
  let bgColor = DEFAULT_BG;
  if(backgroundColor) bgColor = backgroundColor;

  
  //image/container proportional rule
  const imageWidth = containerImageWidth/containerImageRatio;


  //style push
  const containerImageStyles = [
    styles.containerImage,
    { width: containerImageWidth, height: containerImageWidth, tintColor: bgColor },
  ];
  const imageStyles = [
    styles.logo,
    { width: imageWidth, tintColor: imgColor },
  ];


  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={containerImageStyles}
        source={require('./images/background.png')}
      >
        <Image
          resizeMode="contain"
          style={imageStyles}
          source={require('./images/logo.png')}
        />
      </Image>
      <Text style={styles.title}>The GroceryApp</Text>
    </View>
  );
  
};


export default Logo;
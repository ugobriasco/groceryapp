import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 1.4,

  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    //width: '$largeContainerSize',
    //height: '$largeContainerSize',
  },
  logo: {
    //width: '$largeImageSize',
    //tintColor: '$brandingBackground',
  },
  title: {
    color: 'white',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '600',
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: '400',
  }
});
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  image: {
    width: 350,
    height: 280,
    left: 32,
    right: 14,
    resizeMode: 'contain',
  },
  container: {
    alignContent: 'center',
    flexDirection: 'column',
    top: 110,
    gap: 9,
  },
  lowerContainer: {
    left: 0,
  },
  innerContainer: {
    left: 25,
    gap: 8,
  },
  boldText: {
    fontFamily: 'Arial', 
    fontWeight: 500,
    height: 38,
    // width: 262,
    fontSize: 24,
    // lineHeight: '100%',
    color: '#000B0F',
    top: 70,
  },
  text: {
    borderRadius: 10,
    top: 65,
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: 14,
    color: '#001E28',
  },

  button: {
    backgroundColor: '#00683F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 364,
    alignSelf: 'center',
    // gap: 48,
    height: 64,
    top: 120,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 500,
    top: 7.5,
    fontFamily: 'Avenir',
  },

});
export default style;

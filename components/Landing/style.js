import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  image: {
    width: 350,
    top: 118,
    height: 280,
    left: 20,
    resizeMode: 'contain',
  },
  container: {
    alignContent: 'center',
    flexDirection: 'column',
    left: 15,
  },
  boldText: {
    font: 'Avenir',
    fontWeight: 500,
    height: 38,
    width: 262,
    fontSize: 28,
    lineHeight: '100%',
    color: '#000B0F',
    top: 160,
  },
  text: {
    borderRadius: 10,
    top: 175,
  },

  button: {
    backgroundColor: '#00683F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 35,
    width: 'auto',
    gap: 48,
    height: 62,
    top: 230,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 500,
    alignItems: 'center',
    fontStyle: 'medium',
    paddingTop: 10,
    fontFamily: 'Avenir',
  },
});
export default style;

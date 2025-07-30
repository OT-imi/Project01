import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    top: 70,
    fontSize: 2,
    flex: 1,
    left: 20,
  },
  arrowPointer: {
    bottom: 24,
    width: 28,
    height: 28,
  },
  text: {
    fontSize: 2,
  },
  proceedText: {
    color: '#f1f1f1',
    fontSize: 13,
    fontWeight: 500,
    borderColor: '#545454',
    borderRadius: 4,
    borderTopStartRadius: 0.5,
    paddingTop: 10,
    fontFamily: 'Roboto',
  },
  buttonNotReady: {
    backgroundColor: '#0000FF',
    overlayColor: '#f1f1f1',
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
    top: 10,
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
    top: 0,
  },
});

export default style;

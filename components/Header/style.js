import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'fff',
    marginTop: 10,
  },
  flagStyle: {
    width: 30,
    height: 17,
  },

  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  pickerContainer: {
    width: 150,
    zIndex: 1000,
    borderColor: '#006B3F',
  },
  picker: {
    // backgroundColor: '#006B3F',
    borderColor: '#006B3F',
    borderRadius: 0,
    top: 0,
    right: 0,
    height: 2,
    width: 150,
  },
  dropdown: {
    width: 150,
    color: '#006B3F',
  },
  text: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default style;

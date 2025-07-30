import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'fff',
    top: 13.5,
  },
  flagStyle: {
    width: 30,
    height: 17,
  },

  logo: {
    width: 148,
    height: 45,
    resizeMode: 'cover',
  },
  pickerContainer: {
    width: 150,
    zIndex: 1000,
    color: '#006B3F',
    borderColor: '#006B3F',
  },
  picker: {
    borderColor: '#006B3F',
    borderRadius: 4,
    width: 150,
  },
  dropdown: {
    width: 150,
    color: '#006B3F',
    right: 4,
  },
  text: {
    color: '#006B3F',
    fontWeight: 'bold',
    paddingLeft: 4.5,
    opacity: 0.6,
  },
});
export default style;

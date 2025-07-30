import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    flexWrap: 'wrap',
  },

  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    minWidth: '30%',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',

    fontWeight: '600',
  },
});

export default style;

import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import MainNavigation from './navigation/MainNavigation.js';
import { CountryContextProvider } from './store/CountryContextProvider.jsx';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CountryContextProvider>
        <MainNavigation />
      </CountryContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#006B3F',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;

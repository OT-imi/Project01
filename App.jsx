import globalStyle from './assets/styles/globalStyles.js';
import { SafeAreaView } from 'react-native';
import MainNavigation from './navigation/MainNavigation.js';
import { CountryContextProvider } from './store/CountryContextProvider.jsx';

function App() {
  return (
    <SafeAreaView style={globalStyle.container}>
      <CountryContextProvider>
        <MainNavigation />
      </CountryContextProvider>
    </SafeAreaView>
  );
}

export default App;

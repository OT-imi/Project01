import globalStyle from './assets/styles/globalStyles.js';
import { SafeAreaView } from 'react-native';
import MainNavigation from './navigation/MainNavigation.js';
import { CountryContextProvider } from './store/CountryContextProvider.jsx';
import { UserDetailProvider } from './store/UserDetailProvider.jsx';

function App() {
  return (
    <SafeAreaView style={globalStyle.container}>
      <CountryContextProvider>
        <UserDetailProvider>
          <MainNavigation />
        </UserDetailProvider>
      </CountryContextProvider>
    </SafeAreaView>
  );
}

export default App;

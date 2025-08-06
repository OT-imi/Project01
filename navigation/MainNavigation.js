import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header/Header.jsx';
import WelcomeScreen from '../components/Landing/WelcomeScreen.jsx';
import { Routes } from './Routes.js';
import userDetails from '../components/Details/userDetails.jsx';
import OTPVerify from '../components/Verification/otpVerify.jsx';
import { NavigationContainer } from '@react-navigation/native';
import TermsConditions from "../components/T and C's/TermsConditions.jsx";
import EmailVerify from '../components/Verification/emailVerify.jsx';

const Stack = createStackNavigator();

const CustomHeader = () => <Header />;

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: CustomHeader,
        }}
        initialRouteName={Routes.WelcomeScreen}
      >
        <Stack.Screen name={Routes.WelcomeScreen} component={WelcomeScreen} />
        <Stack.Screen name={Routes.UserDetails} component={userDetails} />
        <Stack.Screen
          name={Routes.TermsConditions}
          component={TermsConditions}
        />
        <Stack.Screen name={Routes.OTPVerify} component={OTPVerify} />
        <Stack.Screen name={Routes.EmailVerify} component={EmailVerify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;

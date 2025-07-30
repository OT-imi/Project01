import { Image, Text, TouchableOpacity, View } from 'react-native';
import welcomeImg from '../../assets/images/people.png';
import style from './style.js';

export default function WelcomeScreen({ navigation }) {
  const navigateToDetails = () => {
    navigation.navigate('Details');
  };
  return (
    <>
      <View style={style.container}>
        <Image style={style.image} source={welcomeImg} alt="Welcome image" />
        <View style={style.innerContainer}>
          <Text style={style.boldText}>Join HISCode today!</Text>
          <Text style={style.text}>
            The biggest software solutions center in Africa!
          </Text>
        </View>
        <View style={style.lowerContainer}>
          <TouchableOpacity
            style={style.button}
            onPress={() => navigateToDetails()}
          >
            <Text style={style.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

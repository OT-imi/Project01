import { Image, Text, TouchableOpacity, View } from 'react-native';
import welcomeImg from '../../assets/people.png';
import style from './style.js';

export default function WelcomeScreen({ navigation }) {
  const navigateToDetails = () => {
    navigation.navigate('Details');
  };
  return (
    <>
      <View style={style.container}>
        <Image style={style.image} source={welcomeImg} alt="Welcome image" />
        <Text style={style.boldText}>Join HISCode today!</Text>
        <Text style={style.text}>
          The biggest software solutions center in Africa!
        </Text>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigateToDetails()}
        >
          <Text style={style.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

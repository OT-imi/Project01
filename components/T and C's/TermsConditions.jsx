import { Text, View, TouchableOpacity } from 'react-native';
import style from './style.js';
import { useState } from 'react';

export default function TermsConditions({ navigation }) {
  const [accepted, setAccepted] = useState(false);
  const navigateToVerification = () => {
    navigation.navigate('OtpVerify');
  };

  return (
    <View style={style.text}>
      <Text>This is it!!!</Text>
      <TouchableOpacity
        disabled={!accepted}
        style={accepted ? style.buttonNotReady : style.button}
        onPress={() => navigateToVerification()}
      >
        <Text style={style.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

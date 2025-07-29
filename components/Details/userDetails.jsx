import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import style from './style.js';

export default function UserDetails({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [value, setValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const navigateToVerification = () => {
    navigation.navigate('OtpVerify');
  };

  let emptyValue = value.trim() === '' || emailValue === '';

  return (
    <>
      {/* <Header /> */}
      <Text style={style.welcomeText}>Welcome! 🤠</Text>
      <Text style={style.intro}>
        Dear customer, you have requested to open a new account, kindly complete
        the input fields and select your account type.
      </Text>
      <View style={style.inputContainer}>
        {(isFocused || value) && (
          <Text style={style.labelBvn}>Enter your BVN</Text>
        )}
        <TextInput
          placeholder={isFocused ? '' : 'Enter your BVN'}
          style={style.bvnInput}
          value={value}
          // onBlur={() => setIsFocused(false)}
          // onFocus={setIsFocused(true)}
          onChangeText={setValue}
        />
        <Text style={style.textCode}>
          Dial *565*0# on your registered number to get your BVN.
        </Text>
        {(isEmailFocused || emailValue) && (
          <Text style={style.labelEmail}>Enter your Email Address</Text>
        )}
        <TextInput
          placeholder={isEmailFocused ? '' : 'Enter your Email Address'}
          placeholderTextColor="black"
          style={style.emailInput}
          value={emailValue}
          onChangeText={setEmailValue}
        />
        <View>
          <Text>SELECT ACCOUNT TYPE:</Text>
          <TouchableOpacity
            style={style.buttonText}
            onPress={() => navigateToVerification()}
          >
            <Text style={style.buttonText}>PERSONAL ACCOUNT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.buttonText}
            onPress={() => navigateToVerification()}
          >
            <Text style={style.buttonText}>SAVINGS ACCOUNT</Text>
          </TouchableOpacity>
          {/*  */}
        </View>
        <TouchableOpacity
          disabled={emptyValue}
          style={style.buttonText}
          onPress={() => navigateToVerification()}
        >
          <Text style={style.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

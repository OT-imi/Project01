import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import style from './style.js';

export default function UserDetails({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNumberFocused, setIsNumberFocused] = useState(false);
  const [value, setValue] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigateToNext = () => {
    navigation.navigate("T and C's");
  };

  let emptyValue =
    value.trim() === '' || emailAddress === '' || phoneNumber.trim() === '';

  return (
    <ScrollView showsVerticalScrollIndicator>
      <SafeAreaView>
        <View style={style.container}>
          <Text style={style.welcomeText}>Welcome! 🤠</Text>
          <Text style={style.intro}>
            Dear customer, you have requested to open a new account, kindly
            complete the input fields and select your account type.
          </Text>
          <View style={style.inputContainer}>
            <View style={style.bvnInputContainer}>
              {(isFocused || value) && (
                <Text style={style.labelBvn}>Enter your BVN</Text>
              )}
              <TextInput
                placeholder={isFocused ? '' : 'Enter your BVN'}
                style={style.textInput}
                value={value}
                placeholderTextColor="black"
                // onBlur={() => setIsFocused(false)}
                // onFocus={setIsFocused(true)}
                onChangeText={setValue}
                keyboardType="number-pad"
              />
              <Text style={style.textCode}>
                Dial *565*0# on your registered number to get your BVN.
              </Text>
            </View>
            <View style={style.emailInputContainer}>
              {(isEmailFocused || emailAddress) && (
                <Text style={style.labelEmail}>Enter your Email Address</Text>
              )}
              <TextInput
                placeholder={isEmailFocused ? '' : 'Enter your Email Address'}
                placeholderTextColor="black"
                style={style.textInput}
                value={emailAddress}
                onChangeText={setEmailAddress}
                keyboardType="email-address"
              />
            </View>
            <View style={style.numberContainer}>
              {(isNumberFocused || phoneNumber) && (
                <Text style={style.labelNumber}>Enter Your Phone Number</Text>
              )}
              <TextInput
                placeholder={isNumberFocused ? '' : 'Enter your phone number'}
                placeholderTextColor="black"
                style={style.textInput}
                value={`${phoneNumber}`}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
              />
            </View>
            <View>
              <Text style={style.accountText}>SELECT ACCOUNT TYPE:</Text>
              <View style={style.buttonsContainer}>
                <TouchableOpacity style={style.accountButton}>
                  <Text style={style.buttonText}>PERSONAL ACCOUNT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.accountButton}>
                  <Text style={style.buttonText}>SAVINGS ACCOUNT</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.accountButton}>
                  <Text style={style.buttonText}>CURRENT ACCOUNT</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              disabled={emptyValue}
              style={emptyValue ? style.buttonNotReady : style.button}
              onPress={() => navigateToNext()}
            >
              <Text style={style.proceedText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

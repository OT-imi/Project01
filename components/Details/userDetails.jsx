import { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  Pressable,
  Keyboard,
} from 'react-native';
import style from './style.js';
import AccountButton from '../custom/AccountButton.jsx';
import ProceedButton from '../custom/ProceedButton.jsx';
import UserContext from '../../store/UserDetailProvider.jsx';

export default function UserDetails({ navigation }) {
  const { userDetails, updateDetails } = useContext(UserContext);
  const [isFocused, setIsFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNumberFocused, setIsNumberFocused] = useState(false);
  const [value, setValue] = useState(userDetails.bvn);
  const [emailAddress, setEmailAddress] = useState(userDetails.email);
  const [phoneNumber, setPhoneNumber] = useState(userDetails.phone);
  const [selected, setSelected] = useState(userDetails.accountType);
  const [submitted, setSubmitted] = useState(false);

  function handleContinue() {
    setSubmitted(true);
    updateDetails('bvn', value);
    updateDetails('email', emailAddress);
    updateDetails('phone', phoneNumber);
    updateDetails('accountType', selected);
    navigation.navigate("T and C's");
  }
  const validEmail = emailAddress.includes('@') && emailAddress.includes('.');
  const validPhoneNumber = phoneNumber.trim().length >= 10;
  const validValue = value.trim().length >= 10;
  const isSelected = !!selected;

  let emptyValue =
    value.trim() === '' ||
    emailAddress === '' ||
    phoneNumber.trim() === '' ||
    !selected;

  const allValid = validEmail && validPhoneNumber && validValue && isSelected;

  return (
    <ScrollView showsVerticalScrollIndicator>
      <SafeAreaView>
        <Pressable onPress={Keyboard.dismiss}>
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
                  onChangeText={setValue}
                  keyboardType="number-pad"
                  inputMode="numeric"
                  onBlur={() => setIsFocused(false)}
                  onFocus={() => setIsFocused(true)}
                />
                {/* {submitted && !validValue && <Text style={style.error}>Please enter a valid BVN</Text>} */}
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
                  inputMode="email"
                  onBlur={() => setIsEmailFocused(false)}
                  onFocus={() => setIsEmailFocused(true)}
                />
                {/* {submitted && !validEmail && (
                  <Text style={style.error}>
                    Please enter a valid email address
                  </Text>
                )} */}
              </View>
              <View style={style.numberContainer}>
                {(isNumberFocused || phoneNumber) && (
                  <Text style={style.labelNumber}>Enter Your Phone Number</Text>
                )}
                <TextInput
                  placeholder={isNumberFocused ? '' : 'Enter your phone number'}
                  placeholderTextColor="black"
                  style={style.textInput}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  keyboardType="phone-pad"
                  inputMode="tel"
                  textContentType="telephoneNumber"
                  onBlur={() => setIsNumberFocused(false)}
                  onFocus={() => setIsNumberFocused(true)}
                />
                {/* {submitted && !validPhoneNumber && (
                  <Text style={style.error}>Phone number must be ten digits</Text>
                )} */}
              </View>
              <View>
                <Text style={style.accountText}>SELECT ACCOUNT TYPE:</Text>
                <View style={style.buttonsContainer}>
                  <AccountButton
                    account="PA"
                    accountType={'PERSONAL'}
                    setSelected={setSelected}
                    selected={selected}
                  />
                  <AccountButton
                    account="SA"
                    accountType={'SAVINGS'}
                    setSelected={setSelected}
                    selected={selected}
                  />
                  <AccountButton
                    account="CA"
                    accountType={'CURRENT'}
                    setSelected={setSelected}
                    selected={selected}
                  />
                  {/* I built this **** <AccountButton account="AA" accountType="AUTO" setSelected={setSelected} selected={selected}/> */}
                </View>
              </View>
            </View>
            <ProceedButton
              buttonStyle={emptyValue ? style.buttonNotReady : style.button}
              textStyle={style.proceedText}
              label={'Proceed'}
              disabled={allValid || emptyValue}
              onPress={() => handleContinue()}
              // accessibilityLabel="Proceed to Terms and Conditions"
            />
          </View>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  );
}

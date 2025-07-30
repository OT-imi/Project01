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
import AccountButton from '../custom/AccountButton.jsx';
import ProceedButton from '../custom/ProceedButton.jsx';

export default function UserDetails({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNumberFocused, setIsNumberFocused] = useState(false);
  const [value, setValue] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selected, setSelected] = useState(null);

  const navigateToNext = () => {
    navigation.navigate("T and C's");
    console.log('Navigating to Terms and Conditions');
  };

  let emptyValue =
    value.trim() === '' ||
    emailAddress === '' ||
    phoneNumber.trim() === '' ||
    !selected;

  const accountTypes = [
    {
      id: 'personal',
      label: 'Personal Account',
    },
    {
      id: 'savings',

      label: 'Savings Account',
    },
    {
      id: 'current',

      label: 'Current Account',
    },
  ];

  const isSelected = id => selected === id;

  function handleSelect(id) {
    setSelected(id);
  }

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
                <AccountButton
                  account="PA"
                  accountType={"PERSONAL"}
                  setSelected={setSelected}
                  selected={selected}
                />
                <AccountButton
                  account="SA"
                  accountType={"SAVINGS"}
                  setSelected={setSelected}
                  selected={selected}
                />
                <AccountButton
                  account="CA"
                  accountType={"CURRENT"}
                  setSelected={setSelected}
                  selected={selected}
                />
                {/* I built this **** <AccountButton account="AA" accountType="AUTO" setSelected={setSelected} selected={selected}/> */}
              </View>
            </View>
            <ProceedButton
              buttonStyle={emptyValue ? style.buttonNotReady : style.button}
              textStyle={style.proceedText}
              label={'Proceed'}
              disabled={emptyValue}
              onPress={() => navigateToNext()}
              // accessibilityLabel="Proceed to Terms and Conditions"
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

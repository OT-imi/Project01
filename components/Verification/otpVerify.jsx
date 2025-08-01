import ProceedButton from '../custom/ProceedButton.jsx';
import {
  Alert,
  Image,
  Keyboard,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style.js';
import sideArrow from '../../assets/images/sidearrow.png';
import { useContext, useRef, useState } from 'react';
import UserContext from '../../store/UserDetailProvider.jsx';
import verifiedImg from '../../assets/images/successfulOTPValidationImage.png';

let validOTP = Math.round(Math.random() * (9999 - 1111) + 1111);
validOTP = validOTP.toString();
console.log(validOTP);

export default function OTPVerify({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const inputRefs = useRef([]);
  const [isFocused, setIsFocused] = useState(null);
  const { userDetails } = useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function otpMatch(test) {
    if (test === validOTP) {
      setError(false);
      setIsModalVisible(true);
      console.log('correctOtp');
    } else if (test !== validOTP) {
      setError(true);
      console.log('error setting otp');
    }
  }
  const isOtpComplete = otp.every(digit => digit !== '');

  function handleSubmitOtp() {
    const fullOtp = otp.join('');

    if (fullOtp.length < otp.length) {
      Alert.alert('Otp incomplete', 'Please enter the full OTP.');
      return;
    }
    console.log('Submitted OTP:', fullOtp);
    otpMatch(fullOtp);
    // navigation.navigate('Details');
    // Example: navigation.navigate('SuccessScreen');
  }
  function handleKeyPress({ nativeEvent }, index) {
    if (nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
        setError(false);
      }
    }
  }

  function handleChange(text, index) {
    const newOtp = [...otp];
    if (text === '') {
      newOtp[index] = '';
      setOtp(newOtp);
      return;
    }

    if (!/^\d$/.test(text)) return;

    newOtp[index] = text;
    setOtp(newOtp);

    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }
  function handleChangeEmail() {
    navigation.navigate('Details', { editField: 'email' });
  }
  function handleCodeResend() {
    console.log('resend');
  }

  return (
    <SafeAreaView>
      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={style.modalView}>
          <View style={style.modalContent}>
            <Image
              source={verifiedImg}
              alt="Successful Validation"
              style={style.image}
            />
            <Text style={style.confirmTxt}>Confirmation Successful</Text>
            <Text style={style.msg}>
              Dear customer, your mobile number has been successfully confirmed.
            </Text>
            <ProceedButton
              label={'Proceed'}
              onPress={() => setIsModalVisible(false)}
              buttonStyle={style.modalButton}
              textStyle={style.modalButtonText}
            />
          </View>
        </View>
      </Modal>
      <View style={style.container}>
        <Pressable onPress={Keyboard.dismiss}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={style.arrowPointer}
              source={sideArrow}
              alt="Arrow pointing to the left"
            />
          </TouchableOpacity>
          <Text style={style.verifyText}>Verify Email Address</Text>
          <View style={style.wrap}>
            <Text style={style.text}>
              Enter 4-digit code we have sent to your email address:
              {` ${userDetails.email}`}
            </Text>
            {/*add context for the country codes for later verification(4 fields for number Input) */}
            <TouchableOpacity onPress={handleChangeEmail}>
              <Text style={style.emailContent}>Not my email address</Text>
            </TouchableOpacity>
            <View style={style.codeContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={ref => (inputRefs.current[index] = ref)}
                  style={[
                    isFocused === index && style.inputFocused,
                    !!digit && style.inputFocused,
                    error ? style.wrongInput : style.otpInput,
                  ]}
                  maxLength={1}
                  value={digit}
                  onChangeText={text => handleChange(text, index)}
                  keyboardType="number-pad"
                  inputMode="numeric"
                  returnKeyType="done"
                  onKeyPress={e => handleKeyPress(e, index)}
                  onFocus={() => setIsFocused(index)}
                  onBlur={() => setIsFocused(null)}
                />
              ))}
            </View>
            {error ? (
              <Text style={[style.errorMsg]}>
                You typed the wrong code. Kindly check the code and input it
                again!
              </Text>
            ) : (
              <Text style={style.blurText}>Didn't receive the code{'?'}</Text>
            )}
            <TouchableOpacity
              style={error && style.buttonResend}
              onPress={handleCodeResend}
            >
              <Text style={error ? style.errorResendText : style.resendText}>
                Resend Code
              </Text>
            </TouchableOpacity>
            {/* {error && <Text style={style.emptyText}> </Text>} */}
          </View>
          <ProceedButton
            label={'Confirm OTP'}
            // buttonStyle={otpMatch ? style.button : style.buttonNotReady}
            buttonStyle={
              isOtpComplete && !error ? style.button : style.buttonNotReady
            }
            textStyle={style.buttonText}
            disabled={!isOtpComplete || error}
            onPress={handleSubmitOtp}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

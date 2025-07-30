import { Image, Text, View } from 'react-native';
import style from './style.js';
import sideArrow from '../../assets/images/side-arrow.png';

export default function OTPVerify() {
  return (
    <View style={style.container}>
      <Image
        style={style.arrowPointer}
        source={sideArrow}
        alt="Arrow pointing to the left"
      />
      <Text style={style.text}>Verify Email Address</Text>
      <Text style={style.text}>
        Enter 5-digit code we have sent to your mobile number: +233242223344
      </Text> {/*add context for the country codes for later verification(4 fields for number Input) */}
      <Text style={style.text}>Not my number</Text>

      {/* <Text style={style.text}>OtpVerifyScreen</Text> */}
    </View>
  );
}

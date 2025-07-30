import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import style from './style.js';
import { useState } from 'react';
import sideArrow from '../../assets/images/sidearrow.png';
import ProceedButton from '../custom/ProceedButton.jsx';

export default function TermsConditions({ navigation }) {
  const [accepted, setAccepted] = useState(false);
  const navigateToVerification = () => {
    navigation.navigate('OtpVerify');
  };

  return (
    <ScrollView showsVerticalScrollIndicator>
      <View style={style.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={style.arrowPointer}
            source={sideArrow}
            alt="Arrow pointing to the left"
          />
        </TouchableOpacity>
        <Text>This is it!!!</Text>

        <Text>
          Terms and Conditions Last Updated: May 01, 2022 This terms and
          condition describes Our policies and procedures on the collection, use
          and disclosure of Your information when You use the Service and tells
          You about Your privacy rights and how the law protects You. We use
          Your Personal data to provide and improve the Service. By using the
          Service, You agree to the collection and use of information in
          accordance with this Privacy Policy. Interpretation and Definitions
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural. Privacy Policy Last Updated: May 01, 2022 This
          privacy policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You. I agree and accept the terms of the privacy and user
          agreement. Proceed
        </Text>
        <ProceedButton
          buttonStyle={accepted ? style.buttonNotReady : style.button}
          textStyle={style.proceedText}
          onPress={navigateToVerification}
          disabled={!accepted}
          label={'Proceed'}
          // accessibilityLabel="Proceed to OTP Verification"
        />
      </View>
    </ScrollView>
  );
}

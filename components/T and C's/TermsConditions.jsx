import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import style from './style.js';
import { useState } from 'react';
import sideArrow from '../../assets/images/sidearrow.png';
import ProceedButton from '../custom/ProceedButton.jsx';
import tickIcon from '../../assets/images/tickVectorImg.png';

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
        <Text style={style.headerText}>Terms and Conditions</Text>
        <Text style={style.dateTxt}>
          <Text style={style.updateTxt}>Last Updated:</Text> May 01, 2022
        </Text>
        <Text style={style.termsText}>
          This terms and condition describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </Text>
        <Text style={style.termsText}>
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
        </Text>
        <Text style={style.termsText}>
          <Text style={style.subHeader}>Interpretation and Definitions</Text>
        </Text>
        <Text style={style.termsText}>
          The words of wahich the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </Text>
        <Text style={style.headerText}>Privacy Policy</Text>
        <Text style={style.dateTxt}>
          <Text style={style.updateTxt}>Last Updated:</Text> May 01, 2022
        </Text>
        <Text style={style.termsText}>
          This privacy policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </Text>
        <View style={style.checkBox}>
          <TouchableOpacity
            onPress={() => setAccepted(!accepted)}
            style={style.checkBoxContainer}
          >
            <View
              style={[style.checkboxContainer, accepted && style.checkedBox]}
            >
              {accepted && (
                <Image source={tickIcon} style={style.tick} alt={'☑'} />
              )}
            </View>
            <Text style={style.checkboxTxt}>
              I agree and accept the terms of the privacy and user agreement.
            </Text>
          </TouchableOpacity>
        </View>
        <ProceedButton
          buttonStyle={accepted ? style.button : style.buttonNotReady}
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

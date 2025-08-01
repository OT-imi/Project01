import { Text, Image } from 'react-native';
import ProceedButton from '../custom/ProceedButton.jsx';
import verifiedImg from '../../assets/images/successfulOTPValidationImage.png';
import style from './style.js';
import { useRef } from 'react';

export default function VerificationModal({ navigation, handleClose }) {
  const success = useRef();

  return (
    <dialog ref={success} onClose={handleClose}>
      <Image source={verifiedImg} alt="Successful Validation" />
      <Text>Confirmation Successful</Text>
      <Text>
        Dear customer, your mobile number has been successfully confirmed.
      </Text>
      <ProceedButton
        label={'Proceed'}
        onPress={() => navigation.navigate('Welcome')}
        buttonStyle={style.button}
        textStyle={style.buttonText}
      />
    </dialog>
  );
}

import { Text, Image, Modal, View } from 'react-native';
import ProceedButton from '../custom/ProceedButton.jsx';

export default function VerificationModal({
  navigation,
  nextScreenFlow,
  handlePress,
  alternateText,
  visibleState,
  animationType,
  handleClose,
  viewStyle,
  sourceImg,
  imgStyle,
  message,
  msgStyle,
  headerText,
  headerStyle,
  viewContentStyle,
  buttonStyle,
  buttonText,
  ...props
}) {
  return (
    <Modal
      visible={visibleState}
      onRequestClose={() => handleClose()}
      animationType={animationType}
      transparent
    >
      <View style={viewStyle}>
        <View style={viewContentStyle}>
          <Image source={sourceImg} alt={alternateText} style={imgStyle} />
          <Text style={headerStyle}>{headerText}</Text>
          <Text style={msgStyle}>{message}</Text>
          <ProceedButton
            label={'Proceed'}
            buttonStyle={buttonStyle}
            textStyle={buttonText}
            onPress={() => handlePress()}
          />
        </View>
      </View>
    </Modal>
  );
}

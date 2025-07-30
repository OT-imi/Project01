import { Text, TouchableOpacity } from 'react-native';

export default function ProceedButton({
  label,
  onPress,
  buttonStyle,
  textStyle,
  ...props
}) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} {...props}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}

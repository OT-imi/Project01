import { Text, TouchableOpacity } from 'react-native';
import style from '../Details/style.js';

export default function AccountButton({
  account,
  accountType,
  selected,
  setSelected,
}) {
  const isSelected = id => selected === id;

  function handleSelect(id) {
    setSelected(id);
  }

  return (
    <TouchableOpacity
      style={isSelected(account) ? style.activeButton : style.accountButton}
      onPress={() => handleSelect(account)}
    >
      <Text
        style={isSelected(account) ? style.activebuttonText : style.buttonText}
      >
        {accountType} ACCOUNT
      </Text>
    </TouchableOpacity>
  );
}

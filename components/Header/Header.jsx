import hisLogo from '../../assets/images/logo.png';
import { Image, View } from 'react-native';
import naijaFlag from '../../assets/images/naija.png';
import canadaFlag from '../../assets/images/canada.png';
import ghanaFlag from '../../assets/images/ghana.png';
import krwFlag from '../../assets/images/krw.png';
import { useContext, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import CountryContext from '../../store/CountryContextProvider.jsx';
import style from './style.js';

const allCountries = [
  {
    label: 'Nigeria',
    icon: () => <Image source={naijaFlag} style={style.flagStyle} />,
    value: 'NIG',
  },
  {
    label: 'Canada',
    icon: () => <Image source={canadaFlag} style={style.flagStyle} />,
    value: 'CND',
  },
  {
    label: 'Ghana',
    icon: () => <Image source={ghanaFlag} style={style.flagStyle} />,
    value: 'GHN',
  },
  {
    label: 'South Korea',
    icon: () => <Image source={krwFlag} style={style.flagStyle} />,
    value: 'SKR',
  },
];

function Header() {
  const { selectedCountry, setSelectedCountry } = useContext(CountryContext);
  const [open, setOpen] = useState(false);
  // const [items, setItems] = useState(allCountries);

  return (
    <View style={style.headerContainer}>
      <Image source={hisLogo} alt="HISCODE SOLUTIONS" style={style.logo} />
      <DropDownPicker
        open={open}
        value={selectedCountry}
        items={allCountries}
        setOpen={setOpen}
        setValue={setSelectedCountry}
        showTickIcon={false}
        style={style.picker}
        placeholder="Select a Country"
        textStyle={style.text}
        dropDownContainerStyle={style.pickerContainer}
        containerStyle={style.dropdown}
      />
    </View>
  );
}
export default Header;

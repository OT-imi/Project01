import { createContext, useState } from 'react';

const CountryContext = createContext();

export function CountryContextProvider({ children }) {
  const [selectedCountry, setSelectedCountry] = useState('NIG');

  return (
    <CountryContext value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext>
  );
}

export default CountryContext;

import { createContext, useState } from 'react';

const CountryContext = createContext();

export function CountryContextProvider({ children }) {
  const [selectedCountry, setSelectedCountry] = useState('NIG');

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

export default CountryContext;

// AppContext.js
import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserDetailProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    bvn: '',
    // name: '',
    email: '',
    phone: '',
    accountType: null,
  });

  const updateDetails = (key, value) => {
    setUserDetails(prev => ({ ...prev, [key]: value }));
  };

  return (
    <UserContext value={{ userDetails, updateDetails }}>{children}</UserContext>
  );
}

export default UserContext;

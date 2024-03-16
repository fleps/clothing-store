import { createContext, useEffect, useState } from 'react';
import { authChangedListener, createUserDocFromAuth } from '../utils/firebase/firebase.utils';

// The actual value that will be accessed
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
});

// The actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = authChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      setCurrentUser(user);
    })
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}

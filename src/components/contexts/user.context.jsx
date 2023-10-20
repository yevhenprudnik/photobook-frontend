import { createContext, useEffect, useState } from 'react';
import { api } from '../../api/api';

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        const { data } = await api.get('/auth');

        setCurrentUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};

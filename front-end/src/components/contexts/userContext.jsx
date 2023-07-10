import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserDataState] = useState(() => {
    const localData = localStorage.getItem('userData');
    return localData ? JSON.parse(localData) : [];
  });

  const setUserData = (newUserData) => {
    if (newUserData === null) {
      setUserDataState([]);
      localStorage.clear();
    } else {
      setUserDataState(newUserData);
    }
  };

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userMood, setUserMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

  const addMoodEntry = (moodEntry) => {
    setMoodHistory(prevHistory => [...prevHistory, moodEntry]);
  };

  return (
    <AppContext.Provider value={{ userMood, setUserMood, moodHistory, addMoodEntry }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

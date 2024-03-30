import React, { createContext, useState } from 'react';
import DEFAULT_DATA from './data.json'

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [defaultData] = useState(DEFAULT_DATA);
  const [data, setData] = useState(DEFAULT_DATA);

  return (
    <DataContext.Provider value={{ data, setData, defaultData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };

import React, { useState, createContext, useContext } from 'react';

export const AvailablePointsContext = createContext();
export const AvailablePointsProvider = ({ children }) => {
  const [availablePoints, setAvailablePoints] = useState(6);

  const addPoint = () => setAvailablePoints((prev) => prev + 1);
  const removePoint = () => setAvailablePoints((prev) => prev - 1);

  return (
    <AvailablePointsContext.Provider value={{ availablePoints, addPoint, removePoint }}>
      {children}
    </AvailablePointsContext.Provider>
  );
};

export const useAvailablePoints = () => useContext(AvailablePointsContext);

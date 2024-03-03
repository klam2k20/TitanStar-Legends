import React, { useState, createContext, useContext } from 'react';

const MAX_AVAILABLE_POINTS = 6;
const AvailablePointsContext = createContext();

/**
 * Keep track of available points
 */
const AvailablePointsProvider = ({ children }) => {
  const [availablePoints, setAvailablePoints] = useState(MAX_AVAILABLE_POINTS);

  const addPoint = () => setAvailablePoints((prev) => prev + 1);
  const removePoint = () => setAvailablePoints((prev) => prev - 1);

  return (
    <AvailablePointsContext.Provider value={{ availablePoints, addPoint, removePoint }}>
      {children}
    </AvailablePointsContext.Provider>
  );
};

const useAvailablePoints = () => useContext(AvailablePointsContext);

export { MAX_AVAILABLE_POINTS, AvailablePointsProvider, useAvailablePoints };

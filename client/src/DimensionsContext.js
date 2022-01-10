import React, { useState, createContext } from "react";

export const DimensionsContext = createContext();

const initialState = {
  width: 1152,
  viewHeight: null,
};

export const DimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState(initialState);
  // console.log("initial appstate");
  const value = { dimensions, setDimensions };

  return <DimensionsContext.Provider value={value}>{children}</DimensionsContext.Provider>;
};

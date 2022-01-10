import React, { useState, createContext } from "react";

export const OptionsContext = createContext();

const initialState = { currentLang: "English" };

export const OptionsProvider = ({ children }) => {
  const [contentOptions, setContentOptions] = useState(initialState);
  // console.log("initial appstate");
  const value = { contentOptions, setContentOptions };

  return <OptionsContext.Provider value={value}>{children}</OptionsContext.Provider>;
};

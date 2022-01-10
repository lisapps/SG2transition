import React, { useState, createContext, Fragment } from "react";

export const AppContext = createContext();

const initialState = {
  brand: "kingston",
  navVisible: false,
  currentPath: "/",
  thumb: "",
  headline: (
    <Fragment>
      For All Your Creative Needs, <a href="/">#KingstonIsWithYou</a>
    </Fragment>
  ),
  description: "Welcome Kingston's styleguide...",
  specs: null,
  scripts: [],
  htmlSaved: false,
  currentTheme: "t-pearl",
};
//Other properties that the app saves are:
// saveHtml: true/false, htmlString: "", flatHTML: "true", htmlSaved: "false"

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState(initialState);
  // console.log("initial appstate");
  const value = { appState, setAppState };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

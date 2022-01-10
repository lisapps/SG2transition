import React, { useContext } from "react";
import modules from "../../../../modules";
import { AppContext } from "../../../../AppContext";

const getHtmlFile = (pathString, setCurrHtmlName, setShowHtml) => {
  const { appState } = useContext(AppContext);
  //remove everything but the name
  let currContentPath = pathString.replace(/\/ui\//, "");
  //remove dashes
  currContentPath = currContentPath.replace(/-/g, "");
  modules.find(function (module) {
    let name;
    if (module.htmlName) name = module.htmlName.toLowerCase();

    if (name == currContentPath) {
      setCurrHtmlName(module.htmlName);
    }
  });
  //set local state to show html by default if available
  appState.htmlSaved ? setShowHtml(true) : setShowHtml(false);
};

export default getHtmlFile;

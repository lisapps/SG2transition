/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState, useEffect } from "react";
import camelize from "../../00_utilities/camelize";
import { AppContext } from "../../../../AppContext";

const C_ThemeSwitcher = () => {
  const { appState, setAppState } = useContext(AppContext);
  const [selThemeName, setSelThemeName] = useState("Pearl");
  const [active, setActive] = useState(false);

  const themes = [
    "White",
    "Pearl",
    "Cloudy",
    "Silver",
    "Stone",
    "Granite",
    "Slate",
    "Dark Slate",
    "Midnight",
  ];

  function changeTheme(theme) {
    let themeStr = "t-";
    // let nameStr = theme.toLowerCase();
    let nameStr = camelize(theme);
    setAppState({
      ...appState,
      currentTheme: themeStr + nameStr,
    });
    setSelThemeName(theme);
    setActive(!active);
  }

  useEffect(() => {
    let str = appState.currentTheme;
    let theme = str.substring(2);
    setSelThemeName(theme);
    setActive(false);
  }, [appState.currentTheme]);

  return (
    <div className={`c-dropDown v-dropDown u-ml1 ${active ? "c-dropDown--active" : ""}`}>
      <div className="c-dropDown__toggler" role="button" onClick={() => setActive(!active)}>
        <span className={`v-bubble t-` + appState.currentTheme}></span>
        {selThemeName}
        <svg className="v-dropDown__chevron" viewBox="0 0 11 6" xmlns="http://www.w3.org/2000/svg">
          <title>icons/chevron</title>
          <path
            d="M5.5 6a.786.786 0 01-.547-.217L.212 1.195a.672.672 0 01.02-.998.799.799 0 011.073.02L5.5 4.276 9.695.216a.8.8 0 011.072-.019c.302.27.312.717.021.998L6.047 5.783A.786.786 0 015.5 6"
            fill="#FFF"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
      <div className="c-dropDown__panel">
        <ul data-root="vDropDown1">
          {themes.map((theme) => (
            <li className="v-dropDown__item" key={theme} onClick={() => changeTheme(theme)}>
              <span className={`v-bubble t-` + theme.toLocaleLowerCase()}></span>
              {theme}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default C_ThemeSwitcher;

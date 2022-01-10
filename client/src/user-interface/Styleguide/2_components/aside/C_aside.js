/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { Link, useLocation } from "react-router-dom";
import modules from "../../../../modules";

const C_aside = () => {
  let location = useLocation();

  const { appState, setAppState } = useContext(AppContext);
  const [currPath, setCurrPath] = useState({ activePath: location.pathname });
  const [brands, setBrands] = useState([]);
  const [sections, setSections] = useState([]);
  const [brandClicked, setBrandClicked] = useState(false);
  const [sectionsClicked, setSectionsClicked] = useState(false);

  let visible = appState.navVisible;

  //build arrays to save data for brand and web links to separate states.
  useEffect(() => {
    let bArr = [...brands];
    let sArr = [...sections];
    modules.forEach((module) => {
      // console.log("module: ", module);
      let path = module.path;
      if (path.includes("/brand/")) {
        bArr.push(module);
        setBrands(bArr);
      }
      if (path.includes("/ui/")) {
        sArr.push(module);
        setSections(sArr);
      }
    });
  }, [modules]);

  // useEffect(() => {
  //   let path = appState.currentPath;
  //   if (currPath.activePath !== path) setCurrPath({ activePath: path });
  // }, [appState.currentPath]);

  //set the active path on click
  const handleClick = (path) => {
    if (currPath.activePath !== path) setCurrPath({ activePath: path });
    setAppState({ ...appState, navVisible: !visible, currentPath: path });
  };

  //test to find if each path in nav is current url. Will use if we want to style the current link in the nav.
  const testPath = (str) => {
    if (currPath.activePath !== "/") {
      // if (str !== "/" && currPath.activePath.indexOf(str) != -1) return true;
      if (str !== "/" && currPath.activePath === str) return true;
      return false;
    } else {
      //sep test for home page bc all have start with a slash
      if (currPath.activePath == str) return true;
      return false;
    }
  };

  return (
    <aside
      className={`v-aside ${visible ? "v-aside--active" : ""}`}
      id="v-asideMenu"
      style={{ display: visible ? "block" : "none", opacity: visible ? "1" : "0" }}
    >
      <div
        className="v-overlay"
        id="js-asideOverlay"
        onClick={() => setAppState({ ...appState, navVisible: !visible })}
        role="region"
      ></div>
      <ul className="v-aside__nav u-animated a-slideInLeft">
        <li
          className={`v-aside__nav__group u-animated u-animated--delayFast a-fadeInRight v-aside__sections ${
            visible ? "v-aside__nav__group--active" : ""
          }`}
        >
          <div className="c-dropDown">
            <span
              className="c-dropDown__toggler"
              onClick={() => setBrandClicked(!brandClicked)}
              role="button"
              tabIndex="-2"
            >
              Brand Guidelines
            </span>
            <ul
              className={`u-list-unstyled u-m0 u-p0 c-dropDown__panel${
                brandClicked ? "--active" : ""
              }`}
            >
              {brands.length > 0 &&
                brands.map((
                  module, // with a name, and routes
                ) => (
                  <li
                    key={module.component}
                    className={`${testPath(module.path) ? "current" : ""}`}
                  >
                    <Link
                      to={module.path.replace(/:.+/, "")}
                      onClick={() => handleClick(module.path.replace(/:.+/, ""))}
                    >
                      <span>{module.navtxt}</span>
                    </Link>
                  </li>
                ))}
            </ul>
            <span
              className="c-dropDown__toggler"
              onClick={() => setSectionsClicked(!sectionsClicked)}
              role="button"
              tabIndex="-1"
            >
              Web Guidelines
            </span>
            <ul
              className={`${
                sectionsClicked
                  ? "u-list-unstyled u-p0 c-dropDown__panel--active"
                  : "u-list-unstyled u-m0 u-p0 c-dropDown__panel"
              }`}
            >
              {sections.length > 0 &&
                sections.map((
                  module, // with a name, and routes
                ) => (
                  <li
                    key={module.component}
                    className={`${module.path === appState.currentPath ? "current" : ""}`}
                  >
                    <Link
                      to={module.path.replace(/:.+/, "")}
                      onClick={() => handleClick(module.path.replace(/:.+/, ""))}
                    >
                      <span>{module.navtxt}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default C_aside;

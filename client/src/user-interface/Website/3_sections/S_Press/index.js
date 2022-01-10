/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_Press = () => {
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const [currentPanel, setCurrentPanel] = useState("");
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    // currentPath is so user still gets correct/no iframe wrapper if they use browser navigation.
    let pressVars = {
      ...appState,
      currentPath: "/ui/press",
      outputName: "Press",
      headerName: "Press",
      description: "The Press Section.",
      htmlSaved: true,
      currentTheme: null,
      scripts: ["../rexusManager.component.js", "../cuid.component.js", "../tabs.layout.js"],
      specs: [
        ["Tab Title", ["TBD"]],
        ["Links", ["Date and press release link, no character limit established."]],
      ],
    };
    setAppState(pressVars);
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "157" });
    setCurrentPanel("2017");
  }, []);

  function handleToggle(faq) {
    faq == currentPanel ? setCurrentPanel("") : setCurrentPanel(faq);
  }

  if (!appState) return "...Loading Press section";
  return (
    <section className="s-press">
      <div className="l-tabView">
        <a
          href="http://www.kingston.com/"
          target="_blank"
          rel="noreferrer"
          className="l-tabView__externals"
        >
          Press Images
        </a>
        <ul className="l-tabView__tabs" role="tablist">
          <li
            className={`l-tabView__tabs__mobile ${
              currentPanel == "2017-mobile" ? "l-tabView__tabs__mobile--active" : ""
            }`}
            onClick={() => handleToggle("2017-mobile")}
          >
            <span>2017 Press Releases</span>
            <svg viewBox="0 0 32 32">
              <path d="M24 2L8 16l16 14"></path>
            </svg>
          </li>
          <li
            className={`l-tabView__tabs__tab ${
              currentPanel == "2017" ? "l-tabView__tabs__tab--active" : ""
            }`}
            role="tab"
            onClick={() => handleToggle("2017")}
          >
            2017 Press Releases
          </li>
          <li
            className={`l-tabView__tabs__tab ${
              currentPanel == "2018" ? "l-tabView__tabs__tab--active" : ""
            }`}
            role="tab"
            onClick={() => handleToggle("2018")}
          >
            2018 Press Releases
          </li>
          <li
            className="l-tabView__tabs__tab"
            role="tab"
            data-href="http://cmc.kingston.com/"
            onClick={() => window.open("http://cmc.kingston.com/", "_blank")}
          >
            Press Images
          </li>
        </ul>
        <div className="l-tabView__panels">
          <div
            className={`l-tabView__panels__panel l-inner  ${
              currentPanel == "2017" ? "l-tabView__panels__panel--active" : ""
            }`}
            role="tabpanel"
          >
            <ol className="c-dateList l-inner">
              <li>
                <a className="c-dateList__listing" href="#PressLink" target="_blank">
                  <div className="c-dateList__listing__title">May 4</div>
                  <div className="c-dateList__listing__desc">Press Title</div>
                </a>
              </li>
            </ol>
          </div>
          <div
            className={`l-tabView__panels__panel l-inner  ${
              currentPanel == "2018" ? "l-tabView__panels__panel--active" : ""
            }`}
            role="tabpanel"
          >
            <p className="l-inner">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_.
export default {
  path: "press",
  component: S_Press,
  navtxt: "Press",
  htmlName: "Press",
  icon: "",
};

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../../AppContext";
import { OptionsContext } from "../../../../OptionsContext";
import { DimensionsContext } from "../../../../DimensionsContext";

const S_SystemScanResultsNR = () => {
  // add instance of appstate
  const { appState, setAppState } = useContext(AppContext);
  const { setContentOptions } = useContext(OptionsContext);
  const { dimensions, setDimensions } = useContext(DimensionsContext);

  useEffect(() => {
    let ss9Vars = {
      ...appState,
      currentPath: "/ui/system-scan-no-results",
      outputName: "SystemScanResultsNR",
      headerName: "System Scan Results: No Results",
      description: "The System Scan Results Section displays system information",
      htmlSaved: true,
      currentTheme: "t-silver",
      scripts: [
        "../rexusManager.component.js",
        "../systemScanResults.section.js",
        "../progressBar.component.js",
      ],
      specs: [
        ["SVG", ["Width: 18px, Height: 18px"]],
        ["Title", ["String Text, H5 tag with inherit global styling"]],
        ["Sub Titles", ["String Text, H6 tag"]],
        ["Description", ["String Text"]],
        ["Images", ["Width: 56px, Height: 32px"]],
        ["Link", ["String Text"]],
      ],
    };
    setAppState(ss9Vars);
    setContentOptions(null);
    setDimensions({ ...dimensions, viewHeight: "418", width: window.innerWidth - 24 });
  }, []);

  //   Customize this loader text
  if (!appState) return "...Loading System Scan Results - No Results Section";
  //  add current section classname plus theme
  return (
    <section
      className={`s-systemScanResults s-systemScanResults--noResults ` + appState.currentTheme}
      id="systemScanResults0"
    >
      <div className="c-heading">
        <div className="c-heading__block">
          <div className="c-heading__block__header">
            <h2>System Scan Results</h2>
          </div>
        </div>
      </div>
      <div className="l-inner s-systemScanResults__layout">
        <div className="c-systemScanResultsCard c-systemScanResultsCard--noScanResult">
          <div className="c-systemScanResultsCard__header">
            <svg
              className="c-systemScanResultsCard__header__icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <use
                xlink="http://www.w3.org/1999/xlink"
                xlinkHref="../images/icons-map.svg#results-no_info"
              ></use>
            </svg>
            <h3 className="u-h5">No Scan Results</h3>
          </div>
          <div className="c-systemScanResultsCard__content">
            <p>
              Sorry, this scan didn’t give us anything to base a storage recommendation on. Please
              feel free to reach out to a Kingston expert to help with your configuration questions.
            </p>
            <div className="c-systemScanResultsCard__content__cta">
              <a className="e-btn e-btn--alt1">
                <svg>
                  <use
                    xlink="http://www.w3.org/1999/xlink"
                    xlinkHref="../images/icons-map.svg#icon-chat"
                  ></use>
                </svg>
                <span>Contact Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//path should be component/section name, lowercase. Add dashes if multiple words.
//html name should be component/section name without the S_ or C_. Don't add until after html is saved.
export default {
  path: "system-scan-no-results",
  component: S_SystemScanResultsNR,
  navtxt: "System Scan Results: No Results",
  htmlName: "SystemScanResultsNR",
};
